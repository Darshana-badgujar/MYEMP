


import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const register = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/employees/register", user);
      alert("🎉 Registered Successfully!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Registration failed: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        // background: "linear-gradient(to right, #6a11cb, #2575fc)",
      }}
    >
      <div className="card shadow-lg p-4" style={{ width: "100%", maxWidth: "400px", borderRadius: "15px" }}>
        <h3 className="text-center mb-4 text-primary fw-bold">Create Account</h3>
        <form onSubmit={register}>
          <div className="mb-3">
            <label className="form-label text-muted">Full Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-muted">Email Address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-muted">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Choose a strong password"
              onChange={handleChange}
              required
            />
          </div>
            {/* DIV CLASS - for button   boot used*/}
          <div className="d-grid">
            <button className="btn btn-success fw-semibold shadow-sm" type="submit">
              Register Now 🚀
            </button>
          </div>
        </form>
        <p className="mt-3 mb-0 text-center text-blue">
          Already have an account? ➡️{" "}
        
          <a href="/login" className="text-warning text-decoration-none">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
