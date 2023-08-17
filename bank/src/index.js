import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<Router>
			<Routes>      
				<Route path="/" element={<Home/>}/>
			</Routes>
		</Router>
	</React.StrictMode>,
)
