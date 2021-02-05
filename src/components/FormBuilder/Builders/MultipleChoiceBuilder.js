import {
	AddOptions,
	FieldControls,
	QuestionField,
} from '../Helpers/HelperFunctions';

const MultipleChoiceBuilder = ({ field, remove, duplicate, required }) => {
	const renderedOptions = field.options.map((option, i) => {
		return (
			<div className='input-group mb-1' key={i}>
				<div className='input-group-prepend'>
					<div className='input-group-text'>
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
					className='form-control'
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
			<FieldControls
				id={field.id}
				remove={remove}
				duplicate={duplicate}
				required={required}
			/>
		</div>
	);
};

export default MultipleChoiceBuilder;
