const { Product } = require('./models'); // Adjust the path if needed

async function insertSampleProducts() {
  try {
    await Product.bulkCreate([
      {
        name: 'Smartphone',
        description: 'A high-end smartphone with advanced features.',
        price: 799.99,
        stock_quantity: 50,
        image: '/images/smartphone.jpg', // Replace with the actual image file name
        categoryId: 1,
      },
      {
        name: 'Laptop',
        description: 'A powerful laptop for work and gaming.',
        price: 1299.99,
        stock_quantity: 30,
        image: '/images/laptop.jpg', // Replace with the actual image file name
        categoryId: 1,
      },
      {
        name: 'Headphones',
        description: 'High-quality wireless headphones with noise cancellation.',
        price: 149.99,
        stock_quantity: 100,
        image: '/images/headphones.jpg', // Replace with the actual image file name
        categoryId: 1,
      },
      {
        name: 'Tablet',
        description: 'A versatile tablet for productivity and entertainment.',
        price: 449.99,
        stock_quantity: 20,
        image: '/images/tablet.jpg', // Replace with the actual image file name
        categoryId: 1,
      },
      {
        name: 'Smartwatch',
        description: 'A stylish smartwatch with health and fitness tracking.',
        price: 199.99,
        stock_quantity: 80,
        image: '/images/smartwatch.jpg', // Replace with the actual image file name
        categoryId: 1,
      },
      {
        name: 'Gaming Console',
        description: 'The latest gaming console for immersive gaming experiences.',
        price: 399.99,
        stock_quantity: 15,
        image: '/images/console.jpg', // Replace with the actual image file name
        categoryId: 1,
      },
      {
        name: 'T-Shirt',
        description: 'Comfortable and stylish t-shirt for everyday wear.',
        price: 29.99,
        stock_quantity: 200,
        image: '/images/tshirt.jpg', // Replace with the actual image file name
        categoryId: 2,
      },
      {
        name: 'Jeans',
        description: 'Classic jeans for a timeless look.',
        price: 79.99,
        stock_quantity: 100,
        image: '/images/jeans.jpg', // Replace with the actual image file name
        categoryId: 2,
      },
      {
        name: 'Sneakers',
        description: 'Sporty sneakers for active lifestyles.',
        price: 89.99,
        stock_quantity: 150,
        image: '/images/sneakers.jpg', // Replace with the actual image file name
        categoryId: 2,
      },
      {
        name: 'Fantasy Novel',
        description: 'An epic fantasy novel that takes you on a magical journey.',
        price: 24.99,
        stock_quantity: 50,
        image: '/images/novel.jpg', // Replace with the actual image file name
        categoryId: 3,
      },
    ]);
    console.log('Sample products inserted successfully.');
  } catch (error) {
    console.error('Failed to insert sample products:', error);
  }
}

// Call the function to insert the sample products
insertSampleProducts();
