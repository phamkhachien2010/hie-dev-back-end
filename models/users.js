'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ TodoLists }) {
            // define association here
            this.hasMany(TodoLists, { foreignKey: 'userId' })
        }
    }
    Users.init({
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                checkEmpty: (value) => {
                    if (value) {
                        return true;
                    } else {
                        throw Error('Tên không đươc để trống')
                    }
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                checkEmpty: (value) => {
                    if (value) {
                        return true;
                    } else {
                        throw Error('Mật khẩu không đươc để trống')
                    }
                }
            }
        },
        avatar: {
            type: DataTypes.STRING,
            defaultValue: "https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: 'Client'
        }
    }, {
        sequelize,
        modelName: 'Users',
    });
    return Users;
};