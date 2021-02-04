const DropdownBuilder = ({ field }) => {
	const renderedOptions = field.options.map((option, i) => {
		return (
			<div key={i} className='dropdown-item'>
				option.label
			</div>
		);
	});
	return (
		<div className='m-3'>
			<div className='dropdown'>
				<button
					className='btn btn-secondary dropdown-toggle'
					type='button'
					id={field.id}
					data-toggle='dropdown'
					aria-haspopup='true'
					aria-expanded='false'>
					Dropdown button
				</button>
				<div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
					{renderedOptions}
				</div>
			</div>
		</div>
	);
};

export default DropdownBuilder;
