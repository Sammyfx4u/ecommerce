import React from 'react';
import Navbar from '../components/Navbar';
import Account from '../components/Account';
import Footer from '../components/Footer';

function AccountPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Account />
      <Footer />
    </div>
  );
}

export default AccountPage;