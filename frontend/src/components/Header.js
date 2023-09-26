import React, { useState, useEffect } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaUserPlus } from 'react-icons/fa'; // Importing icons
import logo from './logo.png';
import axios from 'axios';

function Header() {



  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');





  useEffect(() => {
    // Fetch categories from your backend API when the component mounts
    fetch('http://localhost:5000/api/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);


  const handleSearch = () => {
    // Add your search and filter logic here
    console.log('Selected Category:', selectedCategory);
    console.log('Search Term:', searchTerm);
    // Perform your search or filter action here
  };





  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">

       {/* Logo */}
       <a className="navbar-brand" href="/">
          <img src={logo} alt="Your Logo" width="50" height="50" /> {/* Adjust width and height as needed */}
       </a>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/shop">Shop</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>
    


        {/* <div className='ml-auto'>
          <p>Temperature: {temperature} °C</p>
          <p>Weather: {description}</p>
        </div> */}



        {/* Search Bar */}
      
        <div className="input-group">
          
              {/* Left Side: Dropdown List */}
            <div className="col-lg-3">
            <select
              className="form-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
            </div>

          {/* Middle: Search Input */}

          <div className="col-lg-7">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
                

          {/* Right Side: Search Button (Icon) */}
          <div className='col-lg-2'>
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>  


        {/* User Account Links */}
        <ul className="navbar-nav col-lg-3">
          <li className="nav-item">
            <a className="nav-link" href="/login">
              <FaUser /> Log In
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/signup">
            <FaUserPlus /> Sign Up
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/cart">
              <FaShoppingCart /> Cart
            </a>
          </li>
        </ul>
        
        {/* Contact Information */}
        {/* <div className="navbar-text">
          <span>Contact: contact@example.com</span>
        </div> */}

        {/* CTA Buttons */}
        {/* <div className="navbar-nav ml-auto">
          <button className="btn btn-primary">Get Started</button>
          <button className="btn btn-secondary">Subscribe</button>
        </div> */}
      </div>
    </nav>
  );
}

export default Header;
