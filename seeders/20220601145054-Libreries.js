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
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'react spring',
                setup: "npm i react-spring",
                description: 'Giúp xử lý xử lý animationtrong react',
                link: 'https://react-spring.io/',
                type: 'Front-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'Cloud image 360',
                setup: "npm i react-spring",
                description: 'Giúp tạo chuyển động 360 độ của 1 tệp những hình',
                link: 'https://www.npmjs.com/package/js-cloudimage-360-view',
                type: 'Front-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'sweet alert 2',
                setup: "npm i sweetalert2",
                description: 'Giúp hiển thị hộp thoại alert đẹp hơn',
                link: 'https://sweetalert2.github.io/',
                type: 'Front-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'axios',
                setup: "npm i axios",
                description: 'Giúp kết nối API với back-end',
                link: 'https://www.npmjs.com/package/axios',
                type: 'Front-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'react-router-dom',
                setup: "npm i react-router-dom",
                description: 'Giúp cấu trúc router, link đến các file dễ dàng',
                link: 'https://www.npmjs.com/package/react-router-dom',
                type: 'Front-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'ant design',
                setup: "npm i antd",
                description: 'Giúp tạo các component cải thiện UI. Chú ý cần import css của antd vào index.js ',
                link: 'https://ant.design/docs/react/getting-started',
                type: 'Front-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'redux-saga',
                setup: "npm i redux-saga",
                description: 'Giúp tạo các middleware kết nối api với back-end',
                link: 'https://www.npmjs.com/package/redux-saga',
                type: 'Front-end',
                tutorial: 'có link',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'tailwindcss',
                setup: "npm i tailwindcss",
                description: 'Giúp tạo ra các css class giống bootstrap, cần cấu hình lại như trong hướng dẫn',
                link: 'https://tailwindcss.com/docs/installation',
                type: 'Front-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'Formik',
                setup: "npm i formik",
                description: 'Giúp lấy dữ liệu từ các trường trong form. Chú ý sử dụng useFormik',
                link: 'https://formik.org/docs/overview',
                type: 'Front-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: ' yup',
                setup: "npm i yup",
                description: 'Giúp validation các field trong form',
                link: 'https://www.npmjs.com/package/yup',
                type: 'Front-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'history version 4.10.0',
                setup: "npm i history@4.10.0",
                description: 'Giúp lấy những thuộc tính của router và thực hiện một số thao tác liên quan đến url',
                link: '',
                type: 'Front-end',
                tutorial: 'Có link',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: '@tinymce/tinymce-react',
                setup: "npm install --save @tinymce/tinymce-react",
                description: 'Giúp tạo ra 1 vùng textarea với tính năng định dạng văn bản',
                link: 'https://www.tiny.cloud/docs/tinymce/6/react-cloud/',
                type: 'Front-end',
                tutorial: 'Có link',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'drag drop',
                setup: "npm i react-beatiful-dnd",
                description: 'Giúp tạo tính năng kéo thả control (drag drop)',
                link: 'https://react-dnd.github.io/react-dnd/about',
                type: 'Front-end',
                tutorial: 'Có link',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'moment',
                setup: "npm i moment",
                description: 'Giúp lấy thời gian và định dạng hiển thị thời gian',
                link: 'https://www.npmjs.com/package/moment',
                type: 'Front-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'i18next',
                setup: "npm install react-i18next i18next --save",
                description: 'Giúp tạo đa ngôn ngữ',
                link: 'https://react.i18next.com/getting-started',
                type: 'Front-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'aos',
                setup: "npm i aos",
                description: 'giúp chạy animation khi scroll đến vị trí',
                link: 'https://www.npmjs.com/package/aos',
                type: 'Front-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'react animate on scroll',
                setup: "npm i react-animate-on-scroll",
                description: 'giúp chạy animation khi scroll đến vị trí',
                link: 'https://www.npmjs.com/package/react-animate-on-scroll',
                type: 'Front-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },

            {
                name: 'node mon',
                setup: "npm i --save-dev nodemon",
                description: 'Giúp chạy code NodeJs liên tục, cần cài đặt lệnh dev trong scripts của package.json',
                link: 'https://www.npmjs.com/package/nodemon',
                type: 'Back-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'fs',
                setup: "Thư viện của nodeJs",
                description: 'Giúp tạo các file system',
                link: '',
                type: 'Back-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'path',
                setup: "Thư viện của nodeJs",
                description: 'Giúp tạo các đường dẫn',
                link: '',
                type: 'Back-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'sequelize',
                setup: "npm i sequeize",
                description: 'Giúp kết nối và viết code SQL trong nodeJs',
                link: 'https://sequelize.org/docs/v6/',
                type: 'Back-end',
                tutorial: 'Có link',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'mySql2',
                setup: "npm i mysql2",
                description: 'Giúp chuyển đối code nodeJs sang MySQL',
                link: 'https://www.npmjs.com/package/mysql2',
                type: 'Back-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'cors',
                setup: "npm i cors",
                description: 'Giúp các domain khác có thể lấy được dữ liệu trên domain backend',
                link: 'https://www.npmjs.com/package/cors',
                type: 'Back-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'bcryptjs',
                setup: "npm i bcryptjs",
                description: 'Giúp mã hoá 1 chuỗi, ứng dụng cho tạo password',
                link: 'https://www.npmjs.com/package/bcryptjs',
                type: 'Back-end',
                tutorial: 'Có link',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'jsonwebtoken',
                setup: "npm i jsonwebtoken",
                description: 'Giúp tạo token từ những chuỗi được truyền vào, sử dụng trong lưu dữ liệu đăng nhập',
                link: 'https://www.npmjs.com/package/jsonwebtoken',
                type: 'Back-end',
                tutorial: 'Có link',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'multer',
                setup: "npm i multer",
                description: 'Giúp upload các file lên server',
                link: 'https://www.npmjs.com/package/multer',
                type: 'Back-end',
                tutorial: 'Có link',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'mkdirp',
                setup: "npm i mkdirp",
                description: 'Giúp tạo đường dẫn (ứng dụng cho upload file)',
                link: 'https://www.npmjs.com/package/mkdirp',
                type: 'Back-end',
                tutorial: 'Có link',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'express-fingerprint',
                setup: "npm i express-fingerprint",
                description: 'Kiểm tra hệ điều hành của máy tính đang truy cập server, giúp phân biệt loại file thích hợp với hệ điều hành đó.',
                link: 'https://www.npmjs.com/package/express-fingerprint',
                type: 'Back-end',
                tutorial: '',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'socket.io',
                setup: "npm i socket.io",
                description: 'Giúp tạo chức năng realtime, chatbox',
                link: 'https://www.npmjs.com/package/socket.io',
                type: 'Back-end',
                tutorial: 'Có link',
                createdAt: '2022-06-02 12:00:00',
                updatedAt: '2022-06-02 12:00:00'
            },
            {
                name: 'date-format',
                setup: "npm i date-format",
                description: 'Giúp format thời gian',
                link: 'https://www.npmjs.com/package/date-format',
                type: 'Back-end',
                tutorial: '',
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
        await queryInterface.bulkDelete('Libraries', null, {});

    }
};