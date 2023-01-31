const { DndCharacter, DndValidate } = require('../models/dnd'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const config = require('config');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: config.get('cloudName'),
  api_key: config.get('cloudinaryApiKey'),
  api_secret: config.get('cloudinaryApiSecret')
});


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

router.get('/img', async (req, res) => {
  const file = document.querySelector('input[type=file]').files[0];
    console.log(file);
    cloudinary.uploader.upload(file, {public_id: "zeus"});
    const url = cloudinary.url("zeus", {
        width: 100,
        height: 150,
        Crop: 'fill'
    });
    console.log(url);
});

module.exports = router;