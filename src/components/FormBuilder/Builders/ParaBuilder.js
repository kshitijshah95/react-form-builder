import { FieldControls, QuestionField } from '../helpers/HelperFunctions';

const ParaBuilder = ({ field, remove, duplicate }) => {
	return (
		<div className='card card-body mt-3'>
			<QuestionField question={field.question} />
			<textarea
				className='form-control'
				key={field.id}
				id={field.id}
				required={field.required}
			/>
			<FieldControls id={field.id} remove={remove} duplicate={duplicate} />
		</div>
	);
};

export default ParaBuilder;
