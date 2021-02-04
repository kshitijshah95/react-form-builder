import { useState } from 'react';
import TextBuilder from './Builders/TextBuilder';
import ParaBuilder from './Builders/ParaBuilder';
import CheckboxBuilder from './Builders/CheckboxBuilder';
import MultipleChoiceBuilder from './Builders/MultipleChoiceBuilder';
import DateTimeBuilder from './Builders/DateTimeBuilder';
import DropdownBuilder from './Builders/DropdownBuilder';

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
		return <></>;
	});

	const addField = (e, type) => {
		e.preventDefault();
		const id = fields[fields.length - 1].id + 1;
		setFields([
			...fields,
			{
				id: id,
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
			<button onClick={(e) => addField(e, 'text')} className='btn btn-primary'>
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
			{renderedFields}
		</>
	);
};

export default CustomForm;
