const DateTimeBuilder = ({ field }) => {
	return (
		<div className='m-3'>
			<input
				className='form-control'
				key={field.id}
				id={field.id}
				required={field.required}
			/>
		</div>
	);
};

export default DateTimeBuilder;
