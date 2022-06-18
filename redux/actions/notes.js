import moment from 'moment';

const GET_ALL_NOTES = 'GET_ALL_NOTES';
const getAllNotes = () => async (dispatch) => {
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
const createNote = () => async (dispatch) => {
	try {
		const date = moment().format('DD-MM-YYYY');
		const response = await fetch('http://localhost:3000/api/routes/notes/create', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ filename: 'untitled.md', content: '', dateCreated: date })
		});
		const data = await response.json();
		const notes = data.notes;
		dispatch({ type: CREATE_NOTE, payload: notes });
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	};
};

const DELETE_ACTIVE_NOTE = 'DELETE_ACTIVE_NOTE';
const deleteActiveNote = (id) => async (dispatch) => {
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
		dispatch({ type: DELETE_ACTIVE_NOTE, payload: notes });
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	};
};

const SET_TO_ACTIVE_NOTE = 'SET_TO_ACTIVE_NOTE';
const setToActiveNote = (id, filename, content, dateCreated) => async (dispatch) => {
	try {
		const activeNote = { id, filename, content, dateCreated };
		dispatch({ type: SET_TO_ACTIVE_NOTE, payload: activeNote });
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	};
};

const UPDATE_ACTIVE_NOTE_FILENAME = 'UPDATE_ACTIVE_NOTE_FILENAME';
const updateActiveNoteFilename = ( value ) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_ACTIVE_NOTE_FILENAME, payload: value })
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	};
};

const UPDATE_ACTIVE_NOTE_CONTENT = 'UPDATE_ACTIVE_NOTE_CONTENT';
const updateActiveNoteContent = ( value ) => async (dispatch) => {
	try {
		dispatch({ type: UPDATE_ACTIVE_NOTE_CONTENT, payload: value });
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	};
};

const SAVE_ACTIVE_NOTE = 'SAVE_ACTIVE_NOTE';
const saveActiveNote = ( activeNote ) => async (dispatch) => {
	try {
		const { id,  filename, content } = activeNote;
		const response = await fetch('http://localhost:3000/api/routes/notes/save', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ id: id, filename: filename, content: content })
		});
		const data = await response.json();
		const notes = data.notes;
		dispatch({ type: SAVE_ACTIVE_NOTE, payload: notes });
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	}
}

export {
	getAllNotes,
	createNote,
	deleteActiveNote,
	setToActiveNote,
	updateActiveNoteFilename,
	updateActiveNoteContent,
	saveActiveNote
};