import {
	AddOptions,
	FieldControls,
	QuestionField,
} from '../helpers/HelperFunctions';

const CheckboxBuilder = ({ field, remove, duplicate }) => {
	const renderedOptions = field.options.map((option, i) => {
		return (
			<div className='input-group mb-1' key={i}>
				<div className='input-group-prepend'>
					<div className='input-group-text'>
						<input
							type='checkbox'
							aria-label='Radio button for following text input'
							value={option.value}
						/>
					</div>
				</div>
				<input
					type='text'
					className='form-control'
					aria-label='Text input with radio button'
					value={option.value}
				/>
			</div>
		);
	});

	return (
		<div className='card card-body mt-3'>
			<QuestionField question={field.question} />
			{renderedOptions}
			<AddOptions />
			<FieldControls id={field.id} remove={remove} duplicate={duplicate} />
		</div>
	);
};

export default CheckboxBuilder;
