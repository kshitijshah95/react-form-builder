const MultipleChoiceBuilder = ({ field }) => {
	return (
		<div className='form-check'>
			<input
				className='form-check-input'
				type='radio'
				name='exampleRadios'
				id='exampleRadios1'
				value='option1'
				checked
			/>
			<label className='form-check-label' for='exampleRadios1'>
				Default radio
			</label>
		</div>
	);
};

export default MultipleChoiceBuilder;
