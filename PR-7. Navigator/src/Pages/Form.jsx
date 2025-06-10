import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Form = () => {
  const navigate = useNavigate();

  const [forminput, setFormInput] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    courses: [],
    city: '',
    dateOfjoin: '',
  });

  const [allrecord, setAllRecord] = useState(JSON.parse(localStorage.getItem('users')) || []);

  const changeInput = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormInput({ ...forminput, courses: [...forminput.courses, value] });
      } else {
        setFormInput({ ...forminput, courses: forminput.courses.filter((val) => val !== value) });
      }
    } else {
      setFormInput({ ...forminput, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = { id: Date.now(), ...forminput };
    const updatedRecord = [...allrecord, obj];
    localStorage.setItem('users', JSON.stringify(updatedRecord));
    setAllRecord(updatedRecord);
    alert('Record added');
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Add New User</h2>
          <form onSubmit={handleSubmit}>
            <div className="card p-3">
              <input type="text" className="form-control mb-3" name="name" placeholder="Enter name" onChange={changeInput} required />
              <input type="email" className="form-control mb-3" name="email" placeholder="Enter Email" onChange={changeInput} required />
              <input type="password" className="form-control mb-3" name="password" placeholder="Enter Password" onChange={changeInput} required />

              <div className="mb-3">
                <label className="form-label">Gender:</label><br />
                <input type="radio" name="gender" value="male" onChange={changeInput} /> Male
                <input type="radio" className="ms-3" name="gender" value="female" onChange={changeInput} /> Female
              </div>

              <div className="mb-3">
                <label className="form-label">Courses:</label><br />
                {['webdesign', 'c', 'c++', 'python'].map((course) => (
                  <div className="form-check form-check-inline" key={course}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="courses"
                      value={course}
                      onChange={changeInput}
                    />
                    <label className="form-check-label">{course}</label>
                  </div>
                ))}
              </div>

              <select name="city" className="form-select mb-3" onChange={changeInput} required>
                <option value="">Select City</option>
                <option value="surat">Surat</option>
                <option value="vadodara">Vadodara</option>
                <option value="rajkot">Rajkot</option>
                <option value="vapi">Vapi</option>
              </select>

              <input type="date" className="form-control mb-3" name="dateOfjoin" onChange={changeInput} required />
              <button type="submit" className="btn btn-primary w-100">Add User</button>
            </div>
          </form>

          <div className="text-center mt-3">
            <Link to="/" className="btn btn-secondary">View All Users</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;