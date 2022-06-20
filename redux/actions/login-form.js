const UPDATE_LOGIN_FORM_INPUT = 'UPDATE_LOGIN_FORM_INPUT';
const updateLoginFormInput = ( value ) => async ( dispatch ) => {
    try {
        dispatch({ type: UPDATE_LOGIN_FORM_INPUT, payload: value });
    } catch (error) {
		console.log(`🔴 Error: ${error.message}`);
    };
};

const RESET_LOGIN_FORM_INPUT = 'RESET_LOGIN_FORM_INPUT';
const resetLoginFormInput = () => async ( dispatch ) => {
    try {
        dispatch({ type: RESET_LOGIN_FORM_INPUT });
    } catch (error)  {
		console.log(`🔴 Error: ${error.message}`);
    };
};

const SUBMIT_LOGIN_FORM = 'SUBMIT_LOGIN_FORM';
const submitLoginForm = ( code ) => async ( dispatch ) => {
    try {
        const response = await fetch('http://localhost:3000/api/routes/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: code })
        });
        if (response.status === 400) throw new Error('user not found');
        const data = await response.json();
        dispatch({ type: 'START_SESSION', payload: data });
        console.log('data', data);
    } catch (error)  {
		console.log(`🔴 Error: ${error.message}`);
    }
}

export {
    updateLoginFormInput, 
    resetLoginFormInput,
    submitLoginForm,
};