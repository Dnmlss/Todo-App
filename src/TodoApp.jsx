import { Route, Routes, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import { HomePage, TodosPage, NavBar } from './components/index';

export const TodoApp = () => {
	return (
		<UserProvider>
			{/* <h1>TodoApp</h1> */}
			<NavBar />
			<hr />

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='todos' element={<TodosPage />} />

				{/* si una ruta no existe, nos redirecciona al Home */}
				<Route path='/*' element={<Navigate to={'/'} />} />
			</Routes>

			<footer className='card-footer text-muted text-end small footer'>By: Dnmlss®</footer>
		</UserProvider>
	);
};
