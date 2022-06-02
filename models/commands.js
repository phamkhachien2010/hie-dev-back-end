'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Commands extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Commands.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        setup: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: DataTypes.TEXT,
        type: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Commands',
    });
    return Commands;
};