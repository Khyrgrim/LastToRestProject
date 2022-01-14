const mongoose = require('mongoose');

const registerEntrySchema = mongoose.Schema({
  
  message: { type: String, required: true },
  isErased: { type: Boolean, required: true },
  date: { type: Number, required: true },
  type: { type: String, required: true }, /* Chantier ; Banque ; Citizen ... */
  authorID: { type: String, required: true },
  cityID: { type: String, required: true },

  authorName: { type: String, required: true },
  objectName: { type: String, required: true },

});

module.exports = mongoose.model('RegisterEntry', registerEntrySchema);