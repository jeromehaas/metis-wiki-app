const mongoose = require('./index.js');
const Schema = mongoose.Schema;

const notesSchema = new Schema({
	filename: { type: String, required: false },
});


module.exports = mongoose.models.Notes || mongoose.model('Notes', notesSchema);