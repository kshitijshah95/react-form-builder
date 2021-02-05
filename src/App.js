import { useState } from 'react';
import Route from './components/Route';
import Header from './components/Header';
import FormBuilder from './components/FormBuilder/FormBuilder';

const App = () => {
	const [fields, setFields] = useState([{ id: 0 }]);
	return (
		<div className='container my-5'>
			<Header />
			<Route path='/'>
				<FormBuilder fields={fields} setFields={setFields} />
			</Route>
			<Route path='/preview'>Preview App</Route>
		</div>
	);
};

export default App;
