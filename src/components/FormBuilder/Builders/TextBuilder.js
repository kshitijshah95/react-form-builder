const TextBuilder = ({ field }) => {
	return (
		<input className='form-control' id={field.id} required={field.required} />
	);
};

const ParaBuilder = ({ field }) => {
	return (
		<textarea
			className='form-control'
			id={field.id}
			required={field.required}
		/>
	);
};

const DateTimeBuilder = ({ field }) => {
	return <input type='datetime-local' id={field.id} name={field.id} />;
};

export { TextBuilder, ParaBuilder, DateTimeBuilder };
