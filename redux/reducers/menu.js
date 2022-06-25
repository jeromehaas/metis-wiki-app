let originalState = {
	status: 'hidden'
};

const menu = ( state = originalState, action) => {
	switch(action.type) {
		case 'TOGGLE_MENU': {
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