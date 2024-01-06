import { UserContext } from './userContext';

export const UserProvider = ({ children }) => {
	return (
		<>
			<h1>My ToDo...</h1>
			<UserContext.Provider value={{}}>{children}</UserContext.Provider>
		</>
	);
};
