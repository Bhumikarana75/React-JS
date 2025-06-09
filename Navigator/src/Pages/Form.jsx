import React, { useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const Form = () => {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [allRecord, setAllRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [])

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id: Math.floor(Math.random() * 10000),
      name: name,
      phone: phone,
      status: "active"
    }

    const newRecord = [...allRecord, obj];
    localStorage.setItem("users", JSON.stringify(newRecord));
    alert("Record added..!");
    navigate('/');
  }

  return (

    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Add New User</h2>

          <form onSubmit={handleSubmit}>
            <div className="card mb-3">
              <div className="card-body">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  id="name"
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />

                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control mb-3"
                  id="phone"
                  placeholder="Enter phone number"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />

                <button type="submit" className="btn btn-primary w-100">Add User</button>
              </div>

            </div>

          </form>

          <div className="text-center mt-3">
            <Link to="/" className="btn btn-secondary">View All Users</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form;