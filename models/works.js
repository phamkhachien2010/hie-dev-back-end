'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Works extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ TodoLists }) {
            // define association here
            this.belongsTo(TodoLists, { foreignKey: 'todoListId' })
        }
    }
    Works.init({
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        type: {
            type: DataTypes.STRING,
            defaultValue: 'WILL_DO'
        }
    }, {
        sequelize,
        modelName: 'Works',
    });
    return Works;
};