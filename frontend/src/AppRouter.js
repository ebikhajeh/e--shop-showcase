// frontend/src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';





const AppRouter = () => {

  // Define the navigate function
  const navigateTo = (path) => {
    window.location.href = path; // This is a simple way to navigate
  };

  return (
    <Router>
      <Routes>
      <Route path="/" element={<ProductList />} />

        
      </Routes>
    </Router>
  );
};

export default AppRouter;
