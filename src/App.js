import { useState } from 'react';
import Route from './components/Routing/Route';
import Header from './components/Routing/Header';
import FormBuilder from './components/FormBuilder/FormBuilder';
import RenderedForm from './components/Preview/RenderedForm';

const App = () => {
	const [fields, setFields] = useState([{ id: 0 }]);
	return (
		<div className='container my-5'>
			<Header />
			<Route path='/'>
				<FormBuilder fields={fields} setFields={setFields} />
			</Route>
			<Route path='/preview'>
				<RenderedForm fields={fields} setFields={setFields}/>
			</Route>
		</div>
	);
};

export default App;
