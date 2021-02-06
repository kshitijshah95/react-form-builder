import TextRendered from './RenderedFields/TextRendered';

const RenderedForm = ({ fields, title, desc }) => {
	const renderedFields = fields.map((field) => {
		if (field.type === 'text')
			return <TextRendered field={field} key={field.id} />;
		else return <span key='0'></span>;
	});
	return <div className='container my-5'>{renderedFields}</div>;
};

export default RenderedForm;
