'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('TodoLists', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            from: {
                type: Sequelize.DATE
            },
            to: {
                type: Sequelize.DATE
            },
            type: {
                type: Sequelize.STRING,
                defaultValue: 'WILL_DO'
            },
            userId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('TodoLists');
    }
};