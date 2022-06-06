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
	}
};

export {
	getAllNotes
};