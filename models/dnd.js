const Joi = require('joi');
const mongoose = require('mongoose');

const DndCharacter = mongoose.model('DndCharacter', new mongoose.Schema({
  name: { type: String },
  class: { type: String },
  race: { type: String }
}), 'rpg');

exports.DndCharacter = DndCharacter; 