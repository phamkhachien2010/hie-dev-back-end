'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class TodoLists extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate({ Works, Users }) {
            // define association here
            this.hasMany(Works, { foreignKey: 'todoListId' });
            this.belongsTo(Users, { foreignKey: 'userId' })
        }
    }
    TodoLists.init({
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        from: DataTypes.DATE,
        to: DataTypes.DATE,
        type: {
            type: DataTypes.STRING,
            defaultValue: 'WILL_DO'
        }
    }, {
        sequelize,
        modelName: 'TodoLists',
    });
    return TodoLists;
};