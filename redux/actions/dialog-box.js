const SHOW_DIALOG_BOX_DELETE_NOTE = 'SHOW_DIALOG_BOX_DELETE_NOTE';
const showDialogBoxDeleteNote = ( type ) => async (dispatch) =>  {
    try {
        dispatch({ type: SHOW_DIALOG_BOX_DELETE_NOTE, payload: type });
    } catch (error) {
		console.log(`🔴 Error: ${error.message}`);
    };
};

const HIDE_DIALOG_BOX = 'HIDE_DIALOG_BOX';
const hideDialogBox = ( ) => async ( dispatch ) => {
    try {
        dispatch({ type: HIDE_DIALOG_BOX });
    } catch (error) {
		console.log(`🔴 Error: ${error.message}`);
    };
};

export {
    showDialogBoxDeleteNote,
    hideDialogBox
};