const { Review } = require('./models');

async function insertSampleReview() {
  try {
    await Review.bulkCreate([
      {
        userId: 1,
        productId: 1,
        rating: 4.5,
        comment: 'Great product!',
      },
      {
        userId: 1,
        productId: 2,
        rating: 5.0,
        comment: 'Excellent quality and fast delivery.',
      },
      {
        userId: 2,
        productId: 1,
        rating: 3.8,
        comment: 'Good value for money.',
      },
      {
        userId: 3,
        productId: 3,
        rating: 4.2,
        comment: 'Comfortable and stylish.',
      },
      {
        userId: 2,
        productId: 4,
        rating: 4.0,
        comment: 'Nice design, but a bit expensive.',
      },
      {
        userId: 3,
        productId: 2,
        rating: 4.7,
        comment: 'Impressive performance!',
      },
      {
        userId: 1,
        productId: 5,
        rating: 4.5,
        comment: 'Very satisfied with the purchase.',
      },
      {
        userId: 2,
        productId: 3,
        rating: 4.3,
        comment: 'Noise cancellation works well.',
      },
      {
        userId: 3,
        productId: 4,
        rating: 3.5,
        comment: 'Average product, nothing special.',
      },
      {
        userId: 3,
        productId: 5,
        rating: 4.0,
        comment: 'Decent quality for the price.',
      },
    ]);
    console.log('Sample reviews inserted successfully.');
  } catch (error) {
    console.error('Error inserting sample reviews:', error);
  }
}

insertSampleReview();
