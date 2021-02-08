import {
	TextBuilder,
	ParaBuilder,
	DateTimeBuilder,
} from './Builders/TextBuilder';
import MultiOptionBuilder from './Builders/DropdownBuilder';
import {
	FieldControls,
	QuestionField,
	AddOptions,
} from './Helpers/HelperFunctions';

const CustomForm = ({ fields, setFields }) => {
	const renderedFields = fields.map((field) => {
		const wrapperHeader = (
			<QuestionField
				question={field.question}
				setQuestionValue={(e) => updateQuestion(e, field)}
			/>
		);
		const wrapperFooter = (
			<FieldControls
				id={field.id}
				remove={(e, id) => removeField(e, id)}
				duplicate={(e, id) => duplicateField(e, id)}
				required={(e, id) => requiredField(e, id)}
			/>
		);
		if (field.type === 'text') {
			return (
				<div className='card card-body mt-3' key={field.id}>
					{wrapperHeader}
					<TextBuilder field={field} />
					{wrapperFooter}
				</div>
			);
		} else if (field.type === 'para') {
			return (
				<div className='card card-body mt-3' key={field.id}>
					{wrapperHeader}
					<ParaBuilder field={field} />
					{wrapperFooter}
				</div>
			);
		} else if (field.type === 'date-time') {
			return (
				<div className='card card-body mt-3' key={field.id}>
					{wrapperHeader}
					<DateTimeBuilder field={field} />
					{wrapperFooter}
				</div>
			);
		} else if (
			field.type === 'dropdown' ||
			field.type === 'multiple-choice' ||
			field.type === 'checkbox'
		) {
			return (
				<div className='card card-body mt-3' key={field.id}>
					{wrapperHeader}
					<MultiOptionBuilder
						field={field}
						updateOption={(e, id, index) => updateOption(e, id, index)}
						deleteOption={(e, field, index) => deleteOption(e, field, index)}
					/>
					<AddOptions
						field={field}
						addOption={(e, newField) => addOption(e, newField)}
					/>
					{wrapperFooter}
				</div>
			);
		}
		return <span key='0'></span>;
	});

	const addField = (e, type) => {
		e.preventDefault();
		const id = fields[fields.length - 1].id + 1;
		let options = [];
		if (
			type === 'checkbox' ||
			type === 'multiple-choice' ||
			type === 'dropdown'
		) {
			options = [
				{ value: 'Option 1', checked: false },
				{ value: 'Option 2', checked: true },
				{ value: 'Option 3', checked: false },
			];
		}
		setFields([
			...fields,
			{
				id: id,
				question: ``,
				type: type,
				required: false,
				options: options,
				response: null,
			},
		]);
	};

	const updateQuestion = (e, field) => {
		let newFieldValue = {
			...field,
			question: e.target.value,
		};
		let records = fields.map((field) => {
			if (field.id === newFieldValue.id) return newFieldValue;
			return field;
		});
		setFields(records);
	};

	const removeField = (e, id) => {
		e.preventDefault();
		const newState = fields.filter((field) => {
			return field.id !== id;
		});
		setFields(newState);
	};

	const duplicateField = (e, oldId) => {
		e.preventDefault();
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

	const addOption = (e, field) => {
		e.preventDefault();
		const newLabel = `New Option`;
		let newFieldValue = {
			...field,
			options: [...field.options, { label: newLabel }],
		};
		let records = fields.map((field) => {
			if (field.id === newFieldValue.id) return newFieldValue;
			return field;
		});
		setFields(records);
	};

	const deleteOption = (e, field, index) => {
		e.preventDefault();
		let newFieldValue = {
			...field,
			options: field.options.filter((option, i) => i !== index),
		};
		let records = fields.map((field) => {
			if (field.id === newFieldValue.id) return newFieldValue;
			return field;
		});
		setFields(records);
	};

	const updateOption = (e, currField) => {
		e.preventDefault();
		let records = fields.map((field) => {
			if (field.id === currField.id) return currField;
			return field;
		});
		setFields(records);
	};

	const requiredField = (e, id) => {
		e.preventDefault();
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
