import { UserContext } from './userContext';

const user = {
	id: new Date().getTime(),
	name: 'Dnmlss',
};

export const UserProvider = ({ children }) => {
	return (
		<>
			<h1>My ToDo...</h1>
			<UserContext.Provider value={user}>{children}</UserContext.Provider>
		</>
	);
};
