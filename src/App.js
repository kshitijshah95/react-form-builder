import { useState } from 'react';
import Route from './components/Routing/Route';
import Header from './components/Routing/Header';
import FormBuilder from './components/FormBuilder/FormBuilder';
import RenderedForm from './components/Preview/RenderedForm';

const App = () => {
	const [fields, setFields] = useState([{ id: 0 }]);
	const [title, setTitle] = useState('');
	const [desc, setDesc] = useState('');

	const [responses, setResponses] = useState([]);

	return (
		<div className='container my-5'>
			<Header />
			<Route path='/'>
				<FormBuilder
					fields={fields}
					setFields={setFields}
					title={title}
					setTitle={setTitle}
					desc={desc}
					setDesc={setDesc}
				/>
			</Route>
			<Route path='/preview'>
				<RenderedForm
					fields={fields}
					setFields={setFields}
					title={title}
					desc={desc}
					responses={responses}
					setResponses={setResponses}
				/>
			</Route>
		</div>
	);
};

export default App;
