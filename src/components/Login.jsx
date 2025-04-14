import React, { useState } from 'react';
import axios from 'axios';
import {Link } from "react-router-dom";
import { toast } from 'react-toastify';

const Login = () => {
  const [formData, setFormData] = useState({
    emailPhone: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('localhost:8000/api/auth/signin', formData);
      setMessage('✅ Login successful!');
      console.log('User:', res.data); // you can store token or user data here
    } catch (error) {
      setMessage('❌ Login failed. Invalid credentials.');
      toast("❌ Login failed. Invalid credentials.");
      console.error(error);
    }
  };

  return (
    <div className="container mt-5 card p-3 bg-light" style={{ maxWidth: '500px' }}>
      <h2 className="mb-3 text-center">Login</h2>

      {message && <div className="alert alert-info text-center">{message}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email or Phone</label>
          <input
            type="text"
            name="emailPhone"
            className="form-control form-control-sm"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            name="password"
            className="form-control form-control-sm"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success w-100">Login</button>
      </form>
      <p className='mt-4'>New here ? <Link to="/register"> Register </Link> </p>
      <p className='mt-1'><Link to="/register"> Forgot password </Link> </p>
    </div>
  );
};

export default Login;
