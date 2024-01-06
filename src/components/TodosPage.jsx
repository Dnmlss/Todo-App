import { useContext } from 'react';
import { UserContext } from '../context/userContext';

export const TodosPage = () => {
	const algo = useContext(UserContext);
	//console.log(algo);

	return (
		<>
			<h1>ToDos</h1>
			<hr />

			<pre>{JSON.stringify({})}</pre>

			<div className='input-group mb-3'>
				<input type='text' className='form-control' placeholder="What's next?" />
				<button className='btn btn-outline-secondary mt-1'>Add ToDo</button>
			</div>
		</>
	);
};
