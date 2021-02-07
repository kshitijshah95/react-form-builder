const MultiOptionBuilder = ({ field, updateOption, deleteOption }) => {
	const renderedOptions = field.options.map((option, index) => {
		return (
			<div className='input-group mb-2' key={index}>
				<input
					key={index}
					className='form-control'
					value={option.label}
					onChange={(e) => {
						field.options[index].label = e.target.value;
						updateOption(e, field);
					}}
				/>
				<div className='input-group-append'>
					<button
						onClick={(e) => deleteOption(e, field, index)}
						className='btn btn-danger input-group-text'>
						X
					</button>
				</div>
			</div>
		);
	});

	return <>{renderedOptions}</>;
};

export default MultiOptionBuilder;
