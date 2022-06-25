import connectDatabase from 'pages/api/configs/connectDatabase';
import Notes from 'pages/api/models/notes';

export default async function getNotes(req, res) {

	try {
		await connectDatabase();
		const notes = await Notes.find();
		res.json({ notes });
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	}

};