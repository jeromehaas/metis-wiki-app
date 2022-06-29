const playSound = (type) => {
  switch(type) {
    case 'button-click': return new Audio('/media/sounds/button-click.mp3').play();
    case 'success': return new Audio('/media/sounds/success.mp3').play();
    case 'error': return new Audio('/media/sounds/error.mp3').play();
    default: return new Audio('/media/sounds/button-click.mp3').play();
  };
};

const TOGGLE_PREVIEW_FOCUS = 'TOGGLE_PREVIEW_FOCUS';
const previewToggleFocus = ( currentPreview ) => async ( dispatch ) => {
    try {
        dispatch({ type: TOGGLE_PREVIEW_FOCUS, payload: currentPreview });
        playSound('butto-click');
    } catch (error) {
		  console.log(`🔴 Error: ${error.message}`);
    };
};

export {
    previewToggleFocus
};