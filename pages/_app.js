import 'styles/central.scss'
import store from 'redux/store';
import { Provider} from 'react-redux';
import Head from 'next/head';

function App({ Component, pageProps }) {
  return (
		<Provider store={ store }>
			<Head><title>Markdown Editor</title></Head>
			<Component {...pageProps} />
		</Provider>
	);
};

export default App;