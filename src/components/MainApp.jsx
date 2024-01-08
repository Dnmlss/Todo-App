import { Route, Routes, Navigate, Outlet } from 'react-router-dom';
import { UserProvider } from '../context/UserProvider';
import { HomePage, TodoApp, NavBar } from './index';

export const MainApp = () => {
	return (
		<UserProvider>
			{/* <h1>TodoApp</h1> */}
			<NavBar />
			<hr />

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='todos' element={<TodoApp />} />

				{/* si una ruta no existe, nos redirecciona al Home */}
				<Route path='/*' element={<Navigate to={'/'} />} />
			</Routes>

			<footer className='card-footer text-muted text-end small footer'>By: Dnmlss®</footer>
		</UserProvider>
	);
};
