import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AccountPage from './pages/Accountpage';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
         <Route path="/account" element={<AccountPage />} />
         <Route path="/category" element={<CategoryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
