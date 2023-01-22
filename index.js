const mongoose = require('mongoose');
const config = require('config');
const path = require('path');
const nav = require('./routes/nav');
const rpg = require('./routes/rpg');
const express = require('express');
const app = express();

const db = config.get('db');
mongoose.connect(db)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'scripts')));
app.use(express.static(path.join(__dirname, 'styles')));
app.use('/', nav);
app.use('/api/rpg', rpg);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));