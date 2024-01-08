import { useState } from 'react';

export const useForm = (initialForm = {}) => {
	const [formState, setFormState] = useState(initialForm);

	// Función que permite realizar el cambio de cualquier input
	const onInputChange = ({ target }) => {
		const { name, value } = target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	// Reseteamos el formulario a su estado inicial
	const onResetForm = () => {
		setFormState(initialForm);
	};

	return {
		...formState,
		setFormState,
		onInputChange,
		onResetForm,
	};
};
