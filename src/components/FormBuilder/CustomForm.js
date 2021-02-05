import TextBuilder from './Builders/TextBuilder';
import ParaBuilder from './Builders/ParaBuilder';
import CheckboxBuilder from './Builders/CheckboxBuilder';
import MultipleChoiceBuilder from './Builders/MultipleChoiceBuilder';
import DateTimeBuilder from './Builders/DateTimeBuilder';
import DropdownBuilder from './Builders/DropdownBuilder';

const CustomForm = ({ fields, setFields }) => {
	const renderedFields = fields.map((field) => {
		if (field.type === 'text')
			return (
				<TextBuilder
					field={field}
					key={field.id}
					remove={(e) => removeField(e)}
					duplicate={(e) => duplicateField(e)}
					required={(e) => requiredField(e)}
				/>
			);
		else if (field.type === 'para')
			return (
				<ParaBuilder
					field={field}
					key={field.id}
					remove={(e) => removeField(e)}
					duplicate={(e) => duplicateField(e)}
					required={(e) => requiredField(e)}
				/>
			);
		else if (field.type === 'dropdown')
			return (
				<DropdownBuilder
					field={field}
					key={field.id}
					remove={(e) => removeField(e)}
					duplicate={(e) => duplicateField(e)}
					required={(e) => requiredField(e)}
				/>
			);
		else if (field.type === 'multiple-choice')
			return (
				<MultipleChoiceBuilder
					field={field}
					key={field.id}
					remove={(e) => removeField(e)}
					duplicate={(e) => duplicateField(e)}
					required={(e) => requiredField(e)}
				/>
			);
		else if (field.type === 'checkbox')
			return (
				<CheckboxBuilder
					field={field}
					key={field.id}
					remove={(e) => removeField(e)}
					duplicate={(e) => duplicateField(e)}
					required={(e) => requiredField(e)}
				/>
			);
		else if (field.type === 'date-time')
			return (
				<DateTimeBuilder
					field={field}
					key={field.id}
					remove={(e) => removeField(e)}
					duplicate={(e) => duplicateField(e)}
					required={(e) => requiredField(e)}
				/>
			);
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

	const removeField = (id) => {
		const newState = fields.filter((field) => {
			return field.id !== id;
		});
		setFields(newState);
	};

	const duplicateField = (oldId) => {
		const id = fields[fields.length - 1].id + 1;
		const record = fields.filter((field) => {
			return field.id === oldId;
		});
		setFields([
			...fields,
			{
				...record[0],
				id: id,
			},
		]);
	};

	const requiredField = (id) => {
		console.log('Required!');
		const records = fields.map((field) => {
			if (field.id === id)
				return {
					...field,
					required: !field.required,
				};
			return field;
		});
		setFields([...records]);
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
