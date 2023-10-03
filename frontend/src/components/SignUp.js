import React, { useState } from 'react';



function SignUp({ onSuccessRegistration }) {

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [backendError, setBackendError] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error message for the field when the user types
  setFormErrors({
    ...formErrors,
    [name]: '',
  });

  };


  const handleSubmit = async (e) => {
    e.preventDefault();


      // Validate the form
    if (!validateForm()) {
      // Validation failed, do not submit the form
      return;
    }

    // Send a POST request to your backend API for user registration
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 201) {
        // User registration was successful
        console.log('Registration successful.');

        // Redirect to the login page by calling the callback function
        onSuccessRegistration();

      } else if (response.status === 409) {
        // User with the same email already exists
        console.error('User already exists:', data.error);
        
        // Set the backendError state with the error message
        setBackendError(data.error);
        
      } else {
        // Handle registration error
        console.error('Registration failed.');
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      username: '',
      email: '',
      password: '',
    };
  
    if (formData.username.trim() === '') {
      newErrors.username = 'Username is required';
      isValid = false;
    }
  
    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      isValid = false;
    }
  
    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
      isValid = false;
    }
  
    setFormErrors(newErrors);
  
    return isValid;
  };
  

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header text-center">
          <h2>Sign Up</h2>
        </div>
        <div className="card-body">
          <div className="row">
            {/* Left Column */}
            <div className="col-md-6">
              <div className="message-box">
                <h4>Setup New Store</h4>
                <p>
                  You have reached a private website. To register a new store or complete an existing store registration click the button below.
                </p>
                <button className="btn btn-primary">Register Store</button>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                    {formErrors.username && <div className="text-danger">{formErrors.username}</div>}
                    {/* <div className="text-danger">{formErrors.username}</div> */}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                    {formErrors.email && <div className="text-danger">{formErrors.email}</div>}

                    {/* <div className="text-danger">{formErrors.email}</div> */}

                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                    {formErrors.password && <div className="text-danger">{formErrors.password}</div>}

                    {/* <div className="text-danger">{formErrors.password}</div> */}

                </div>
                <div className='text-center'>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
                {backendError && <div className="text-danger">{backendError}</div>}

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
