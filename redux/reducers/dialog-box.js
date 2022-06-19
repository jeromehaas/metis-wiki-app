let originalState = {
    isVisible: false,
    type: '',
};

const dialogBox = (state = originalState, action) => {
    switch(action.type) {
        case 'SHOW_DIALOG_BOX_DELETE_NOTE': {
            originalState = {
                ...state, 
                isVisible: true,
                type: 'delete-note'
            };
            return originalState;
        };
        case 'HIDE_DIALOG_BOX': {
            originalState = {
                ...state,
                isVisible: false,
                type: ''
            };
            return originalState;
        };
        default: {
            return originalState;
        }
    };
};

export default dialogBox;