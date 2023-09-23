const { User, Address } = require('../models');
const bcrypt = require('bcrypt');

// Function to register a new user
async function registerUser(username, email, password) {
  try {

    //console.log(email);
     // Check if a user with the same email already exists
     const existingUser = await User.findOne({ where: { email } });


     if (existingUser) {
       // User with the same email already exists
       return { error: 'User with this email already exists' };
     }

    // Assuming you have a function to hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    return newUser;
  } catch (error) {
    throw error; // Handle errors in the controller
  }
}

// Function to get user details by email
async function getUserByEmail(email) {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  return user;
}

// Function to get user details by ID
async function getUserById(userId) {
  const user = await User.findByPk(userId);

  return user;
}

// Function to get user Address by ID
async function getAddressByUserId(userId) {
  const address = await Address.findByPk(userId);

  return address;
}

// Function to update user profile
async function updateUserProfile(userId, updatedData) {
  try {
    const { username, streetAddress, city, state, postalCode, country } = updatedData;

    // Find or create an address associated with the user
    let address = await Address.findOne({
      where: {
        userId,
      },
    });

    if (!address) {
      address = await Address.create({
        userId,
        streetAddress,
        city,
        state,
        postalCode,
        country,
      });
      
    } else {
      // Update the user's address data
      await Address.update(
        { streetAddress, city, state, postalCode, country },
        {
          where: {
            id: address.id,
          },
        }
      );
    }

   // Find the user by userId
   const user = await User.findByPk(userId);

   if (!user) {
     throw new Error('User not found.');
   }

   // Update the user's profile with the provided data using the model's `update()` method
   await user.update({
     username,
     addressId: address.id, // Update the addressId in the User model
   });

    return user,address;
  } catch (error) {
    throw new Error('Failed to update user profile.');
  }
}


module.exports = {
  registerUser,
  getUserByEmail,
  getUserById,
  updateUserProfile,
  getAddressByUserId,
};
