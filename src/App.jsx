import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Community from './pages/Community.jsx';
import Contact from './pages/Contact.jsx';
import Notifications from './pages/Notifications.jsx';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/community' element={<Community />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/notifications' element={<Notifications />} />
            </Routes>
        </Router>
    );
};

export default App;

