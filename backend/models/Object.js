const mongoose = require('mongoose');

const objectSchema = mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true }, /* floor, character, house , bank */
  durability: { type: Number, required: true },

  cityID: { type: String, required: true },
  characterID: { type: String, required: true },
  positionX: { type: Number, required: true },
  positionY: { type: Number, required: true },
});

module.exports = mongoose.model('Object', objectSchema);