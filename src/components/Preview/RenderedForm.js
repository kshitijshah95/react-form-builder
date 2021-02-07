import { useState, useEffect } from 'react';
import { TextRendered } from './RenderedFields/TextRendered';

const RenderedForm = ({
	fields,
	setFields,
	title,
	desc,
	responses,
	setResponses,
}) => {
	const [response, setResponse] = useState({});

	useEffect(() => {
		const basicResponseStructure = {
			id: responses.length,
		};
		setResponse(basicResponseStructure);
	}, []);

	const renderedFields = fields.map((field) => {
		if (field.type === 'text')
			return (
				<TextRendered
					field={field}
					key={field.id}
					handleResponse={(e, field) => handleInputResponse(e, field)}
				/>
			);
		else return <span key='0'></span>;
	});

	const handleInputResponse = (e, field) => {
		e.preventDefault();
		let updatedField = {
			...field,
			responses: [...field.responses, e.target.value],
		};
		stateSetter(updatedField);
	};

	const stateSetter = (updatedField) => {
		let newFields = fields.map((field) => {
			if (field.id === updatedField.id) return updatedField;
			return field;
		});
		setFields(newFields);
		console.log(newFields);
	};

	return (
		<div className='container my-5'>
			<h3>{title}</h3>
			<p>{desc}</p>
			{renderedFields}
		</div>
	);
};

export default RenderedForm;
