const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
  
  name: { type: String, required: true },
  description: { type: String, required: true },
  
  defenceValue: { type: Number, required: true },
  isDoorOpen: { type: Boolean, required: true },
  waterSupply: { type: Number, required: true },
  citizenAlive: { type: Number, required: true },
  estimatedAttack: { type: Number, required: true },

});

module.exports = mongoose.model('City', citySchema);