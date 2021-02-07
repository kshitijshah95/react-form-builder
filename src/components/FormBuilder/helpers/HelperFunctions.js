const FieldControls = ({ id, remove, duplicate, required }) => {
	return (
		<div className='mt-3'>
			<button onClick={(e) => duplicate(e, id)} className='btn btn-primary m-1'>
				Duplicate
			</button>
			<button onClick={(e) => remove(e, id)} className='btn btn-primary m-1'>
				Remove
			</button>
			<button onClick={(e) => required(e, id)} className='btn btn-primary m-1'>
				Required
			</button>
		</div>
	);
};

const AddOptions = ({ field, addOption }) => {
	return (
		<div>
			<button
				onClick={(e) => addOption(e, field)}
				className='btn btn-primary mt-2'>
				Add Option
			</button>
		</div>
	);
};

const QuestionField = ({ question, setQuestionValue }) => {
	return (
		<input
			type='text'
			className='form-control mb-2'
			onChange={(e) => setQuestionValue(e)}
			value={question}
			placeholder='Question'
		/>
	);
};

export { AddOptions, FieldControls, QuestionField };
