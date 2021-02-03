// Form Builder App Component
import { useState } from 'react';
import CustomForm from './CustomForm';

const FormBuilder = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');

	return (
		<form className='m-3'>
			<div class='mb-3'>
				<input
					type='text'
					class='form-control'
					id='form-title'
					placeHolder='Form Title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					aria-describedby='form-title'
				/>
			</div>
			<div class='mb-3'>
				<textarea
					type='text'
					class='form-control'
					id='form-title'
					placeHolder='Form Description (Optional)'
					value={desc}
					onChange={(e) => setDesc(e.target.value)}
					aria-describedby='form-description'
				/>
			</div>
			<CustomForm />
			{/* {title}
			{desc} */}
		</form>
	);
};

export default FormBuilder;
