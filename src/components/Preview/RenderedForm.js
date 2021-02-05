import TextRendered from './RenderedFields/TextRendered';

const RenderedForm = ({ fields, setFields }) => {
	const renderedFields = fields.map((field) => {
		if (field.type === 'text') return <TextRendered field={field} />;
		else return <span key='0'></span>;
	});
	return <div>Preview</div>;
};

export default RenderedForm;
