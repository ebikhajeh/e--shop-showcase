import React, { useState } from 'react';

function Login({ onLogin }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
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

    // Send a POST request to your backend API for user login
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      //console.log(data);

      if (response.status === 200) {
        // Login was successful
        console.log('Login successful.');

        // Call the callback function to handle successful login
        onLogin();
      } else if (response.status === 401) {
        // Authentication failed
        console.error('Authentication failed.');

        // Set the backendError state with the error message
        setBackendError(data.error);
      } else {
        // Handle other login errors
        console.error('Login failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: '',
      password: '',
    };

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
      <div className="card col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-offset-10 col-xs-offset-1 mx-auto">
        <div className="card-header text-center">
          <h2>Login</h2>
        </div>
        <div className="card-body">
          <div className="row justify-content-center">
            {/* Center Column */}
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
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
                </div>
                <div className="text-center"> {/* Center the button */}
                  <button type="submit" className="btn btn-primary">Login</button>
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

export default Login;
