let originalState = {
	status: 'visible'
};

const menu = ( state = originalState, action) => {
	switch(action.type) {
		case 'TOGGLE_MENU': {
			console.log(state)
			originalState = {
				...state, 
				status: state.status === 'visible' ? 'hidden' : 'visible'
			};
			return originalState;
		};
		default: {
			return originalState;
		};
	};
};

export default menu;