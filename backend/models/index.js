const { Sequelize } = require('sequelize');
const sequelize = require('../config/database');

// Import the models
const User = require('./User');
const Product = require('./Product');
const Cart = require('./Cart');
const Order = require('./Order');
const Category = require('./Category');
const Review = require('./Review');
const Payment = require('./Payment');
const Address = require('./Address');
const Wishlist = require('./Wishlist');
const Coupon = require('./Coupon');
const CartProduct = require('./CartProduct');
const WishlistProduct = require('./WishlistProduct');

// Define associations

// Product and Category (Many-to-One)
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
Category.hasMany(Product, { foreignKey: 'categoryId' });



// User and Order (One-to-Many)
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

// User and Review (One-to-Many)
User.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(User, { foreignKey: 'userId' , as: 'user'});

// Product and Review (One-to-Many)
Product.hasMany(Review, { foreignKey: 'productId' });
Review.belongsTo(Product, { foreignKey: 'productId' });

// User and Payment (One-to-Many)
User.hasMany(Payment, { foreignKey: 'userId' });
Payment.belongsTo(User, { foreignKey: 'userId' });

// Order and Payment (One-to-One)
Order.hasOne(Payment, { foreignKey: 'orderId' });
Payment.belongsTo(Order, { foreignKey: 'orderId' });

// User and Address (One-to-Many)
User.hasOne(Address, { foreignKey: 'userId', as: 'address' });
Address.belongsTo(User, { foreignKey: 'userId' });

// User and Wishlist (One-to-Many)
User.hasMany(Wishlist, { foreignKey: 'userId' });
Wishlist.belongsTo(User, { foreignKey: 'userId' });

// Product and Wishlist (Many-to-Many)
// Many-to-many association between Wishlist and Product through WishlistProduct
Wishlist.belongsToMany(Product, { through: WishlistProduct, foreignKey: 'wishlistId', otherKey: 'productId' });
Product.belongsToMany(Wishlist, { through: WishlistProduct, foreignKey: 'productId', otherKey: 'wishlistId' });

// User and Coupon (One-to-Many)
User.hasMany(Coupon, { foreignKey: 'userId' });
Coupon.belongsTo(User, { foreignKey: 'userId' });

// Define the association for subcategories (child categories)
Category.hasMany(Category, { foreignKey: 'parentId', as: 'subcategories' });

// Define the association for the parent category
Category.belongsTo(Category, { foreignKey: 'parentId', as: 'parentCategory' });


// Define associations
Cart.belongsTo(User, { foreignKey: 'userId' });
Cart.belongsTo(Product, { foreignKey: 'productId' });




// User and Cart (One-to-Many)
// User.hasMany(Cart, { foreignKey: 'userId' });
// Cart.belongsTo(User, { foreignKey: 'userId' });

// Cart.belongsToMany(Product, { through: CartProduct, foreignKey: 'cartId' });



// Cart.belongsTo(User, { foreignKey: 'userId' });

// // Cart belongs to many Products
// Cart.belongsToMany(Product, { through: 'CartProduct', foreignKey: 'cartId', as: 'products' });
// Product.belongsToMany(Cart, { through: 'CartProduct', foreignKey: 'productId', as: 'carts' });

// // User and Product (Many-to-Many through Cart)
// User.belongsToMany(Product, { through: Cart, foreignKey: 'userId' });
// Product.belongsToMany(User, { through: Cart, foreignKey: 'productId' });



// Export the models
module.exports = {
  User,
  Product,
  Cart,
  Order,
  Category,
  Review,
  Payment,
  Address,
  Wishlist,
  Coupon,
  WishlistProduct,
  
};
