import { useState } from 'react';

const options = [
	{
		label: 'Short Answer',
		value: 'text',
	},
	{
		label: 'Multiple Choice',
		value: 'radio',
	},
	{
		label: 'Checkboxes',
		value: 'checkbox',
	},
	{
		label: 'Paragraph',
		value: 'textarea',
	},
	{
		label: 'Date',
		value: 'date',
	},
	{
		label: 'Time',
		value: 'time',
	},
	{
		label: 'Date/Time',
		value: 'date-time',
	},
];

const CustomForm = () => {
	const formFields = [];
	const [selected, setSelected] = useState(options[0]);
	const renderedOptions = options.map((option) => {
		return <option value={option.value}>{option.label}</option>;
	});

	const handleClick = (e) => {
		e.preventDefault();
		let inputField;
		switch (selected) {
			case 'text':
				break;
			case 'textarea':
				break;
			case 'radio':
				break;
			case 'checkbox':
				break;
			case 'dropdown':
				break;
			case 'date':
				break;
			case 'time':
				break;
			case 'date-time':
				break;
			default:
				break;
		}
	};

	return (
		<>
			<select
				class='form-select'
				value={selected}
				onChange={(e) => setSelected(e.target.value)}
				aria-label='Default select'>
				{renderedOptions}
			</select>
			<button onClick={(e) => handleClick(e)} className='btn btn-primary'>
				Add Field
			</button>
		</>
	);
};

export default CustomForm;
