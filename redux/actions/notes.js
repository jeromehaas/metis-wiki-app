const GET_ALL_NOTES = 'GET_ALL_NOTES';
const getAllNotes = () => async ( dispatch ) => {
	try {
		const response = await fetch('http://localhost:3000/api/routes/notes/get', {
			method: 'GET', 
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		const notes = data.notes;
		dispatch({ type: GET_ALL_NOTES, payload: notes });
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	};
};

const CREATE_NOTE = 'CREATE_NOTE';
const createNote = () => async ( dispatch ) => {

	try {
		const response = await fetch('http://localhost:3000/api/routes/notes/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ filename: 'untitled.md' , dateCreated: '01-01-2022' })
		});
		const data = await response.json();
		const notes = data.notes;
		dispatch({ type: CREATE_NOTE, payload: notes });
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	};
};

const DELETE_NOTE = 'DELETE_NOTE';
const deleteNote = ( id ) => async ( dispatch ) => {
	try {
		const response = await fetch('http://localhost:3000/api/routes/notes/delete', {
			method: 'DELETE', 
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id: id })
		});
		const data = await response.json();
		const notes = data.notes;
		dispatch({ type: DELETE_NOTE, payload: notes });
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	};
};

export {
	getAllNotes,
	createNote,
	deleteNote
};