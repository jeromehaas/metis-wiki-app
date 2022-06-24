import { useRouter } from 'next/router';

const VALIDATE_SESSION = 'VALIDATE_SESSION';
const validateSession = ( sessionToken ) => async (dispatch) => {
    try {
        const response = await fetch('http://localhost:3000/api/routes/users/validate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionToken: sessionToken || '0' })
        });
        if (response.status === 400) throw new Error('session-token not existing or not valid');
        const data = await response.json();
        dispatch({ type: VALIDATE_SESSION, payload: {
            isLoggedIn: true,
            username: data.username,
            sessionToken: data.sessionToken
        } });
    } catch ( error ) {
		console.log(`🔴 Error: ${error.message}`);
    };
};

export {
    validateSession
};