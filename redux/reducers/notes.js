let originalState = {
	all: [],
	active: {}
};

const notes = ( state = originalState, action ) => {
	switch(action.type) {
		case 'GET_ALL_NOTES': {
			originalState = {
				...state,
				all: action.payload
			};
			return originalState; 
		};
		case 'CREATE_NOTE': {
			originalState = {
				...state, 
				all: action.payload
			};
			return originalState; 
		};
		case 'DELETE_NOTE': {
			originalState = {
				...state, 
				all: action.payload
			};
			return originalState; 
		};
		case 'SET_TO_ACTIVE_NOTE': {
			originalState = {
				...state,
				active: action.payload
			};
			return originalState; 
		};
		default: {
			return originalState;
		};
	};
};

export default notes;