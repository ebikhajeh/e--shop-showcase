const { Category } = require('./models'); // Adjust the path if needed

async function insertSampleCategories() {
  try {
    await Category.bulkCreate([
      {
        name: 'Electronics',
        description: 'Electronic devices and accessories.',
      },
      {
        name: 'Clothing',
        description: 'Clothing and fashion accessories.',
      },
      {
        name: 'Books',
        description: 'Books and reading materials.',
      },
      {
        name: 'Smartphones',
        description: 'Smartphones and mobile devices.',
        parentId: 1, // This associates "Smartphones" as a subcategory of "Electronics" (category with id 1)
      },
      {
        name: 'Laptops',
        description: 'Laptops and notebooks.',
        parentId: 1, // This associates "Laptops" as a subcategory of "Electronics" (category with id 1)
      },
      {
        name: 'Headphones',
        description: 'Headphones and audio accessories.',
        parentId: 1, // This associates "Headphones" as a subcategory of "Electronics" (category with id 1)
      },
      {
        name: "Men's Wear",
        description: "Men's clothing and fashion items.",
        parentId: 2, // This associates "Men's Wear" as a subcategory of "Clothing" (category with id 2)
      },
      {
        name: "Women's Wear",
        description: "Women's clothing and fashion items.",
        parentId: 2, // This associates "Women's Wear" as a subcategory of "Clothing" (category with id 2)
      },
      {
        name: 'Fiction',
        description: 'Fiction books and novels.',
        parentId: 3, // This associates "Fiction" as a subcategory of "Books" (category with id 3)
      },
      {
        name: 'Non-Fiction',
        description: 'Non-fiction books and educational.',
        parentId: 3, // This associates "Non-Fiction" as a subcategory of "Books" (category with id 3)
      },
    ]);

    console.log('Sample categories inserted successfully.');
  } catch (error) {
    console.error('Failed to insert sample categories:', error);
  }
}

// Call the function to insert the sample categories
insertSampleCategories();
