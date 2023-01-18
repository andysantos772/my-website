const Joi = require('joi');
const mongoose = require('mongoose');

// Make sure to validate within the schema as well
const DndCharacter = mongoose.model('DndCharacter', new mongoose.Schema({
  name: {
    type: String,
    required: true },
  class: { type: String },
  race: { type: String }
}), 'dnd');

// Experiment with what validation requirements work best
const validateSchema = Joi.object({
    name: Joi.string().min(1).max(100).required(),
    class: Joi.string(),
    race: Joi.string()
});

exports.DndCharacter = DndCharacter;
exports.DndValidate = validateSchema;