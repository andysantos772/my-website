const mongoose = require('mongoose');
const config = require('config');
const nav = require('./routes/nav');
const scripts = require('./routes/nav');
const express = require('express');
const app = express();

const db = config.get('db');
mongoose.connect(db)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use('/', nav);
app.use('/scripts', scripts)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));