import { Icon } from 'components/01-atoms/icon/icon';
import { useDispatch,  useSelector } from 'react-redux';
import cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { updateLoginFormInput, resetLoginFormInput, submitLoginForm } from 'redux/actions/login-form';

const LoginForm = () => {
	
    const dispatch = useDispatch();
    const loginForm = useSelector( state => state.loginForm );
    console.log(loginForm);

    // const router = useRouter();
//   const [userInput, setUserInput] = useState('');
	
//   useEffect(() => {
//     if (userInput.length === 6) {
			
//       if  (userInput === process.env.NEXT_PUBLIC_LOGIN_PASSWORD) {
//         cookies.set('authentificated', process.env.NEXT_PUBLIC_COOKIE_KEY, { expires: 7 });
//         router.push('/');
//       } else {
//         setTimeout(() => {
//           setUserInput('');
//         }, 1000);
//       }
//     }
//   }, [userInput, router])
  
  const handleClick = ( number ) => {
    
      dispatch(updateLoginFormInput(loginForm.input + number))
      if (loginForm.input.length === 5) {
        dispatch(submitLoginForm(loginForm.input));
        dispatch(resetLoginFormInput());
      }
  }



  return (
    <div className="login-form">
      <div className="login-form__wrapper">
        { loginForm.input }
        <div className="login-form__dial-wrapper">
          <button className="login-form__dial-button" onClick={ () => handleClick('1')}>1</button>
          <button className="login-form__dial-button" onClick={ () => handleClick('2')}>2</button>
          <button className="login-form__dial-button" onClick={ () => handleClick('3')}>3</button>
          <button className="login-form__dial-button" onClick={ () => handleClick('4')}>4</button>
          <button className="login-form__dial-button" onClick={ () => handleClick('5')}>5</button>
          <button className="login-form__dial-button" onClick={ () => handleClick('6')}>6</button>
          <button className="login-form__dial-button" onClick={ () => handleClick('7')}>7</button>
          <button className="login-form__dial-button" onClick={ () => handleClick('8')}>8</button>
          <button className="login-form__dial-button" onClick={ () => handleClick('9')}>9</button>
          <button className="login-form__dial-button" onClick={ () => handleClick('0')}>0</button>
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