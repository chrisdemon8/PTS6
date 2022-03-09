import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FolderPage from './pages/FolderPage';
import ClientPage from './pages/ClientPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div> 
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/accueil' element={<HomePage />} />
          <Route path='/clients' element={<ClientPage />} />
          <Route path='/dossiers' element={<FolderPage />} /> 
          <Route path='*' element={<NotFoundPage  />} />
        </Routes >
      </div>
    </Router>
  );
}

export default App;
