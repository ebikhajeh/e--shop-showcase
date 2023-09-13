// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    allowNull: false,
    defaultValue: 'user',
  },
  addressId: { // New column for the foreign key
    type: DataTypes.INTEGER,
    allowNull: true, // Set to true if users can have optional addresses
  },
  wishlistId: { // New column for the foreign key
    type: DataTypes.INTEGER,
    allowNull: true, // Set to true if users can have optional wishlist
  },
});

module.exports = User;
