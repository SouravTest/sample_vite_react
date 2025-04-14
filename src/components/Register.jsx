import React, { useState } from 'react';
import axios from 'axios';
import {Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneno: '',
    password: '',
    user_type: 1
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
      const res = await axios.post('localhost:8000/api/auth/signup', formData);
      setMessage('✅ Registration successful!');
      console.log(res.data);
    } catch (error) {
      setMessage('❌ Registration failed. Please try again.');
      console.error(error);
    }
  };

  return (
    <div className="container mt-3 card p-3 bg-light" style={{ maxWidth: '500px' }}>
      <h2 className="mb-4 text-center">Register</h2>

      {message && <div className="alert alert-info text-center">{message}</div>}

      <form onSubmit={handleSubmit} className="">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control form-control-sm"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control form-control-sm"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Phone No</label>
          <input
            type="text"
            name="phoneno"
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
            className="form-control"
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">User Type</label>
          <select
            name="user_type"
            className="form-select"
            onChange={handleChange}
            value={formData.user_type}
          >
            <option value={1}>User</option>
            <option value={2}>Admin</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success w-100">Register</button>
      </form>
      <p className='mt-4'>Alreday Register ? <Link to="/login"> Login </Link> </p>
    </div>
  );
};

export default Register;
