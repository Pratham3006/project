import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Judge from './judge'; // Capitalize component names
import Lawyer from './lawyer'; // Capitalize component names
import Admin from './Admin';
import Home from './home';
import LawyerUi from './LawyerUi';
import Faq from './Faq';
import Faq2 from './Faq2';
function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lawyer" element={<Lawyer />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path='/judge' element={<Judge/>} />
          <Route path='/lawyerLogin' element={<LawyerUi />} />
          <Route path="/faq's" element={<Faq />} />
          <Route path="/faq's/govern" element={<Faq2 />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
