import { useEffect, useReducer } from 'react';

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
		handleDeleteTodo,
		handleToggleTodo,
		handleNewTodo,
	};
};
