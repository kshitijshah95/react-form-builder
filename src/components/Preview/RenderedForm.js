import {
	TextRendered,
	ParaRendered,
	DateRendered,
} from './RenderedFields/SingleValuedRendered';

const RenderedForm = ({ fields, setFields, title, desc }) => {
	const handleInputResponse = (e, field, response) => {
		e.preventDefault();
		let updatedField = {
			...field,
			response: response,
		};
		stateSetter(updatedField);
		console.log(field.response);
	};

	const stateSetter = (updatedField) => {
		let newFields = fields.map((field) => {
			if (field.id === updatedField.id) return updatedField;
			return field;
		});
		setFields(newFields);
		console.log(newFields);
	};

	const renderedFields = fields.map((field) => {
		if (field.type === 'text')
			return (
				<TextRendered
					field={field}
					key={field.id}
					handleResponse={(e, field, response) =>
						handleInputResponse(e, field, response)
					}
				/>
			);
		else if (field.type === 'para')
			return (
				<ParaRendered
					field={field}
					key={field.id}
					handleResponse={(e, field, response) =>
						handleInputResponse(e, field, response)
					}
				/>
			);
		else if (field.type === 'date-time')
			return (
				<DateRendered
					field={field}
					key={field.id}
					handleResponse={(e, field, response) =>
						handleInputResponse(e, field, response)
					}
				/>
			);
		else if (field.type === 'checkbox')
			return (
				<CheckBoxRendered
					field={field}
					key={field.id}
					handleResponse={(e, field, response) =>
						handleInputResponse(e, field, response)
					}
				/>
			);
		else return <span key='0'></span>;
	});

	return (
		<div className='container my-5'>
			<h3>{title}</h3>
			<p>{desc}</p>
			{renderedFields}
		</div>
	);
};

export default RenderedForm;
