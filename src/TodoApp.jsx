import { Route, Routes, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserProvider';
import { HomePage, TodosPage, InProgressPage, NavBar } from './components/index';

export const TodoApp = () => {
	return (
		<UserProvider>
			{/* <h1>TodoApp</h1> */}
			<NavBar />
			<hr />

			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='todos' element={<TodosPage />} />
				<Route path='inProgress' element={<InProgressPage />} />

				{/* si una ruta no existe, nos redirecciona al Home */}
				<Route path='/*' element={<Navigate to={'/'} />} />
			</Routes>
		</UserProvider>
	);
};
