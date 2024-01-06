import { useContext } from 'react';
import { UserContext } from './context/userContext';

export const TodosPage = () => {
	const {} = useContext(UserContext);

	return (
		<>
			<h1>ToDos</h1>
			<hr />

			<pre>{JSON.stringify({})}</pre>

			<div className='input-group mb-3'>
				<input type='text' className='form-control' placeholder="What's next?" />
				<button className='btn btn-outline-secondary mt-1'>Button</button>
			</div>
		</>
	);
};
