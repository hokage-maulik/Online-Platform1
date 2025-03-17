// import React from 'react'

// export default function Signup() {
//   return (
//     <div>Signup</div>
//   )
// }

import React, { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handelchange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const Handelsubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post('https://online-platform-backend.onrender.com/user/signup', state);
      alert('Signup successful!');
      setState({ username: '', email: '', password: '' });
    } catch (error) {
      console.log(error);
      alert('Error signing up. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h1 style={styles.heading}>Sign Up</h1>
        <form onSubmit={Handelsubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={state.username}
              onChange={handelchange}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={state.email}
              onChange={handelchange}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={state.password}
              onChange={handelchange}
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.submitButton}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  formContainer: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  },
  heading: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    fontSize: '14px',
    color: '#555',
    marginBottom: '5px',
  },
  input: {
    width: '100%',
    padding: '12px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.3s',
  },
  
  submitButton: {
    width: '100%',
    padding: '14px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  submitButtonHover: {
    backgroundColor: '#45a049',
  },
};
