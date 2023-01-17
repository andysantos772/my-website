const mongoose = require('mongoose');
const config = require('config');
const path = require('path');
const nav = require('./routes/nav');
const dnd = require('./routes/rpg/dnd');
const express = require('express');
const app = express();

const db = config.get('db');
mongoose.connect(db)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'scripts')));
app.use('/', nav);
app.use('/rpg/dnd', dnd);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));