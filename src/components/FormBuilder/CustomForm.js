import { useState } from 'react';
import TextBuilder from './builders/TextBuilder';
import ParaBuilder from './builders/ParaBuilder';
import CheckboxBuilder from './builders/CheckboxBuilder';
import MultipleChoiceBuilder from './builders/MultipleChoiceBuilder';
import DateTimeBuilder from './builders/DateTimeBuilder';
import DropdownBuilder from './builders/DropdownBuilder';

const CustomForm = () => {
	const [fields, setFields] = useState([{ id: 0 }]);

	const renderedFields = fields.map((field) => {
		if (field.type === 'text')
			return <TextBuilder field={field} key={field.id} />;
		else if (field.type === 'para')
			return <ParaBuilder field={field} key={field.id} />;
		else if (field.type === 'dropdown')
			return <DropdownBuilder field={field} key={field.id} />;
		else if (field.type === 'multiple-choice')
			return <MultipleChoiceBuilder field={field} key={field.id} />;
		else if (field.type === 'checkbox')
			return <CheckboxBuilder field={field} key={field.id} />;
		else if (field.type === 'date-time')
			return <DateTimeBuilder field={field} key={field.id} />;
		else return <span key='0'></span>;
	});

	const addField = (e, type) => {
		e.preventDefault();
		const id = fields[fields.length - 1].id + 1;
		setFields([
			...fields,
			{
				id: id,
				question: `Question ${id}`,
				type: type,
				required: false,
				options: [
					{ label: 'Option 1', value: 'option1' },
					{ label: 'Option 2', value: 'option2' },
					{ label: 'Option 3', value: 'option3' },
				],
			},
		]);
	};

	return (
		<>
			{renderedFields}
			<div className='my-4'>
				<button
					onClick={(e) => addField(e, 'text')}
					className='btn btn-primary'>
					Add Short Answer
				</button>
				<button
					onClick={(e) => addField(e, 'para')}
					className='btn btn-primary ml-1'>
					Add Paragraph
				</button>
				<button
					onClick={(e) => addField(e, 'multiple-choice')}
					className='btn btn-primary ml-1'>
					Add Multiple Choice
				</button>
				<button
					onClick={(e) => addField(e, 'dropdown')}
					className='btn btn-primary ml-1'>
					Add Dropdown
				</button>
				<button
					onClick={(e) => addField(e, 'checkbox')}
					className='btn btn-primary ml-1'>
					Add CheckBoxes
				</button>
				<button
					onClick={(e) => addField(e, 'date-time')}
					className='btn btn-primary ml-1'>
					Add Date/Time
				</button>
			</div>
		</>
	);
};

export default CustomForm;
