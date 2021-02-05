import { FieldControls, QuestionField } from '../helpers/HelperFunctions';

const DateTimeBuilder = ({ field, remove, duplicate }) => {
	return (
		<div className='card card-body mt-3'>
			<QuestionField question={field.question} />
			<div className='input-group'>
				<input type='datetime-local' id={field.id} name={field.id} />
			</div>
			<FieldControls id={field.id} remove={remove} duplicate={duplicate} />
		</div>
	);
};

export default DateTimeBuilder;
