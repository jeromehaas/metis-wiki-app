import mongoose, { Schema, model, models } from 'mongoose';

const notesSchema = new Schema(
	{
		filename: { 
			type: String, 
			required: true, 
			unique: true,
		}, 
		dateCreated: {
			type: String,
			required: true,
		}
	}, 
);

const Notes = models.Notes || model('Notes', notesSchema);

export default Notes;