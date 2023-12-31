// frontend/src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Profile from './components/Profile';
import ProductDetails from './components/ProductDetails';







const AppRouter = () => {

  // Define the navigate function
  const navigateTo = (path) => {
    window.location.href = path; // This is a simple way to navigate
  };

  return (
    <Router>
      <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/signup" element={<SignUp onSuccessRegistration={() => navigateTo ('/Login')}/>} />
      <Route path="/login" element={<Login onLogin={() => navigateTo ('/Profile')}/>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/products/:id" element={<ProductDetails />} />



        
      </Routes>
    </Router>
  );
};

export default AppRouter;
