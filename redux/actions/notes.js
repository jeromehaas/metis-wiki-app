import moment from 'moment';

const playSound = (type) => {
  switch(type) {
    case 'button-click': return new Audio('/media/sounds/button-click.mp3').play();
    case 'success': return new Audio('/media/sounds/success.mp3').play();
    case 'error': return new Audio('/media/sounds/error.mp3').play();
    default: return new Audio('/media/sounds/button-click.mp3').play();
  };
};

const GET_ALL_NOTES = 'GET_ALL_NOTES';
const getAllNotes = () => async (dispatch) => {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/routes/notes/get`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
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
		const note = { filename: 'untitled.md', content: '', dateCreated: date }
		const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/routes/notes/create`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(note)
		});
		const data = await response.json();
		const notes = data.notes;
		dispatch({ type: CREATE_NOTE, payload: notes });
		dispatch({ type: SET_TO_ACTIVE_NOTE, payload: note })
    playSound('button-click');
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	};
};

const DELETE_ACTIVE_NOTE = 'DELETE_ACTIVE_NOTE';
const deleteActiveNote = (id) => async (dispatch) => {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/routes/notes/delete`, {
			method: 'DELETE',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: id })
		});
		const data = await response.json();
		const notes = data.notes;
		dispatch({ type: DELETE_ACTIVE_NOTE, payload: notes });
    playSound('error');
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	};
};

const SET_TO_ACTIVE_NOTE = 'SET_TO_ACTIVE_NOTE';
const setToActiveNote = (id, filename, content, dateCreated) => async (dispatch) => {
	try {
		if (id !== undefined) {
			const activeNote = { id, filename, content, dateCreated };
			dispatch({ type: SET_TO_ACTIVE_NOTE, payload: activeNote });
      playSound('button-click');
		} else {
			const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/routes/notes/get`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' }
			});
			const data = await response.json();
			const activeNote = data.notes[0];
			dispatch({ type: SET_TO_ACTIVE_NOTE, payload: activeNote });
		};
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
		const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/routes/notes/save`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id: id, filename: filename, content: content })
		});
		const data = await response.json();
		const notes = data.notes;
    playSound('success');
		dispatch({ type: SAVE_ACTIVE_NOTE, payload: notes });
    playSound('success');
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