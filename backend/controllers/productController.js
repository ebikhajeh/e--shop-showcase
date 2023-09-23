const productService = require('../services/productService');

// Controller to get all products via API
async function getAllProducts(req, res) {
  try {
    // Assuming you have a productService function to get all products
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products.' });
  }
}

// Controller to get a specific product via API
async function getProductById(req, res) {
  try {
    const productId = req.params.id; // Extract the product ID from the request parameters

    // Assuming you have a productService function to get a product by ID
    const product = await productService.getProductById(productId);

    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }

    res.json(product);

  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch the product.' });
  }
}

// Controller to get the list of categories via API
async function getCategoriesForDropdown(req, res) {
  try {
    const categories = await productService.getCategoriesForDropdown();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch categories.' });
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////

// Controller to render the product detail page
async function renderProductDetailPage(req, res) {
  const productId = req.params.id;

  try {
    // Assuming you have a productService function to get product details by ID
    const product = await productService.getProductById(productId);
    if (!product) {
      return res.render('product', { error: 'Product not found.' });
    }

    // Call the getAllReviews service to get all reviews for the product
    const reviews = await productService.getReviewsByProductId(productId);

    res.render('productDetail', { product , reviews });
  } catch (error) {
    res.render('product', { error: 'Failed to fetch product details.' });
  }
}

// Controller to filter products by category
async function filterProductsByCategory(req, res) {
  const categoryId = req.params.categoryId;

  try {
    // Assuming you have a productService function to get products by category ID
    const products = await productService.getProductsByCategory(categoryId);
    if (!products || products.length === 0) {
      return res.render('products', { error: 'No products found for this category.' });
    }

    res.render('products', { products });
  } catch (error) {
    res.render('products', { error: 'Failed to fetch products for this category.' });
  }
}



module.exports = {
  getAllProducts,
  getProductById,
  renderProductDetailPage,
  filterProductsByCategory,
  getCategoriesForDropdown,
};
