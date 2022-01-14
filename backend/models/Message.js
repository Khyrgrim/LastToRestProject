const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  
  message: { type: String, required: true },
  
  author: { type: Number, required: true },
  topic: { type: String, required: true },
  date: { type: Number, required: true },
  cityID: { type: String, required: true },

});

module.exports = mongoose.model('Message', messageSchema);