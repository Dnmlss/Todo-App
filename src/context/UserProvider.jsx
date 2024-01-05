import { UserContext } from './userContext';

export const UserProvider = ({ children }) => {
	return (
		<>
			<h1>ToDo List</h1>
			<UserContext.Provider value={{}}>{children}</UserContext.Provider>
		</>
	);
};
