let originalState = {
    focus: false
};

const preview = ( state = originalState, action) => {
    switch(action.type) {
        case 'TOGGLE_PREVIEW_FOCUS': {
            originalState =  {
                ...state,
                focus: !state.focus
            };
            return originalState;
        };
        default: {
            return originalState;
        };

    }
};

export default preview;