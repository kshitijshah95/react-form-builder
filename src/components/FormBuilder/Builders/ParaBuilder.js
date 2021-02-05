import { FieldControls, QuestionField } from '../helpers/HelperFunctions';

const ParaBuilder = ({ field }) => {
	return (
		<div className='card card-body mt-3'>
			<QuestionField question={field.question} />
			<textarea
				className='form-control'
				key={field.id}
				id={field.id}
				required={field.required}
			/>
			<FieldControls />
		</div>
	);
};

export default ParaBuilder;
