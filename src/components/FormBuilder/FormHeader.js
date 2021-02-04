const FormHeader = ({ onChangeTitle, onChangeDesc, desc, title }) => {
	return (
		<>
			<div className='mb-3'>
				<input
					type='text'
					className='form-control'
					id='form-title'
					placeholder='Form Title'
					value={title}
					onChange={(e) => onChangeTitle(e.target.value)}
					aria-describedby='form-title'
				/>
			</div>
			<div className='mb-3'>
				<textarea
					type='text'
					className='form-control'
					id='form-title'
					placeholder='Form Description (Optional)'
					value={desc}
					onChange={(e) => onChangeDesc(e.target.value)}
					aria-describedby='form-description'
				/>
			</div>
		</>
	);
};

export default FormHeader;
