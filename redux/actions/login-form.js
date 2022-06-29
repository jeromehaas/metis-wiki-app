import cookies from 'js-cookie';

const playSound = (type) => {
  switch(type) {
    case 'button-click': return new Audio('/media/sounds/button-click.mp3').play();
    case 'success': return new Audio('/media/sounds/success.mp3').play();
    case 'error': return new Audio('/media/sounds/error.mp3').play();
    default: return new Audio('/media/sounds/button-click.mp3').play();
  };
};

const UPDATE_LOGIN_FORM_INPUT = 'UPDATE_LOGIN_FORM_INPUT';
const updateLoginFormInput = ( value ) => async ( dispatch ) => {
    try {
        dispatch({ type: UPDATE_LOGIN_FORM_INPUT, payload: value });
        dispatch({ type: 'SET_LOGIN_FORM_STATUS', payload: 'neutral' });
        playSound('button-click');
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
      dispatch({ type: 'SET_LOGIN_FORM_STATUS', payload: 'loading'})
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/routes/users/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: code })
        });
        if (response.status === 400) throw new Error('user not found');
        const data = await response.json();
        dispatch({ type: 'START_SESSION', payload: data });
        dispatch({ type: 'SET_LOGIN_FORM_STATUS', payload: 'success' });
        playSound('success');
    } catch (error)  {
      dispatch({ type: 'SET_LOGIN_FORM_STATUS', payload: 'error' });
      playSound('error');
		  console.log(`🔴 Error: ${error.message}`);
    }
}

export {
    updateLoginFormInput, 
    resetLoginFormInput,
    submitLoginForm,
};