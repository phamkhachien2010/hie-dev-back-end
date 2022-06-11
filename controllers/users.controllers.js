const { Users } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { bcryptPassword } = require('../service/bcryptPassword/bcryptPassword');

const register = async(req, res) => {
    const { userName, password, confirmPassword } = req.body;
    try {
        const listUsers = await Users.findAll();
        const user = listUsers.find((user) => user.userName === userName);
        if (!user) {
            if (password === confirmPassword) {
                const hashPassword = bcryptPassword(password)
                const newUser = await Users.create({ userName, password: hashPassword });
                res.status(201).send(newUser)
            } else {
                res.status(500).send({ message: 'Nhập lại đúng mật khẩu' })
            }
        } else {
            res.status(500).send({ message: 'Tài khoản đã tồn tại.' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const getAllUser = async(req, res) => {
    try {
        const listUser = await Users.findAll();
        if (listUser) {
            res.status(200).send(listUser);
        } else {
            res.status(404).send({ meeage: 'Not found!' });
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const login = async(req, res) => {
    const { userName, password } = req.body;
    try {
        const userLogin = await Users.findOne({
            where: {
                userName
            }
        });
        if (userLogin) {
            const isAuth = bcrypt.compareSync(password, userLogin.password); // giải mã password
            if (isAuth) {
                const token = jwt.sign({ userName: userLogin.userName, password: userLogin.password, type: userLogin.type }, "hien0208"); // tạo token khi đăng nhập
                res.status(200).send({
                    message: "Đăng nhập thành công",
                    token,
                    content: userLogin
                })
            } else {
                res.status(404).send({ message: "Mật khẩu không đúng" })
            }
        } else {
            res.status(404).send({ message: "Tài khoản không đúng hoặc chưa được đăng ký" })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const uploadAvatar = async(req, res) => {
    const { file } = req;
    const urlImage = `https://hie-dev.herokuapp.com/${file.path}`
    const { user } = req;
    try {
        const userFound = await Users.findOne({
            where: {
                userName: user.userName
            }
        })
        if (userFound) {
            // userFound.avatar = urlImage;
            // await userFound.save();
            res.status(200).send(urlImage)
        } else {
            res.status(404).send({ message: 'Không tìm thấy user' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const clientEditUser = async(req, res) => {
    const { userName, oldPassword, newPassword } = req.body;
    const { user } = req;
    try {
        const listUser = await Users.findAll();
        const listUserWithoutUser = listUser.filter((usercr) => usercr.userName !== user.userName);
        const userFound = await Users.findOne({
            where: {
                userName: user.userName
            }
        })
        const index = listUserWithoutUser.findIndex((user) => user.userName === userName);
        const isAuth = bcrypt.compareSync(oldPassword, user.password);

        if (userFound) { //tìm trong tất cả user có tồn tại user đang trỏ đến không
            if (isAuth) { //kiểm tra mật khẩu cũ có đúng không
                if (index === -1) { //kiểm tra tên tài khoản đã tồn tại chưa
                    const hashPassword = bcryptPassword(newPassword)
                    userFound.userName = userName;
                    userFound.password = hashPassword;
                    await userFound.save();
                    res.status(200).send(userFound);
                } else {
                    res.status(500).send({ message: 'Tài khoản đã tồn tại' })
                }
            } else {
                res.status(500).send({ message: 'Mật khẩu cũ không đúng' })
            }
        } else {
            res.status(404).send({ message: 'Không tìm thấy user' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const adminEditType = async(req, res) => {
    const { id } = req.params;
    const { type } = req.body;
    try {
        const userFound = await Users.findOne({
            where: {
                id
            }
        })
        if (userFound) {
            userFound.type = type;
            await userFound.save();
            res.status(200).send(userFound)
        } else {
            res.status(404).send({ message: 'Không tìm thấy user' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}

const deleteUser = async(req, res) => {
    const { id } = req.params;
    try {
        const userDelete = await Users.findOne({
            where: {
                id
            }
        })
        if (userDelete) {
            await Users.destroy({
                where: {
                    id
                }
            })
            res.status(200).send({ message: 'Xoá user thành công!' })
        } else {
            res.status(404).send({ message: 'Không tìm thấy user' })
        }
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    register,
    login,
    getAllUser,
    uploadAvatar,
    clientEditUser,
    adminEditType,
    deleteUser
}