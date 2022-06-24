import { Dashboard } from 'components/03-organisms/dashboard/dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { toggleTheme } from 'redux/actions/theme';
import cookie from 'cookie';

export default function DashboardPage() {

	const theme = useSelector(state => state.theme.active );
	
	return (
		<div className={`page page--${ theme }`}>
    		<Dashboard />
		</div>
	  );
	  
	};
	
export async function getServerSideProps( context ) {
	try {
		const cookies = cookie.parse(context.req.headers.cookie);
		const sessionToken = cookies['session-token'];
		const response = await fetch('http://localhost:3000/api/routes/users/validate', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ sessionToken: sessionToken })
		});
		const data = await response.json();
		if (response.status !== 200) throw new Error('user not found');
		return { props: {}}
	} catch (error) {
		console.log(`🔴 Error: ${error.message}`);

		return { 
			redirect: {
				permanent: false,
				destination: '/'
			},
		}
	}
};
