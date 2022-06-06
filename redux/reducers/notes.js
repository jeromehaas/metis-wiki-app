let originalState = {
	all: []
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
		};
		case 'DELETE_NOTE': {
			originalState = {
				...state, 
				all: action.payload
			}
		}
		default: {
			return originalState;
		};
	};
};

export default notes;