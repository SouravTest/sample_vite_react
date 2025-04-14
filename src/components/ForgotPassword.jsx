import React, { useState } from 'react';
import axios from 'axios';
import {Link } from "react-router-dom";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    emailPhone: '',
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
      const res = await axios.post('localhost:8000/api/auth/forgot', formData);
      setMessage('✅Reset Link successful!');
      console.log('User:', res.data); // you can store token or user data here
    } catch (error) {
      setMessage('❌ Failed. Email not matched.');
      console.error(error);
    }
  };

  return (
    <div className="container mt-5 card p-3 bg-light" style={{ maxWidth: '500px' }}>
      <h2 className="mb-3 text-center">ForgotPassword</h2>

      {message && <div className="alert alert-info text-center">{message}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            name="email"
            className="form-control form-control-sm"
            onChange={handleChange}
            required
          />
        </div>


        <button type="submit" className="btn btn-success w-100">Login</button>
      </form>
      <p className='mt-4'>Back to ? <Link to="/login"> Login </Link> </p>
    </div>
  );
};

export default ForgotPassword;
