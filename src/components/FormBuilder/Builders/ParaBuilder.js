const ParaBuilder = ({ field }) => {
	return (
		<div className='m-3'>
			<textarea
				className='form-control'
				key={field.id}
				id={field.id}
				required={field.required}
			/>
		</div>
	);
};

export default ParaBuilder;
