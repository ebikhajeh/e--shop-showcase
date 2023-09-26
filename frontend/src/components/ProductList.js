// frontend/src/components/ProductList.js
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


// Sample product data (you can replace this with actual data from your API)
// const sampleProducts = [
//   {
//     "id": 1,
//     "name": "Product 1",
//     "price": 19.99,
//     "imageUrl": "product1.jpg",
//     "description": "Description for Product 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//     "category": "Electronics",
//     "brand": "Brand X",
//     "rating": 4.5,
//     "numReviews": 250,
//     "stock": 50
//   },
//   {
//     "id": 2,
//     "name": "Product 2",
//     "price": 29.99,
//     "imageUrl": "product2.jpg",
//     "description": "Description for Product 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//     "category": "Clothing",
//     "brand": "Fashion Brand",
//     "rating": 4.0,
//     "numReviews": 150,
//     "stock": 30
//   },
//   {
//     "id": 3,
//     "name": "Product 3",
//     "price": 9.99,
//     "imageUrl": "product3.jpg",
//     "description": "Description for Product 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//     "category": "Home & Garden",
//     "brand": "Home Essentials",
//     "rating": 4.7,
//     "numReviews": 300,
//     "stock": 80
//   }
// ];

  

const ProductList = () => {


  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make a GET request to your API endpoint
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data (list of products) here
        setProducts(data);
      })
      .catch((error) => console.error('Error fetching product list:', error));
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">Featured Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-3" key={product.id}>
            <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
              <div className="card">
                <img src={product.image} className="card-img-top"  style={{ height: '300px' }} alt={product.image} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: ${product.price}</p>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">stock_quantity: {product.stock_quantity}</p>
                  <p className="card-text">Brand: {product.brand}</p>
                  <p className="card-text">Rating: {product.rating}</p>
                  <p className="card-text">Reviews: {product.numReviews}</p>
                  <p className="card-text">Stock: {product.stock}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
