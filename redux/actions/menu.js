const TOGGLE_MENU = 'TOGGLE_MENU';
const toggleMenu = ( currentStatus ) => async ( dispatch ) => {
	try {
		dispatch({ type: TOGGLE_MENU, payload: currentStatus });
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	};
};

export {
	toggleMenu
};