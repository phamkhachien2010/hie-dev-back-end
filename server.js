const express = require('express');
const path = require('path');
const { sequelize } = require('./models/index');
const cors = require('cors');
const { rootRouter } = require('./router');

const port = process.env.PORT || 3306;

const app = express();

app.use(express.json());
app.use(cors());

const publicPathDirectory = path.join(__dirname, './public');

app.use('/public', express.static(publicPathDirectory));

app.use('/api/v1', rootRouter);

app.listen(port, async() => {
    console.log(`App is running on http://localhost:${port}`);
    try {
        // await sequelize.authenticate();
        console.log('Connection has been established successfully');
    } catch (error) {
        console.error('Unable to connect to the database: ', error)
    }
})