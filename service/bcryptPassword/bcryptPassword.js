const bcrypt = require('bcrypt');

const bcryptPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hashPassword = bcrypt.hashSync(password, salt);
    return hashPassword;
}

module.exports = {
    bcryptPassword
}