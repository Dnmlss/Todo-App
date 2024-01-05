import React from 'react';
import ReactDOM from 'react-dom/client';
import { TodoApp } from './TodoApp';
import { BrowserRouter } from 'react-router-dom';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<React.StrictMode>
			<TodoApp />
		</React.StrictMode>
	</BrowserRouter>
);
TodoApp;
