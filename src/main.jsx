import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { MainApp } from './components/MainApp';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<React.StrictMode>
			<MainApp />
		</React.StrictMode>
	</BrowserRouter>
);
