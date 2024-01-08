import { useEffect, useReducer } from 'react';
import { todoReducer } from '../components/todoReducer';

// función de inicialización
const init = () => {
	return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
	const [todos, dispatch] = useReducer(todoReducer, [], init);

	// aprobechamos el useEffect para guardar los todos en el localStorage
	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const handleNewTodo = (todo) => {
		const action = {
			type: '[TODO] Add Todo',
			payload: todo,
		};

		dispatch(action);
	};

	const handleDeleteTodo = (todoId) => {
		const action = {
			type: '[TODO] Remove Todo',
			payload: todoId,
		};

		dispatch(action);
	};

	const handleToggleTodo = (todoId) => {
		const action = {
			type: '[TODO] Toggle Todo',
			payload: todoId,
		};

		dispatch(action);
	};

	return {
		pendingTodosCount: todos.filter((todo) => !todo.done).length,
		handleDeleteTodo,
		handleToggleTodo,
		handleNewTodo,
		todosCount: todos.length,
		todos,
		init,
	};
};
