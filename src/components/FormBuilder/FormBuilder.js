// Form Builder App Component
import { useState } from 'react';
import CustomForm from './CustomForm';
import FormHeader from './FormHeader';

const FormBuilder = ({ fields, setFields }) => {
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
			<CustomForm fields={fields} setFields={setFields} />
		</form>
	);
};

export default FormBuilder;
