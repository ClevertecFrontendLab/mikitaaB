import React from 'react';

import ReactDOM from 'react-dom/client';

import { HashRouter } from 'react-router-dom';

import './index.scss';

import { Pages } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<React.StrictMode>
		<HashRouter>
			<Pages />
		</HashRouter>
	</React.StrictMode>
);