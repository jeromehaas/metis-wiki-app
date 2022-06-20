let originalState = {
    isLoggedIn: false,
    username: ''
};

const session = ( state = originalState, action) => {
    switch(action.type) {
        case 'START_SESSION': {
            originalState = {
                ...state, 
                isLoggedIn: true,
                username: action.payload.username,
                sessionToken: action.payload.sessionToken
            };
            return originalState;
        };
        default: {
            return originalState;
        };
    };
};

export default session;