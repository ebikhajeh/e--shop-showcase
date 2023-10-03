import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Access the "id" parameter from the URL
  const [product, setProduct] = useState({});

  // useEffect(() => {
   
  //   const sampleProduct = {
  //     id,
  //     name: 'Sample Product',
  //     price: 29.99,
  //     imageUrl: '/images/camera.jpg',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et justo sit amet urna lacinia tincidunt.'
  //   };
  //   setProduct(sampleProduct);
  // }, [id]);


  useEffect(() => {
    // Fetch product details based on the "id" extracted from the URL
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product details:', error));
  }, [id]); // Include "id" in the dependency array to re-fetch data when it changes

  return (
    <div className=' container mt-3'>
      <h2>{product.name}</h2>
     
      <br /> {/* Add a line break */}
      <img src={product.image} style={{height: '300px'}} alt={product.image} />
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      {/* Add more product details as needed */}

      <Link to="/products">Back to Product List</Link>
    </div>
  );
};

export default ProductDetails;
