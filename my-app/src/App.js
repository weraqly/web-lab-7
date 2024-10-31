import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/header.jsx';
import Main_section from './components/main/main.jsx';
import Other_section from './components/other/other.jsx';
import Footer from './components/footer/footer.jsx';
import Catalog from './components/catalog/catalog.jsx';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Main_section />
            <Other_section />
          </>
        } />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
