import mongoose, { Schema, model, models } from 'mongoose';

const notesSchema = new Schema(
	{
		filename: { 
			type: String, 
			required: true, 
			unique: false
		}, 
		content: {
			type: String,
			required: false,
		},
		dateCreated: {
			type: String,
			required: true,
		}
	}, 
);

const Notes = models.Notes || model('Notes', notesSchema);

export default Notes;