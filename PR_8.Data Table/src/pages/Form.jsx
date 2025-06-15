import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const Form = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [date, setDate] = useState('');

  const [allRecords, setAllRecords] = useState(
    localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
  );

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

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id: Math.floor(Math.random() * 10000),
      name,
      email,
      gender,
      courses: selectedCourses,
      date,
      status: 'active'
    };

    const newRecord = [...allRecords, obj];
    localStorage.setItem('users', JSON.stringify(newRecord));
    alert('Record added..!');
    navigate('/');
  };

  const resetData = () => {
    setName("");
    setEmail("");
    setGender("");
    setSelectedCourses("");
    setDate("");
  }

  return (
    <div>
      <div className="container my-5">
        <div className="card">
          <div className="card-header d-flex align-items-center justify-content-between">
            <h4>Add User</h4>
            <div>
              <Link to={'/'} className="btn btn-success">View User</Link>
            </div>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} className=''>
              <label className='form-label'>Name :- </label>
              <input
                type='text'
                className='form-control'
                id='name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
              <br />
              <label className='form-label'>Email :- </label>
              <input
                type='email'
                className='form-control'
                id='email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <br />
              <label className='form-label'>Password :- </label>
              <input type='password' className='form-control' id='password' required />
              <br />
              <label className='form-label me-2'>Gender :- </label>
              <input
                type='radio'
                className='me-1'
                name='gender'
                id='male'
                onChange={(e) => setGender(e.target.value)}
                value={'male'}
              />
              Male
              <input
                type='radio'
                className='mx-1'
                name='gender'
                id='female'
                onChange={(e) => setGender(e.target.value)}
                value={'female'}
              />
              Female
              <br />
              <br />
              <label className='form-label me-2'>Course :- </label>
              <input
                type='checkbox' 
                className="form-check-input me-2"
                id='html'
                onChange={handleCourseChange}
                value='HTML'
              />
              HTML
              <input
                type='checkbox'
                className='form-check-input mx-2'
                id='css'
                onChange={handleCourseChange}
                value='CSS'
              />
              CSS
              <input
                type='checkbox'
                className='form-check-input mx-2'
                id='bootstrap'
                onChange={handleCourseChange}
                value='Bootstrap'
              />
              Bootstrap
              <input
                type='checkbox'
                className='form-check-input mx-2'
                id='js'
                onChange={handleCourseChange}
                value='JavaScript'
              />
              JavaScript
              <input
                type='checkbox'
                className='form-check-input mx-2'
                id='php'
                onChange={handleCourseChange}
                value='PHP'
              />
              PHP
              <input
                type='checkbox'
                className='form-check-input mx-2'
                id='react'
                onChange={handleCourseChange}
                value='React-js'
              />
              React-js
              <input
                type='checkbox'
                className='form-check-input mx-2'
                id='node'
                onChange={handleCourseChange}
                value='Node-js'
              />
              Node-js
              <input
                type='checkbox'
                className='form-check-input mx-2'
                id='laravel'
                onChange={handleCourseChange}
                value='Laravel'
              />
              Laravel
              <input
                type='checkbox'
                className='form-check-input mx-2'
                id='angular'
                onChange={handleCourseChange}
                value='Angular'
              />
              Angular
              <input
                type='checkbox'
                className='form-check-input mx-2'
                id='python'
                onChange={handleCourseChange}
                value='Python'
              />
              Python

              <br />
              <br />
              <label className='form-label'>Date :- </label>
              <input
                type='date'
                className='form-control'
                style={{ width: "300px" }}
                id='date'
                onChange={(e) => setDate(e.target.value)}
                value={date}
                required
              />
              <br />
              <br />
              <button className="btn btn-primary text-white me-2" type="submit">Submit</button>

              <button type='reset' className="btn btn-danger" onClick={resetData}>Reset</button>
              <br />
              <br />
            </form>
          </div>
        </div>

      </div>


    </div>
  );
};

export default Form;
