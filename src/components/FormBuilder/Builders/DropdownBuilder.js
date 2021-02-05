import {
	AddOptions,
	FieldControls,
	QuestionField,
} from '../Helpers/HelperFunctions';
const DropdownBuilder = ({ field, remove, duplicate, required }) => {
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
						aria-expanded='false'
						required={field.required}>
						Dropdown button
					</button>
					<div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
						{renderedOptions}
					</div>
				</div>
			</div>
			<AddOptions />
			<FieldControls
				id={field.id}
				remove={remove}
				duplicate={duplicate}
				required={required}
			/>
		</div>
	);
};

export default DropdownBuilder;
