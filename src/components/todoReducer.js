export const todoReducer = (inicialState = [], action) => {
	switch (action.type) {
		case '[TODO] Add Todo':
			return [...inicialState, action.payload];

		case '[TODO] Remove Todo':
			return inicialState.filter((todo) => todo.id !== action.payload);

		case '[TODO] Toggle Todo':
			return inicialState.map((todo) => {
				if (todo.id === action.payload) {
					return {
						...todo,
						done: !todo.done,
					};
				}

				return todo;
			});

		default:
			return inicialState;
	}
};
