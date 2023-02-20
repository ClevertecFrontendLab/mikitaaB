import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { HashRouter } from 'react-router-dom';

import './index.scss';

import { Pages } from './routes';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<HashRouter>
				<Pages />
			</HashRouter>
		</Provider>
	</React.StrictMode>
);