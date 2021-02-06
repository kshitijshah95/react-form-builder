import { useState } from 'react';

const TextRendered = ({ field }) => {
	const currValue = field.value || '';
	const [inputValue, setInputValue] = useState(currValue);
	return (
		<div className='card card-body mt-3'>
			<h5>{field.question}</h5>
			<input
				type='text'
				required={field.required}
				className='form-control'
				id={field.id}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
		</div>
	);
};

export default TextRendered;
