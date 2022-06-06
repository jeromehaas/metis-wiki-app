const GET_ALL_NOTES = 'GET_ALL_NOTES';
const getAllNotes = () => async ( dispatch ) => {
	try {
		const response = await fetch('http://localhost:3000/api/notes', {
			method: 'GET', 
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		console.log("jello", data)
		dispatch({ type: GET_ALL_NOTES, payload: data });
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	}
};

export {
	getAllNotes
};