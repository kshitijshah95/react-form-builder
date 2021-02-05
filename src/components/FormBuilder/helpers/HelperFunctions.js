const FieldControls = ({ id, remove, duplicate }) => {
	const removeThis = (e) => {
		e.preventDefault();
		remove(id);
	};

	const duplicateThis = (e) => {
		e.preventDefault();
		duplicate(id);
	};

	return (
		<div className='mt-3'>
			<button onClick={(e) => duplicateThis(e)} className='btn btn-primary m-1'>
				Duplicate
			</button>
			<button onClick={(e) => removeThis(e)} className='btn btn-primary m-1'>
				Remove
			</button>
			<button className='btn btn-primary m-1'>Required</button>
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

const QuestionField = ({ question }) => {
	return <input type='text' className='form-control mb-2' value={question} />;
};

export { AddOptions, FieldControls, QuestionField };
