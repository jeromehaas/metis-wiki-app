let originalState = {
	all: []
};

const notes = ( state = originalState, action ) => {
	switch(action.type) {
		case 'GET_ALL_NOTES': {
			originalState = {
				all: action.payload
			};
			return originalState; 
		}
		default: {
			return originalState;
		}
	}
};

export default notes;