import React from 'react';
import Navbar from '../components/Navbar';
import Category from '../components/Category';
import Footer from '../components/Footer';


function CategoryPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Category />
      <Footer />
    </div>
  );
}

export default CategoryPage;