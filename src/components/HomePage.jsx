import { useContext } from 'react';
import { UserContext } from '../context/userContext';

export const HomePage = () => {
	const user = useContext(UserContext);

	return (
		<>
			<h1>Home</h1>
			<hr />

			<p className='text-center fs-1 fst-italic'>Welcome! {user.name}</p>
		</>
	);
};
