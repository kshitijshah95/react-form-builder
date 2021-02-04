import { FieldControls, QuestionField } from '../helpers/HelperFunctions';

const TextBuilder = ({ field }) => {
	return (
		<div className='card card-body mt-3'>
			<QuestionField question={field.question} />
			<input
				className='form-control'
				key={field.id}
				id={field.id}
				required={field.required}
			/>
			<FieldControls />
		</div>
	);
};

export default TextBuilder;
