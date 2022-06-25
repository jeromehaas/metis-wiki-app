import connectDatabase from 'pages/api/configs/connectDatabase';
import Notes from 'pages/api/models/notes';

export default async function saveNote(req, res) {
    
    try {
        const { id, filename, content } = req.body;
        await connectDatabase();
        const note = await Notes.findOneAndUpdate(
            { _id: id },
            { filename: filename, content: content }
        );
        const notes = await Notes.find();
        res.send({ notes });
    } catch (error) {
		console.log(`🔴 Error: ${error.message}`);
    };
    
};