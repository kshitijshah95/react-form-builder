const FieldControls = () => {
	return (
		<div className='mt-3'>
			<button className='btn btn-primary m-1'>Duplicate</button>
			<button className='btn btn-primary m-1'>Remove</button>
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
