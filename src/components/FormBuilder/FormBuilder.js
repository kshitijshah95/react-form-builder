// Form Builder App Component
import { useState } from 'react';
import CustomForm from './CustomForm';
import FormHeader from './FormHeader';

const FormBuilder = () => {
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');

	return (
		<form className='m-3'>
			<FormHeader
				title={title}
				onChangeTitle={setTitle}
				desc={desc}
				onChangeDesc={setDesc}
			/>
			<CustomForm />
		</form>
	);
};

export default FormBuilder;
