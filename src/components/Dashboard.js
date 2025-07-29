

import React from "react";

function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4 rounded-4" style={{ width: "28rem", background: "#f8f9fa" }}>
        <div className="card-body text-center">
          <h2 className="card-title mb-4">👋 Welcome, {user?.name}!</h2>
          <hr />
          <p className="card-text fs-5"><strong>Email:</strong> {user?.email}</p>
          <p className="text-muted">You are logged in to the Employee Management System.</p>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" 
            alt="User avatar"
            className="img-fluid mt-3"
            style={{ width: "100px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
