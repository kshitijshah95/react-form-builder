import React, { useState, useEffect } from 'react';
import CheckboxGroup from 'react-checkbox-group';
import Select from 'react-select';

const CheckBoxRendered = ({ field, handleResponse, stateSetter }) => {
	const [options, setOptions] = useState([]);

	useEffect(() => {
		stateSetter({ ...field, options: options });
	}, [options]);

	const renderedOptions = (Checkbox) =>
		field.options.map((option) => {
			return (
				<label>
					<Checkbox value={option.value} /> {option.value}
				</label>
			);
		});

	return (
		<CheckboxGroup
			name='checkbox-options'
			value={options}
			onChange={setOptions}>
			{(Checkbox) => renderedOptions(Checkbox)}
		</CheckboxGroup>
	);
};

const DropdownRendered = ({ field, handleResponse }) => {
	const options = field.options;
	return (
		<Select options={options} onChange={(e, value) => handleResponse(value)} />
	);
};

export { CheckBoxRendered, DropdownRendered };
// react-select
// react-dnd
