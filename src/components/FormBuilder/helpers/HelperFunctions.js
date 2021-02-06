const FieldControls = ({ id, remove, duplicate, required }) => {
	const removeThis = (e) => {
		e.preventDefault();
		remove(id);
	};

	const duplicateThis = (e) => {
		e.preventDefault();
		duplicate(id);
	};

	const requiredThis = (e) => {
		e.preventDefault();
		required(id);
	};

	return (
		<div className='mt-3'>
			<button onClick={(e) => duplicateThis(e)} className='btn btn-primary m-1'>
				Duplicate
			</button>
			<button onClick={(e) => removeThis(e)} className='btn btn-primary m-1'>
				Remove
			</button>
			<button onClick={(e) => requiredThis(e)} className='btn btn-primary m-1'>
				Required
			</button>
		</div>
	);
};

const AddOptions = () => {
	return (
		<div>
			<button className='btn btn-primary mt-2'>Add Option</button>
		</div>
	);
};

const QuestionField = ({ question, setQuestionValue }) => {
	return (
		<input
			type='text'
			className='form-control mb-2'
			onChange={(e) => setQuestionValue(e.target.value)}
			value={question}
			placeholder='Question'
		/>
	);
};

export { AddOptions, FieldControls, QuestionField };
