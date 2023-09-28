import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';


import Home from './pages/Home';
import Login from './pages/Login'
import User from './pages/User'

function App() {
    
    return (
        <Router>
            <Routes>      
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/user" element={<User/>}/>
            </Routes>
		</Router>
    );
}

export default App;


