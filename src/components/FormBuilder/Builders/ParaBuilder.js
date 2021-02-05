import { FieldControls, QuestionField } from '../Helpers/HelperFunctions';

const ParaBuilder = ({ field, remove, duplicate, required }) => {
	return (
		<div className='card card-body mt-3'>
			<QuestionField question={field.question} />
			<textarea
				className='form-control'
				key={field.id}
				id={field.id}
				required={field.required}
			/>
			<FieldControls
				id={field.id}
				remove={remove}
				duplicate={duplicate}
				required={required}
			/>
		</div>
	);
};

export default ParaBuilder;
