import { useTodos } from '../hooks/useTodos';
import { TodoAdd, TodoList } from './index';

export const TodoApp = () => {
	const {
		pendingTodosCount,
		handleDeleteTodo,
		handleToggleTodo,
		handleNewTodo,
		todosCount,
		todos,
	} = useTodos();

	return (
		<>
			<h1>ToDos</h1>

			<h4>
				ToDos: {todosCount} <small>Pending: {pendingTodosCount}</small>
			</h4>
			<hr />

			<div className='row'>
				<div className='col-7'>
					<TodoList
						todos={todos}
						onDeleteTodo={handleDeleteTodo}
						onToggleTodo={handleToggleTodo}
					/>
				</div>

				<div className='col-5'>
					<h4>Add ToDo</h4>
					<hr />

					<TodoAdd onNewTodo={handleNewTodo} />
				</div>
			</div>

			{/* <pre>{JSON.stringify({})}</pre> */}
		</>
	);
};
