import React from 'react';
import {
	BrowserRouter,
	Route,
	Routes,
	useSearchParams,
} from 'react-router-dom';
import '../styles/App.css';

const Details = () => {
	const [searchParams] = useSearchParams();
	return (
		<div className="details">
			Employee {searchParams.get('id')} named {searchParams.get('name')}{' '}
			works as {searchParams.get('designation')}
		</div>
	);
};

const App = () => {
	//Write your code here
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Details />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
