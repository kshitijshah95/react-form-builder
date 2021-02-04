import {
	AddOptions,
	FieldControls,
	QuestionField,
} from '../helpers/HelperFunctions';
const DropdownBuilder = ({ field }) => {
	const renderedOptions = field.options.map((option, i) => {
		return (
			<div key={i} className='dropdown-item'>
				option.label
			</div>
		);
	});
	return (
		<div className='card card-body mt-3'>
			<QuestionField question={field.question} />
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
			<AddOptions />
			<FieldControls />
		</div>
	);
};

export default DropdownBuilder;
