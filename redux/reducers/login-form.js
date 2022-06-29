const originalState = {
    input: '',
    status: 'neutral'
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
        };
        case 'SET_LOGIN_FORM_STATUS': {
          originalState = {
            ...state, 
            status: action.payload
          };
          return originalState;
        }
        default: {
            return originalState;
        };
    };
};

export default loginForm;
