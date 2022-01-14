const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
  
  name: { type: String, required: true },
  userId: { type: String, required: true },
  description: { type: String, required: true },
  actionPoints: { type: Number, required: true },

  houseDefence: { type: Number, required: true },
  
  isOut: { type: Boolean, required: true },
  positionX: { type: Number, required: true },
  positionY: { type: Number, required: true },

  clear: { type: Boolean, required: true },
  addicted: { type: Boolean, required: true },
  dehydrated: { type: Boolean, required: true },
  hungry: { type: Boolean, required: true },

  infected: { type: Boolean, required: true },
  dead: { type: Boolean, required: true },

});

module.exports = mongoose.model('Character', characterSchema);