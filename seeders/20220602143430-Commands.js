'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        await queryInterface.bulkInsert('Commands', [{
                name: 'init file',
                setup: 'npm init',
                description: "Tạo thư mục có package mặc định",
                type: 'npm nodeJs',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'create react app',
                setup: 'npx create-react-app my-app',
                description: "Tạo cấu trúc thư mục mặc định react front-end",
                type: 'npm reactJs',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'create foldertree sequelize',
                setup: 'npx sequelize init',
                description: "Tạo model trong nodeJs",
                type: 'sequelize',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'create database',
                setup: 'npx sequelize db:create ',
                description: "Tạo database nodeJs",
                type: 'sequelize',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'delete database',
                setup: 'npx sequelize db:drop  ',
                description: "Xoá database nodeJs",
                type: 'sequelize',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'create model',
                setup: 'npx sequelize model:generate',
                description: "Tạo model trong nodeJs",
                type: 'sequelize',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'create model data',
                setup: 'npx sequelize db:migrate',
                description: "Tạo data của model gần nhất trong nodeJs",
                type: 'sequelize',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'delete model data',
                setup: 'npx sequelize db:migrate:undo ',
                description: "Xoá data của model gần nhất trong nodeJs",
                type: 'sequelize',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'delete model data all',
                setup: 'npx sequelize db:migrate:undo:all',
                description: "Xoá data của tất cả các model trong nodeJs",
                type: 'sequelize',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'create data table default',
                setup: 'npx sequelize seed:generate',
                description: "Tạo bảng nhập dữ liệu mặc định",
                type: 'sequelize',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'create data default',
                setup: 'npx sequelize db:seed',
                description: "Tạo dữ liệu mặc định cho seed gần nhất",
                type: 'sequelize',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'create data default all',
                setup: 'npx sequelize db:seed:all',
                description: "Tạo dữ liệu mặc định cho tất cả các seed",
                type: 'sequelize',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'delete data default',
                setup: 'npx sequelize db:seed:undo',
                description: "Xoá dữ liệu mặc định cho seed gần nhất",
                type: 'sequelize',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'delete data default all',
                setup: 'npx sequelize db:seed:undo:all  ',
                description: "Xoá dữ liệu mặc định cho tất cả các seed",
                type: 'sequelize',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },



        ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};