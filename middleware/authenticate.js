const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    const token = req.header('token'); //keyword yêu cầu nhập để lấy token có thể thay bằng keyword khác ví dụ assessToken
    try {
        const decode = jwt.verify(token, 'hien0208'); // gán decode vào token được giải mã
        if (decode) {
            req.user = decode;
            return next();
        } else {
            res.status(401).send({ meeage: 'Bạn chưa đăng nhập!' })
        }
    } catch (error) {
        res.status(401).send({ meeage: 'Bạn chưa đăng nhập!' })
    }
}

module.exports = {
    authenticate
}