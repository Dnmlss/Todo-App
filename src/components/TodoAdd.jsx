import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: '',
	});

	const onFormSubmit = (event) => {
		event.preventDefault();

		// Evitamos que se envie menos de 1 caracter
		if (description.length <= 1) return;

		const newTodo = {
			id: new Date().getTime(),
			done: false,
			description: description,
		};

		if (typeof onNewTodo === 'function') {
			onNewTodo(newTodo);
		}
		onResetForm();
	};

	return (
		<>
			<form onSubmit={onFormSubmit} className='input-group mb-3'>
				<input
					type='text'
					placeholder="What's next?"
					className='form-control'
					name='description'
					value={description}
					onChange={onInputChange}
				/>

				<button type='submit' className='btn btn-outline-secondary mt-1'>
					Add
				</button>
			</form>
		</>
	);
};
