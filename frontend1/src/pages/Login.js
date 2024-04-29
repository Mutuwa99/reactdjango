import React, { useState } from 'react';
import './Login.css';
import $ from 'jquery'; // Import jQuery
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { showToast } from './toast';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = (e) => {
    e.preventDefault();

    // AJAX request using jQuery
    $.ajax({
      url: 'https://noble-mutuwa.com:8000/api/v1/auth/login',
      method: 'POST',
      contentType: 'application/json',    
      data: JSON.stringify({ username, password }),
      success: function(data) {
   
        if (data.success) {
          // Navigate to the dashboard route and pass user data and other data as state
          navigate('/dashboard', { 
            state: { 
              userData: data
            } 
          });
        } else {
          // Login failed
          console.error('Login failed:', data.error);
        
        }
      },
      error: function(xhr, status, error) {
        // Handle errors
        console.error('Error logging in:', error);
      }
    });
  };

  return (
    <div className="ring">
      <i style={{ '--clr': '#00ff0a' }}></i>
      <i style={{ '--clr': '#ff0057' }}></i>
      <i style={{ '--clr': '#fffd44' }}></i>
      <div className="login">
        <h2>Mutuwa's</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputBx">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="inputBx">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="inputBx">
            <input type="submit" value="Sign in" />
          </div>
        </form>
        <div className="links">
          <a href="#">Forget Password</a>
          <a href="#">Signup</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
