import { useState } from 'react';
const CheckBoxRendered = ({ field, handleResponse, stateSetter }) => {
	

	const onInputChange = (e, oldOption) => {
		// const updatedOption = { ...oldOption, checked: e.target.checked };
		// console.log('Updated: ' + updatedOption.checked);

		const updatedOptions = field.options.map((option) => {
			// if (option.value === updatedOption.value) return updatedOption;
		});
		const response = {
			...field,
			options: updatedOptions,
		};
		stateSetter(response);
		console.log('State: ' + [...field.options]);
	};

	const renderedOptions = field.options.map((option, i) => {
		return (
			<div className='form-check' key={i}>
				<input
					className='form-check-input'
					type='checkbox'
					value={option.value}
					id={`checkbox-${i}`}
					onChange={(e) => onInputChange(e, option)}
					checked={option.checked}
					required={field.required}
				/>
				<label className='form-check-label' htmlFor={`checkbox-${i}`}>
					{option.value}
				</label>
			</div>
		);
	});

	return (
		<div className='card card-body mt-3'>
			<h5>{field.question}</h5>
			{renderedOptions}
		</div>
	);
};

export { CheckBoxRendered };
