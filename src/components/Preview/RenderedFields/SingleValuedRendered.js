const TextRendered = ({ field, handleResponse }) => {
	const onInputChange = (e) => {
		const response = e.target.value;
		handleResponse(e, field, response);
	};
	return (
		<div className='card card-body mt-3'>
			<h5>{field.question}</h5>
			<input
				type='text'
				required={field.required}
				className='form-control'
				id={field.id}
				value={field.response}
				onChange={(e) => onInputChange(e)}
			/>
		</div>
	);
};

const ParaRendered = ({ field, handleResponse }) => {
	const onInputChange = (e) => {
		const response = e.target.value;
		handleResponse(e, field, response);
	};

	return (
		<div className='card card-body mt-3'>
			<h5>{field.question}</h5>
			<textarea
				required={field.required}
				className='form-control'
				id={field.id}
				value={field.response}
				onChange={(e) => onInputChange(e)}
			/>
		</div>
	);
};

const DateRendered = ({ field, handleResponse }) => {
	const onInputChange = (e) => {
		const response = e.target.value;
		handleResponse(e, field, response);
	};

	return (
		<div className='card card-body mt-3'>
			<h5>{field.question}</h5>
			<input
				type='datetime-local'
				required={field.required}
				className='form-control'
				id={field.id}
				value={field.response}
				onChange={(e) => onInputChange(e)}
			/>
		</div>
	);
};

export { TextRendered, ParaRendered, DateRendered };
