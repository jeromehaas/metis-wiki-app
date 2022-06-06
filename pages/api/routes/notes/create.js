import connectDatabase from 'pages/api/configs/connectDatabase';
import Notes from 'pages/api/models/notes';

export default async function createNotes(req, res) {

	try {
		const { filename } = req.body;
		await connectDatabase();
		const notes = await Notes.create(req.body);
		res.json({ notes });
	} catch (error) {
		console.log(error.message);
	}

};