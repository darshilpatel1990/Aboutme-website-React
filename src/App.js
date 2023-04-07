import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FunfactsPage from './pages/FunfactsPage';
import SkillsPage from './pages/SkillsPage';
import ContactPage from './pages/ContactPage';
import FrontendDetails from './features/Homepageitems/FrontendDetails';
import BackendDetails from './features/Homepageitems/BackendDetails';
import WebdesignDetails from './features/Homepageitems/WebdesignDetails';
import MobileappDetails from './features/Homepageitems/MobileappDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='frontend-development' element={<FrontendDetails />} />
        <Route path='backend-development' element={<BackendDetails />} />
        <Route path='webdesign' element={<WebdesignDetails />} />
        <Route path='mobileapp-development' element={<MobileappDetails />} />
        <Route path='funfacts' element={<FunfactsPage />} />
        <Route path='skills' element={<SkillsPage />} />
        <Route path='contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
