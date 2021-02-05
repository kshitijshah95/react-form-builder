import { useState } from 'react';
import { FieldControls, QuestionField } from '../helpers/HelperFunctions';

const TextBuilder = ({ field, remove, duplicate }) => {
	const currValue = field.value || '';
	const [inputValue, setInputValue] = useState(currValue);
	return (
		<div className='card card-body mt-3'>
			<QuestionField question={field.question} />
			<input
				className='form-control'
				key={field.id}
				id={field.id}
				required={field.required}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<FieldControls id={field.id} remove={remove} duplicate={duplicate} />
		</div>
	);
};

export default TextBuilder;
