import { Dashboard } from 'components/03-organisms/dashboard/dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleTheme } from 'redux/actions/theme';
import { LoginForm } from 'components/02-molecules/login-form/login-form';

export default function HomePage() {

	const dispatch = useDispatch();
	const theme = useSelector(state => state.theme.active );

 	 return (
		<div className={`page page--${ theme }`}>
			<LoginForm />
		</div>
	  );

};

