const { Character } = require('../../models/dnd'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const chars = await Character.find();
  res.send(chars);
});


module.exports = router;