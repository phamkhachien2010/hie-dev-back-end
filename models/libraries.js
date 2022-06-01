'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Libraries extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Libraries.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        setup: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        link: DataTypes.STRING,
        type: DataTypes.STRING,
        tutorial: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Libraries',
    });
    return Libraries;
};