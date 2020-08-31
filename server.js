const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
require('dotenv').config();

const mongoConnect = "mongodb+srv://sergey:123123Q@cluster0.al3ss.azure.mongodb.net/Aspirity?retryWrites=true&w=majority";

const app = express();


app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/api', router);

async function start() {
    try {
        await mongoose.connect(mongoConnect, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('МонгоДБ подключена')
    } catch (e) {
        console.log("Server Error", e);
        process.exit();
    }
}

start();

app.listen(5000, () => console.log('Сервер запущен'));
