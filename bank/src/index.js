import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { store } from "./utilities/Store"

import Home from './pages/Home';
import Login from './pages/Login'
import User from './pages/User'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<React.StrictMode>	 
			<Router>
				<Routes>      
					<Route path="/" element={<Home/>}/>
					<Route path="/login" element={<Login/>}/>
					<Route path="/user" element={<User/>}/>
				</Routes>
			</Router>
		</React.StrictMode>
	</Provider>
)
