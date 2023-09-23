const userService = require('../services/userService');
const productService = require('../services/productService');
const bcrypt = require('bcrypt');


// Controller to handle user registration
async function registerUser(req, res) {
  const { username, email, password } = req.body;

  try {
    // Call the service function to register the user
    const result = await userService.registerUser(username, email, password);

    //console.log(result);

    if (result.error === 'User with this email already exists') {
      // User with the same email already exists
      return res.status(409).json({ error: result.error });
    }

    // You can send a success response if needed
    res.status(201).json({ message: 'User registration successful.' });
  } catch (error) {
    // Handle registration error
    res.status(500).json({ error: 'Failed to register. Please try again.' });
  }
}


// Controller to handle user login
async function userLogin(req, res) {
  const { email, password } = req.body;

  try {
    const user = await userService.getUserByEmail(email);

    if (!user) {
      return res.status(409).json({ error: 'Invalid email or password.' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(409).json({ error: 'Invalid email or password..' });
    }

    //const address = await userService.getAddressByUserId(user.id);

    //req.session.userId = user.id;
    //req.session.email = user.email;

     // Store user data in the session
     req.session.user = user;

     console.log(req.session.user);

    // You can send a success response if needed
    res.status(200).json({ message: 'User login successful.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to login. Please try again.' });
  }
}


// Controller function for checking the user's session
async function userSession(req, res) {
  try {
    if (req.session.user) {
      // User is authenticated, send user data
      console.log(req.session.user);
      res.status(200).json({ user: req.session.user });
    } else {
      console.log(req.session.user);
      // User is not authenticated
      res.status(401).json({ message: 'Not authenticated' });
    }
  } catch (error) {
    console.error('Error checking session:', error);
    res.status(500).json({ error: 'Failed to check session' });
  }
}



///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////


// Controller to render the user registration page
function renderUserRegistrationPage(req, res) {
  res.render('register');
}

// Controller to render
async function renderUserEditProfile(req, res) {
   try {
    if (!req.session.userId) {
      return res.redirect('/user/login');
    }
    const userId = req.session.userId;
    const user = await userService.getUserById(userId);
    const address = await userService.getAddressByUserId(userId);
 

    res.render('editProfile', { user , address });
  } catch (error) {
    res.render('profile', { error: 'Failed to login. Please try again.' });
  }
  
}

// Controller to render the user login page
function renderUserLoginPage(req, res) {
  res.render('login');
}






// Controller to handle user logout
function userLogout(req, res) {
  req.session.destroy((err) => {
    if (err) {
      console.error('Error destroying session:', err);
    }
    res.redirect('/user/login');
  });
}

// Controller to render the user profile page
async function renderUserProfilePage(req, res) {
  try {
    if (!req.session.userId) {
      return res.redirect('/user/login');
    }
    const userId = req.session.userId;
    // Assuming you have a userService function to get user details by ID
    const user = await userService.getUserById(userId);
    const address = await userService.getAddressByUserId(userId);

    //const categories = await productService.getCategoriesForDropdown();
    //res.render('layouts/main', { categories });
    res.render('profile', { user , address });
  } catch (error) {
    //res.render('profile', { error: 'Failed to fetch user details.' });
    res.redirect('/user/login');

  }
}

// Controller to update user profile
async function updateUserProfile(req, res) {
  const userId = req.session.userId;
  const { username, streetAddress, city, state, postalCode, country } = req.body;

  try {
    // Assuming you have a userService function to update user details
    await userService.updateUserProfile(userId, { username, streetAddress, city, state, postalCode, country });
    res.redirect('/user/Profile');
  } catch (error) {
    res.render('profile', { error: 'Failed to update user profile.' });
  }
}

module.exports = {
  registerUser,
  renderUserRegistrationPage,
  renderUserLoginPage,
  userLogin,
  userLogout,
  renderUserProfilePage,
  updateUserProfile,
  renderUserEditProfile,
  userSession,
};
