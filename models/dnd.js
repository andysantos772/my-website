const Joi = require('joi');
const mongoose = require('mongoose');

// Make sure to validate within the schema as well
const DndCharacter = mongoose.model('DndCharacter', new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true },
  class: { type: String, trim:true },
  race: { type: String, trim:true },
  strength: { type: Number },
  dexterity: { type: Number },
  constitution: { type: Number },
  intelligence: { type: Number },
  wisdom: { type: Number },
  charisma: { type: Number },
  age: { type: String, trim:true },
  height: { type: String, trim:true },
  weight: { type: String, trim:true },
  eyes: { type: String, trim:true },
  skin: { type: String, trim:true },
  hair: { type: String, trim:true },
  allies: { type: String, trim:true },
  backstory: { type: String, trim:true },
  traits: { type: String, trim:true },
}), 'dnd');

// Experiment with what validation requirements work best
const validateSchema = Joi.object({
    name: Joi.string().min(1).max(75).required(),
    class: Joi.string().max(),
    race: Joi.string(),
    strength: Joi.number().integer().min(1).max(30),
    dexterity: Joi.number().integer().min(1).max(30),
    constitution: Joi.number().integer().min(1).max(30),
    intelligence: Joi.number().integer().min(1).max(30),
    wisdom: Joi.number().integer().min(1).max(30),
    charisma: Joi.number().integer().min(1).max(30),
    age: Joi.string().max(15),
    height: Joi.string().max(10),
    weight: Joi.string().max(10),
    eyes: Joi.string(),
    skin: Joi.string(),
    hair: Joi.string(),
    allies: Joi.string(),
    backstory: Joi.string(),
    traits: Joi.string(),
});

exports.DndCharacter = DndCharacter;
exports.DndValidate = validateSchema;