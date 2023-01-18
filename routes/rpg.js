const { DndCharacter, DndValidate } = require('../models/dnd'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/dnd', async (req, res) => {
  const chars = await DndCharacter.find();
  res.send(chars);
});

router.post('/dnd', async (req, res) => {
  const { error } = DndValidate.validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let char = new DndCharacter({ 
    name: req.body.name,
    class: req.body.class,
    race: req.body.race
  });

  char = await char.save();
  res.send(char);
});


module.exports = router;