const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const config = require('./config/config');

const mongoConnect = config.MONGO;

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

app.listen(config.PORT || 3000, () => console.log('Сервер запущен'));
