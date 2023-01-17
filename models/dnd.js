const Joi = require('joi');
const mongoose = require('mongoose');

const Character = mongoose.model('Character', new mongoose.Schema({
  name: { type: String },
  class: { type: String },
  race: { type: String }
}), 'rpg/dnd');

exports.Character = Character; 