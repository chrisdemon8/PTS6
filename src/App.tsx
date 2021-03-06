import React from 'react'; 
import './App.css'; 
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 
import HomePage from './pages/HomePage';
import FolderPage from './pages/FolderPage';
import ClientPage from './pages/ClientPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './layout/Layout';
import ClientDetailPage from './pages/ClientDetail';
import FolderDetailPage from './pages/FolderDetailPage';

function App() {
  return (
    <Router>
      <div className='pages'>
        <Layout>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/accueil' element={<HomePage />} />
            <Route path='/clients' element={<ClientPage />} />
            <Route path='/clients/:id' element={<ClientDetailPage />} />
            <Route path='/dossiers/:id' element={<FolderDetailPage />} />
            <Route path='/dossiers' element={<FolderPage />} />
            <Route path='/dossiers/en-cours' element={<FolderPage />} />
            <Route path='/dossiers/cloturees' element={<FolderPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes >
        </Layout>
      </div>
    </Router>
  );
}

export default App;
