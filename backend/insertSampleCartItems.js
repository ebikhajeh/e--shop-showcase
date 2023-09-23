const { Cart } = require('./models'); // Adjust the path if needed

async function insertSampleCartItems() {
  try {
    await Cart.bulkCreate([
      {
        userId: 1, // Replace with the appropriate user ID
        productId: 1, // Replace with the appropriate product ID
        quantity: 2,
      },
      {
        userId: 1,
        productId: 2,
        quantity: 3,
      },
      {
        userId: 2,
        productId: 3,
        quantity: 1,
      },
    ]);
    console.log('Sample cart items inserted successfully.');
  } catch (error) {
    console.error('Failed to insert sample cart items:', error);
  }
}

// Call the function to insert the sample cart items
insertSampleCartItems();
