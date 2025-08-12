import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
import CategoryPage from './pages/CategoryPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/category" element={<CategoryPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
