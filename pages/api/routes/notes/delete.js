import connectDatabase from 'pages/api/configs/connectDatabase';
import Notes from 'pages/api/models/notes';

export default async function createNotes(req, res) {

	try {
		const { id } = req.body;
		await connectDatabase();
		const note = await Notes.deleteOne({ _id: id });
		const notes = await Notes.find();
		res.send({ notes });
	} catch (error) {
		console.log(error.message);
	};

};