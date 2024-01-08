export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
	return (
		<li
			className={`list-group-item list-group-item-primary d-flex justify-content-between ${
				todo.done ? 'list-group-item-dark' : ''
			}`}
		>
			<span
				className={`align-self-center user-select-none ${
					todo.done ? 'text-decoration-line-through' : ''
				}`}
				onClick={() => onToggleTodo(todo.id)}
			>
				{todo.description}
			</span>

			<button className='btn btn-danger' onClick={() => onDeleteTodo(todo.id)}>
				Borrar
			</button>
		</li>
	);
};
