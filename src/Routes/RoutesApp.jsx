import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import MyJob from  '../pages/MyJob'
import {UseButtonStyle} from "../theme/ThemeContext"


function RoutesApp() {
    const { theme } = UseButtonStyle();
  return (
    <section className={`App ${theme}`}>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my_job" element={< MyJob />} />
      </Routes>
    </Router>
    </section>
  );
}

export default RoutesApp;