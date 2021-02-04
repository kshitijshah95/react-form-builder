import {
	AddOptions,
	FieldControls,
	QuestionField,
} from '../helpers/HelperFunctions';

const MultipleChoiceBuilder = ({ field }) => {
	const renderedOptions = field.options.map((option, i) => {
		return (
			<div class='input-group mb-1' key={i}>
				<div class='input-group-prepend'>
					<div class='input-group-text'>
						<input
							name={field.id}
							type='checkbox'
							aria-label='Checkbox for following text input'
							value={option.value}
						/>
					</div>
				</div>
				<input
					type='text'
					class='form-control'
					aria-label='Text input with checkbox'
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
			<FieldControls />
		</div>
	);
};

export default MultipleChoiceBuilder;
