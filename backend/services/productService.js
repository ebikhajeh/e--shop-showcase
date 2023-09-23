const { Product } = require('../models');
const { Category } = require('../models');
const { Review } = require('../models');
const { User } = require('../models');

// Function to get all products
async function getAllProducts() {
  const products = await Product.findAll();
  return products;
}

// Function to get a specific product by ID
async function getProductById(productId) {
  const product = await Product.findByPk(productId);
  return product;
}
/////////////////////////////////////////////////////////////////////////////




// // Function to get all reviews with associated user information
// async function getAllReviews() {
//   const reviews = await Review.findAll({
//     include: {
//       model: User,
//       as: 'user', // Make sure this matches the alias defined in the Review model
//       attributes: ['email'], // Include only the 'email' attribute of the user
//     },
//   });
//   return reviews;
// }


async function getReviewsByProductId(productId) {
  try {
    const reviews = await Review.findAll({
      where: {
        productId: productId,
      },
      include: {
              model: User,
              as: 'user', // Make sure this matches the alias defined in the Review model
              attributes: ['email'], // Include only the 'email' attribute of the user
            },
    });
    return reviews;
  } catch (error) {
    throw new Error('Failed to get reviews by productId.');
  }
}

// Function to get product details by ID
// async function getProductById(productId) {
//   const product = await Product.findByPk(productId);
//   return product;
// }

// Function to get products by category ID
async function getProductsByCategory(categoryId) {
  const products = await Product.findAll({
    where: {
      categoryId,
    },
  });
  return products;
}

// Service to get products by their IDs
async function getProductsByIds(productIds) {
  try {
    // Retrieve products by their IDs
    const products = await Product.findAll({
      where: { id: productIds },
    });

    return products;
  } catch (error) {
    throw error;
  }
}


// Function to get all categories
async function getCategoriesForDropdown() {
  const categories = await Category.findAll();
  return categories;
}


module.exports = {
  getAllProducts,
  getProductById,
  getProductsByCategory,
  getCategoriesForDropdown,
  getReviewsByProductId,
  getProductsByIds,
};
