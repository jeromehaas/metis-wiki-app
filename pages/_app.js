import 'styles/central.scss'
import store from 'redux/store';
import { Provider} from 'react-redux';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
		<Provider store={ store }>
			<Head><title>Markdown Editor</title></Head>
			<meta name="description" content="A challenge from FrontendMentor" />
			<meta name="viewport" content="width=device-width, user-scalable=no"></meta>
        	<link rel="shortcut icon" href="/favicon.ico" />
			<Component {...pageProps} />
		</Provider>
	);
};

export default App;