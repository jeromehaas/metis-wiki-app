import connectDatabase from 'pages/api/configs/connectDatabase';
import Notes from 'pages/api/models/notes';

export default async function createNotes(req, res) {

	try {
		const { filename, content, dateCreated } = req.body;
		await connectDatabase();
		const note = await Notes.create({ filename, content, dateCreated });
		const notes = await Notes.find();
		res.send({ notes });
	} catch (error) {
		console.log(error.message);
	}

};