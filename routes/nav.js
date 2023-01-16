const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages', 'home.html'));
});

router.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages', 'home.html'));
});

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'pages', 'about.html'));
});

module.exports = router;