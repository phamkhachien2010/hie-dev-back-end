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
            defaultValue: 'https://hie-dev.herokuapp.com/public/images/avatar/1654962543755_avatar-def.jpg'
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