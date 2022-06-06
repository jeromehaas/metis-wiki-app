const TOGGLE_THEME = 'TOGGLE_THEME';
const toggleTheme = ( currentTheme ) => async ( dispatch ) => {
	try {
		dispatch({ type: TOGGLE_THEME, payload: currentTheme });	
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);
	};
};

export {
	toggleTheme
};