'use strict';

const { bcryptPassword } = require("../service/bcryptPassword/bcryptPassword");

const hashPassword = bcryptPassword('hien0208')

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
        await queryInterface.bulkInsert('Users', [{
            userName: 'hienPhamKhac1234',
            password: hashPassword,
            type: 'SUPER_ADMIN',
            avatar: 'https://resmambet-a.akamaihd.net/mambet-storage/Web/Avatar/50764609/image-1617029076559',
            createdAt: '2022-05-31 12:21:01',
            updatedAt: '2022-05-31 12:21:01'
        }], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        await queryInterface.bulkDelete('Users', null, {});
    }
};