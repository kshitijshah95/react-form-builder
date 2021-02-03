import { useState } from 'react';

// const options = [
// 	{
// 		label: 'Short Answer',
// 		value: 'text',
// 	},
// 	{
// 		label: 'Multiple Choice',
// 		value: 'radio',
// 	},
// 	{
// 		label: 'Checkboxes',
// 		value: 'checkbox',
// 	},
// 	{
// 		label: 'Paragraph',
// 		value: 'textarea',
// 	},
// 	{
// 		label: 'Date',
// 		value: 'date',
// 	},
// 	{
// 		label: 'Time',
// 		value: 'time',
// 	},
// 	{
// 		label: 'Date/Time',
// 		value: 'date-time',
// 	},
// ];

const CustomForm = () => {
	const [displayFields, setDisplayFields] = useState(true);

	const addTextField = (e) => {
		e.preventDefault();
		setDisplayFields(!displayFields);
	};
	// const addParagraphField = (e) => {
	// 	e.preventDefault();
	// };
	// const addMultipleChoiceField = (e) => {
	// 	e.preventDefault();
	// };
	// const addCheckBoxField = (e) => {
	// 	e.preventDefault();
	// };
	// const addDateTimeField = (e) => {
	// 	e.preventDefault();
	// };

	return (
		<>
			<button onClick={(e) => addTextField(e)} className='btn btn-primary'>
				Add Short Answer
			</button>
			{displayFields}
			{/* <button
				onClick={(e) => addParagraphField(e)}
				className='btn btn-primary ml-1'>
				Add Paragraph
			</button>
			<button
				onClick={(e) => addMultipleChoiceField(e)}
				className='btn btn-primary ml-1'>
				Add Multiple Choice
			</button>
			<button
				onClick={(e) => addCheckBoxField(e)}
				className='btn btn-primary ml-1'>
				Add CheckBoxes
			</button>
			<button
				onClick={(e) => addDateTimeField(e)}
				className='btn btn-primary ml-1'>
				Add Date/Time
			</button> */}
		</>
	);
};

export default CustomForm;
