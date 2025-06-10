import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Edit = () => {
  const navigate = useNavigate();
  const { editId } = useParams();

  const [forminput, setFormInput] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    gender: '',
    courses: [],
    city: '',
    dateOfjoin: '',
  });

  const [allRecord, setAllRecord] = useState(JSON.parse(localStorage.getItem('users')) || []);

  useEffect(() => {
    const single = allRecord.find(val => val.id === Number(editId));
    if (single) {
      setFormInput(single);
    }
  }, [editId, allRecord]);

  const changeInput = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (checked) {
        setFormInput(prev => ({
          ...prev,
          courses: [...prev.courses, value]
        }));
      } else {
        setFormInput(prev => ({
          ...prev,
          courses: prev.courses.filter(course => course !== value)
        }));
      }
    } else {
      setFormInput(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updated = allRecord.map(val =>
      val.id === Number(editId) ? forminput : val
    );

    localStorage.setItem("users", JSON.stringify(updated));
    setAllRecord(updated);
    alert("Record updated!");
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="text-center mb-4">Edit User</h2>

          <form onSubmit={handleSubmit}>
            <div className="card p-4">

              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={changeInput}
                  value={forminput.name}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={changeInput}
                  value={forminput.email}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={changeInput}
                  value={forminput.password}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label d-block">Gender:</label>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="male"
                    checked={forminput.gender === "male"}
                    onChange={changeInput}
                    className="form-check-input"
                  />
                  <label htmlFor="male" className="form-check-label">Male</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="female"
                    checked={forminput.gender === "female"}
                    onChange={changeInput}
                    className="form-check-input"
                  />
                  <label htmlFor="female" className="form-check-label">Female</label>
                </div>
              </div>

              <div className="mb-3">
                <label className="form-label d-block">Courses:</label>
                {["webdesign", "c", "c++", "python"].map(course => (
                  <div key={course} className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      id={course}
                      name="courses"
                      value={course}
                      checked={forminput.courses.includes(course)}
                      onChange={changeInput}
                      className="form-check-input"
                    />
                    <label htmlFor={course} className="form-check-label text-capitalize">{course}</label>
                  </div>
                ))}
              </div>

              <div className="mb-3">
                <label htmlFor="city" className="form-label">City:</label>
                <select
                  className="form-select"
                  name="city"
                  onChange={changeInput}
                  value={forminput.city}
                >
                  <option value="">Select City</option>
                  <option value="surat">Surat</option>
                  <option value="vadodara">Vadodara</option>
                  <option value="rajkot">Rajkot</option>
                  <option value="vapi">Vapi</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="dateOfjoin" className="form-label">Date of Join:</label>
                <input
                  type="date"
                  className="form-control"
                  name="dateOfjoin"
                  value={forminput.dateOfjoin}
                  onChange={changeInput}
                />
              </div>

              <button type="submit" className="btn btn-success w-100">Update User</button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
