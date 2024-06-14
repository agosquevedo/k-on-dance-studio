// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Classes from './components/Classes';
import Groups from './components/Groups';
import Contact from './components/Contact';
import Projects from './components/Projects'; 
import './styles.css';  

const App = () => (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/classes" element={<Classes />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
);

export default App;
