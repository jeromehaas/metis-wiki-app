const Notes = require('./models/notes');

const getAllNotes = async (req, res) => {

	if (req.method === 'GET') {
		try {
			const data = await Notes.find();
			res.status(200);
			res.send(data);
		} catch (error) {
			console.log(`🔴 Error: ${error.message}`);
			res.status(404);
		};
	};

};

export default getAllNotes;
