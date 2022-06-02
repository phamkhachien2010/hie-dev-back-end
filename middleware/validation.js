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
        res.status(500).send({ message: "Tên thư viện không được để trống!" })
    } else if (!setup) {
        res.status(500).send({ message: 'setup is require!' })
    } else if (!description) {
        res.status(500).send({ message: 'Description is require!' })
    } else {
        next();
    }
}

module.exports = {
    checkEmpty,
    checkEmptyWork,
    checkEmptyTodo,
    checkEmptyLibrary
}