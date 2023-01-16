const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/home.js', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'scripts', 'home.js'));
});

module.exports = router;