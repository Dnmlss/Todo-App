import { NavBar } from './NavBar';
import { UserProvider } from './context/UserProvider';

export const TodoApp = () => {
	return (
		<UserProvider>
			{/* <h1>TodoApp</h1> */}
			<NavBar />
			<hr />
		</UserProvider>
	);
};
