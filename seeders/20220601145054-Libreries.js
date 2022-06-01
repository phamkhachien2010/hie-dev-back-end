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
        await queryInterface.bulkInsert('Libraries', [{
                name: 'lodash',
                setup: "npm i lodash",
                description: 'Giúp xử lý mảng',
                link: 'https://www.npmjs.com/package/lodash',
                type: 'Front-end',
                tutorial: '',
            },
            {
                name: 'react spring',
                setup: "npm i react-spring",
                description: 'Giúp xử lý xử lý animationtrong react',
                link: 'https://react-spring.io/',
                type: 'Front-end',
                tutorial: '',
            },
            {
                name: 'Cloud image 360',
                setup: "npm i react-spring",
                description: 'Giúp tạo chuyển động 360 độ của 1 tệp những hình',
                link: 'https://www.npmjs.com/package/js-cloudimage-360-view',
                type: 'Front-end',
                tutorial: '',
            },
            {
                name: 'sweet alert 2',
                setup: "npm i sweetalert2",
                description: 'Giúp hiển thị hộp thoại alert đẹp hơn',
                link: 'https://sweetalert2.github.io/',
                type: 'Front-end',
                tutorial: '',
            },
            {
                name: 'axios',
                setup: "npm i axios",
                description: 'Giúp kết nối API với back-end',
                link: 'https://www.npmjs.com/package/axios',
                type: 'Front-end',
                tutorial: '',
            },
            {
                name: 'react-router-dom',
                setup: "npm i react-router-dom",
                description: 'Giúp cấu trúc router, link đến các file dễ dàng',
                link: 'https://www.npmjs.com/package/react-router-dom',
                type: 'Front-end',
                tutorial: '',
            },
            {
                name: 'ant design',
                setup: "npm i antd",
                description: 'Giúp tạo các component cải thiện UI. Chú ý cần import css của antd vào index.js ',
                link: 'https://ant.design/docs/react/getting-started',
                type: 'Front-end',
                tutorial: '',
            },
            {
                name: 'redux-saga',
                setup: "npm i redux-saga",
                description: 'Giúp tạo các middleware kết nối api với back-end',
                link: 'https://www.npmjs.com/package/redux-saga',
                type: 'Front-end',
                tutorial: 'có link',
            },
            {
                name: 'tailwindcss',
                setup: "npm i tailwindcss",
                description: 'Giúp tạo ra các css class giống bootstrap, cần cấu hình lại như trong hướng dẫn',
                link: 'https://tailwindcss.com/docs/installation',
                type: 'Front-end',
                tutorial: '',
            },
            {
                name: 'Formik',
                setup: "npm i formik",
                description: 'Giúp lấy dữ liệu từ các trường trong form. Chú ý sử dụng useFormik',
                link: 'https://formik.org/docs/overview',
                type: 'Front-end',
                tutorial: '',
            },
            {
                name: ' yup',
                setup: "npm i yup",
                description: 'Giúp validation các field trong form',
                link: 'https://www.npmjs.com/package/yup',
                type: 'Front-end',
                tutorial: '',
            },
            {
                name: 'history version 4.10.0',
                setup: "npm i history@4.10.0",
                description: 'Giúp lấy những thuộc tính của router và thực hiện một số thao tác liên quan đến url',
                link: '',
                type: 'Front-end',
                tutorial: 'Có link',
            },
            {
                name: '@tinymce/tinymce-react',
                setup: "npm install --save @tinymce/tinymce-react",
                description: 'Giúp tạo ra 1 vùng textarea với tính năng định dạng văn bản',
                link: 'https://www.tiny.cloud/docs/tinymce/6/react-cloud/',
                type: 'Front-end',
                tutorial: 'Có link',
            },
            {
                name: 'drag drop',
                setup: "npm i react-beatiful-dnd",
                description: 'Giúp tạo tính năng kéo thả control (drag drop)',
                link: 'https://react-dnd.github.io/react-dnd/about',
                type: 'Front-end',
                tutorial: 'Có link',
            },
            {
                name: 'moment',
                setup: "npm i moment",
                description: 'Giúp lấy thời gian và định dạng hiển thị thời gian',
                link: 'https://www.npmjs.com/package/moment',
                type: 'Front-end',
                tutorial: '',
            },
            {
                name: 'i18next',
                setup: "npm install react-i18next i18next --save",
                description: 'Giúp tạo đa ngôn ngữ',
                link: 'https://react.i18next.com/getting-started',
                type: 'Front-end',
                tutorial: '',
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
        await queryInterface.bulkDelete('Libraries', null, {});

    }
};