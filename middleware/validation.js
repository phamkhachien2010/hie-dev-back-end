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

module.exports = {
    checkEmpty,
    checkEmptyWork,
    checkEmptyTodo
}