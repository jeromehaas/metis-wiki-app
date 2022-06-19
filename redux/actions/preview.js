const TOGGLE_PREVIEW_FOCUS = 'TOGGLE_PREVIEW_FOCUS';
const previewToggleFocus = ( currentPreview ) => async ( dispatch ) => {
    try {
        dispatch({ type: TOGGLE_PREVIEW_FOCUS, payload: currentPreview });
    } catch (error) {
		console.log(`🔴 Error: ${error.message}`);
    };
};

export {
    previewToggleFocus
};