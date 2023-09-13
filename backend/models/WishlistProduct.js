const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const WishlistProduct = sequelize.define('WishlistProduct', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

module.exports = WishlistProduct;
