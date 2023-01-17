const { DndCharacter } = require('../../models/dnd'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/dnd', async (req, res) => {
  const chars = await DndCharacter.find();
  res.send(chars);
});


module.exports = router;