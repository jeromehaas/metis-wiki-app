const originalState = {
    input: ''
};

const loginForm = ( state = originalState, action) =>  {
    switch(action.type) {
        case 'UPDATE_LOGIN_FORM_INPUT': {
            originalState = {
                ...state, 
                input: action.payload
            };
            return originalState;
        };
        case 'RESET_LOGIN_FORM_INPUT': {
            originalState = {
                ...state,
                input: ''
            };
            return originalState;
        }
        default: {
            return originalState;
        };
    };
};

export default loginForm;
