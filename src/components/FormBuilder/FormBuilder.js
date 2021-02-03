// Form Builder App Component
import { useState } from 'react';
import CustomForm from './CustomForm';

const FormBuilder = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');

	return (
		<form className='m-3'>
			<div className='mb-3'>
				<input
					type='text'
					className='form-control'
					id='form-title'
					placeholder='Form Title'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					aria-describedby='form-title'
				/>
			</div>
			<div className='mb-3'>
				<textarea
					type='text'
					className='form-control'
					id='form-title'
					placeholder='Form Description (Optional)'
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
