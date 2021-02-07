// Form Builder App Component
import CustomForm from './CustomForm';
import FormHeader from './FormHeader';

const FormBuilder = ({ fields, setFields, title, setTitle, desc, setDesc }) => {
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
