const TextRendered = ({ field, responses, handleResponse }) => {
	return (
		<div className='card card-body mt-3'>
			<h5>{field.question}</h5>
			<input
				type='text'
				required={field.required}
				className='form-control'
				id={field.id}
				value={responses}
				onChange={(e) => handleResponse(e, field)}
			/>
		</div>
	);
};

export { TextRendered };
