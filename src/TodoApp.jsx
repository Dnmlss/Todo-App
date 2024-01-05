import { UserProvider } from './context/UserProvider';

export const TodoApp = () => {
	return (
		<UserProvider>
			<h1>TodoApp</h1>
			<hr />
		</UserProvider>
	);
};
