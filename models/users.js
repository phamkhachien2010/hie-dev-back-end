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
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: DataTypes.STRING,
            defaultValue: 'https://i.pinimg.com/736x/f3/e6/1e/f3e61e48fa385269de23ba7b870f5446.jpg'
        },
        type: {
            type: DataTypes.STRING,
            defaultValue: 'CLIENT'
        }
    }, {
        sequelize,
        modelName: 'Users',
    });
    return Users;
};