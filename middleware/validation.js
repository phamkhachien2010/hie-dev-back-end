const checkEmpty = async(req, res, next) => {
    const { userName, password } = req.body;
    if (!userName) {
        res.status(500).send({ message: "Tài khoản không được để trống" });
    } else if (!password) {
        res.status(500).send({ message: "Mật khẩu không được để trống" });
    } else {
        next();
    }
}

const checkEmptyEditUser = async(req, res, next) => {
    const { userName, oldPassword, newPassword } = req.body;
    if (!userName) {
        res.status(500).send({ message: "Tài khoản không được để trống" });
    } else if (!oldPassword) {
        res.status(500).send({ message: "Mật khẩu cũ không được để trống" });
    } else if (!newPassword) {
        res.status(500).send({ message: "Mật khẩu mới không được để trống" });
    } else {
        next();
    }
}

const checkEmptyWork = async(req, res, next) => {
    const { name } = req.body;
    if (!name) {
        res.status(500).send({ message: "Tên việc không được để trống" });
    } else {
        next();
    }
}

const checkEmptyTodo = async(req, res, next) => {
    const { title } = req.body;
    if (!title) {
        res.status(500).send({ message: "Tên việc không được để trống" });
    } else {
        next();
    }
}

const checkEmptyLibrary = async(req, res, next) => {
    const { name, setup, description } = req.body;
    if (!name) {
        res.status(500).send({ message: "Name must not empty!" })
    } else if (!setup) {
        res.status(500).send({ message: 'Setup must not empty!' })
    } else if (!description) {
        res.status(500).send({ message: 'Description must not empty!' })
    } else {
        next();
    }
}

const checkEmptyComment = async(req, res, next) => {
    const { name, email, comment } = req.body;
    if (!name) {
        res.status(500).send({ message: "Nhập tên của bạn!" })
    } else if (!email) {
        res.status(500).send({ message: 'Nhập email của bạn!' })
    } else if (!comment) {
        res.status(500).send({ message: 'Nhập comment!' })
    } else {
        next();
    }
}

module.exports = {
    checkEmpty,
    checkEmptyWork,
    checkEmptyTodo,
    checkEmptyLibrary,
    checkEmptyComment,
    checkEmptyEditUser
}