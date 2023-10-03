import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Make a GET request to check the session and retrieve data
    axios.get('http://localhost:5000/api/session', { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          // User is authenticated, set user data
          setUser(response.data.user.email);
        } else {
          // User is not authenticated, handle accordingly
        }
      })
      .catch((error) => {
        // Handle errors (e.g., network errors)
        console.error('Error checking session:', error);
      });
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.email}!</h1>
          {/* Display user data */}
        </div>
      ) : (
        <div>
          <h1>Not authenticated</h1>
          {/* Handle unauthenticated state */}
        </div>
      )}
    </div>
  );
};

export default Profile;
