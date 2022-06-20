import { Icon } from 'components/01-atoms/icon/icon';
import { useEffect } from 'react';
import { useDispatch,  useSelector } from 'react-redux';
import cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { updateLoginFormInput, resetLoginFormInput, submitLoginForm } from 'redux/actions/login-form';

const LoginForm = () => {
	
    const dispatch = useDispatch();
    const router = useRouter();
    const loginForm = useSelector( state => state.loginForm );
    const session = useSelector( state => state.session);
	
    useEffect(() => {
     if (loginForm.input.length === 6) {
      dispatch(submitLoginForm(loginForm.input));
      dispatch(resetLoginFormInput());
    }
  }, [loginForm]);

  useEffect(() => {
    if (session.isLoggedIn) {
      router.push('/dashboard');
    }
  }, [session]);

  return (
    <div className="login-form">
      <div className="login-form__wrapper">
        <div className="login-form__dial-wrapper">
          <button className="login-form__dial-button" onClick={ () => dispatch(updateLoginFormInput(loginForm.input + '1'))}>1</button>
          <button className="login-form__dial-button" onClick={ () => dispatch(updateLoginFormInput(loginForm.input + '2'))}>2</button>
          <button className="login-form__dial-button" onClick={ () => dispatch(updateLoginFormInput(loginForm.input + '3'))}>3</button>
          <button className="login-form__dial-button" onClick={ () => dispatch(updateLoginFormInput(loginForm.input + '4'))}>4</button>
          <button className="login-form__dial-button" onClick={ () => dispatch(updateLoginFormInput(loginForm.input + '5'))}>5</button>
          <button className="login-form__dial-button" onClick={ () => dispatch(updateLoginFormInput(loginForm.input + '6'))}>6</button>
          <button className="login-form__dial-button" onClick={ () => dispatch(updateLoginFormInput(loginForm.input + '7'))}>7</button>
          <button className="login-form__dial-button" onClick={ () => dispatch(updateLoginFormInput(loginForm.input + '8'))}>8</button>
          <button className="login-form__dial-button" onClick={ () => dispatch(updateLoginFormInput(loginForm.input + '9'))}>9</button>
          <button className="login-form__dial-button" onClick={ () => dispatch(updateLoginFormInput(loginForm.input + '0'))}>0</button>
        </div>
        <div className="login-form__dots-wrapper">
          <div className={`login-form__dot ${ loginForm.input.length >= 1 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ loginForm.input.length >= 2 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ loginForm.input.length >= 3 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ loginForm.input.length >= 4 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ loginForm.input.length >= 5 ? 'login-form__dot--active' : ''}`}></div>
          <div className={`login-form__dot ${ loginForm.input.length >= 6 ? 'login-form__dot--active' : ''}`}></div>
        </div>
      </div>
    </div>
  )
}

export {
  LoginForm
};