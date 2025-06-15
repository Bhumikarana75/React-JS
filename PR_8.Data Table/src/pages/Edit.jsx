import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [date, setDate] = useState('');
  const [editId, setEditId] = useState("");

  const [allRecord, setAllRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []);

  useEffect(() => {
    if (location.state) {
      setName(location.state.name || '');
      setEmail(location.state.email || '');
      setGender(location.state.gender || '');
      setSelectedCourses(location.state.selectedCourses || []);
      setDate(location.state.date || '');
      setEditId(location.state.id || '');
    }
  }, [location.state]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecord = allRecord.map((val) => {
      if (val.id === editId) {
        return {
          ...val,
          name,
          email,
          gender,
          selectedCourses,
          date
        };
      }
      return val;
    });
    setAllRecord(updatedRecord);
    localStorage.setItem("users", JSON.stringify(updatedRecord));
    alert("Record updated!");
    navigate('/');
  };

  const handleCourseChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCourses((prevCourses) => [...prevCourses, value]);
    } else {
      setSelectedCourses((prevCourses) =>
        prevCourses.filter((course) => course !== value)
      );
    }
  };

  const isChecked = (course) => selectedCourses.includes(course);

  return (
    <div className="container my-4">

      <div className="card">
        <div className="card-header d-flex align-items-center justify-content-between">

          <h4>Edit User</h4>
          <div>
            <Link to={'/'} className="btn btn-success">View User</Link>
          </div>

        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input
                type="text"
                id="name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Gender: </label>
              <div className="form-check">
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  className="form-check-input"
                  onChange={(e) => setGender(e.target.value)}
                  value="male"
                  checked={gender === 'male'}
                />
                <label htmlFor="male" className="form-check-label">Male</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  className="form-check-input"
                  onChange={(e) => setGender(e.target.value)}
                  value="female"
                  checked={gender === 'female'}
                />
                <label htmlFor="female" className="form-check-label">Female</label>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Courses:</label>
              <div className="row">
                {
                  ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'PHP', 'React-js', 'Node-js', 'Laravel', 'Angular', 'Python'].map((course) => (
                    <div className="mb-2" key={course}>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          id={course}
                          className="form-check-input"
                          onChange={handleCourseChange}
                          value={course}
                          checked={isChecked(course)}
                        />
                        <label htmlFor={course} className="form-check-label">{course}</label>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="date" className="form-label">Date:</label>
              <input
                type="date"
                id="date"
                className="form-control"
                style={{ width: "300px" }}
                onChange={(e) => setDate(e.target.value)}
                value={date}
                required
              />
            </div>

            <div className="d-flex">
              <button type="submit" className="btn btn-primary me-3">Submit</button>
              <button type="reset" className="btn btn-secondary" onClick={() => navigate('/')}>Cancel</button>
            </div>
          </form>
        </div>
      </div>



    </div>
  );
};

export default Edit;
