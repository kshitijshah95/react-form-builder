import { useState, useEffect } from 'react';
import { FieldControls, QuestionField } from '../Helpers/HelperFunctions';

const TextBuilder = ({ field, remove, duplicate, required, onChangeField }) => {
	const [questionValue, setQuestionValue] = useState(field.question);

	useEffect(() => {
		let newFieldValue = {
			...field,
			question: questionValue,
		};
		onChangeField(newFieldValue);
	}, [questionValue]);

	return (
		<div className='card card-body mt-3'>
			<QuestionField
				question={questionValue}
				setQuestionValue={setQuestionValue}
			/>
			<input
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

export default TextBuilder;
