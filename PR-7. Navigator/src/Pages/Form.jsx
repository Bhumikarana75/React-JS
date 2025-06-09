import React, { useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const Form = () => {

   const navigate = useNavigate();
  
  const [forminput, setFormInput] = useState({
    name : '',
    email : '',
    password : '',
    gender : '',
    courses : [],
    city : '',
    dateOfjoin: '',
  });

  const [allrecord, setallRecord] = useState(JSON.parse(localStorage.getItem('users')) || []);

  const changeInput = (e) => {
    const {name, value, type, checked} = e.target;

    if(type === "checkbox" ){
      if(checked){
        setFormInput({
          ...forminput,
          courses: [...forminput.courses, value]
        })
      }else{
        setFormInput({
          ...forminput,
          courses: [...forminput.courses].filter(val => val != value)
        })
      }
    }else{
      setFormInput({
        ...forminput,
        [name] : value
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      id : Math.floor(Math.random() * 1000000),
      ...forminput
    }
    let oldrecord = [...allrecord, obj];
    localStorage.setItem('users', JSON.stringify(oldrecord));
    alert('record added');
    navigate('/');
  }

  return (

    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Add New User</h2>

          <form onSubmit={handleSubmit}>
            <div className="card mb-3">
              <table border="1">
                <div className="card-body">
                
                  <tr>
                    <label htmlFor="name" className="form-label">Name :</label>
                    <input
                     type="text" className="form-control mb-3" id="name" name='name' placeholder="Enter name" onChange={changeInput}/>
                  </tr>

                  <tr>
                     <label htmlFor="email" className="form-label">Email :</label>
                     <input
                      type="text" className="form-control mb-3" id="email" name='email' placeholder="Enter Email" onChange={changeInput}/>
                  </tr>

                  <tr>
                    <label htmlFor="password" className="form-label">Password :</label>
                    <input
                      type="text" className="form-control mb-3" id="password" name='password' placeholder="Enter Password" onChange={changeInput}/>
                  </tr>
                
                  <tr>
                      <label htmlFor="gender" className="form-label">Gender :</label>
                      <td><input
                       type="radio" className="mx-2" id="male" name='gender' onChange={changeInput} value="male"/></td>
                      <td><label htmlFor="male" className="form-label">Male</label></td>
                   
                    <td><input
                        type="radio" className="mx-2" id="female" name='gender' onChange={changeInput} value="female"/>
                    </td>
                    <td>
                        <label htmlFor="female" className="form-label">Female</label>
                    </td>
                  </tr>

                <tr>
                  <label htmlFor="courses" className="form-label">Courses :</label>
                <td>
                  <input
                  type="checkbox" className=" mx-2" id="webdesign" name='courses' onChange={changeInput} value="webdesign"/>
                </td>
                <td><label htmlFor="webdesign" className="form-label">Webdesign</label></td>
                <td><input
                  type="checkbox" className=" mx-2" id="c" name='courses' onChange={changeInput} value="c"/></td>
                <td> <label htmlFor="c" className="form-label">C Lang</label></td>
                <td><input
                  type="checkbox" className=" mx-2" id="c++" name='courses' onChange={changeInput} value="c++"/></td>
                <td><label htmlFor="c++" className="form-label">C++</label></td>
                <td><input
                  type="checkbox" className=" mx-2" id="python" name='courses' onChange={changeInput} value="python"/></td>
                <td><label htmlFor="python" className="form-label">Python</label></td>
                </tr>

                <tr>
                  <label htmlFor="city">City :</label>
                  <td>
                    <select name="city" onChange={changeInput}>
                    <option value="surat">Surat</option>
                    <option value="vadodara">Vadodara</option>
                    <option value="rajkot">Rajkot</option>
                    <option value="vapi">Vapi</option>
                  </select>
                  </td>
                </tr>

               <tr>
                 <label htmlFor="doj" className='mt-2 mb-3'>Date of Join :</label>
                <td>
                <input type="date" name='dateOfjoin' onChange={changeInput} /></td>
               </tr>

                <button type="submit" value="submit" className="btn btn-primary w-100">Add User</button>
                
              </div>
              </table>

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