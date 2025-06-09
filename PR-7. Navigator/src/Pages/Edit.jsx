import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const Edit = () => {

  const navigate = useNavigate();
  const {editId} = useParams("");
  const [forminput, setFormInput] = useState({
    name : '',
    email : '',
    password : '',
    gender : '',
    courses : [],
    city : '',
    dateOfjoin: '',
  });

  const [allRecord, setAllRecord] = useState(JSON.parse(localStorage.getItem('users')) || [])

  useEffect(() => {
    let single = allRecord.find(val => val.id == editId);
    setFormInput(single)
  }, [editId]);

  const changeInput= (e) => {
    const { name, value, type, checked } = e.target;

    if(type === "checkbox"){
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

    let up = allRecord.map((val,i) => {
      if(val.id == editId){
        return forminput
      }
      return val;
    })
    localStorage.setItem("users", JSON.stringify(up));
    setAllRecord(up);
    alert("Record updated..!");
    navigate('/');
  }
  return (
    <div>
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
                           type="text" className="form-control mb-3" id="name" name='name' placeholder="Enter name" onChange={changeInput} value={forminput.name} required/>
                        </tr>
      
                        <tr>
                           <label htmlFor="email" className="form-label">Email :</label>
                           <input
                            type="text" className="form-control mb-3" id="email" name='email' placeholder="Enter Email" onChange={changeInput} value={forminput.email}/>
                        </tr>
      
                        <tr>
                          <label htmlFor="password" className="form-label">Password :</label>
                          <input
                            type="text" className="form-control mb-3" id="password" name='password' placeholder="Enter Password" onChange={changeInput} value={forminput.password} required/>
                        </tr>
                      
                        <tr>
                            <label htmlFor="gender" className="form-label">Gender :</label>
                            <td><input
                             type="radio" className="mx-2" id="male" name='gender' checked={forminput.gender === "male"} onChange={changeInput} value="male"/></td>
                            <td><label htmlFor="male" className="form-label">Male</label></td>
                         
                          <td><input
                              type="radio" className="mx-2" id="female" name='gender' checked={forminput.gender === "female"} onChange={changeInput} value="female"/>
                          </td>
                          <td>
                              <label htmlFor="female" className="form-label">Female</label>
                          </td>
                        </tr>
      
                      <tr>
                        <label htmlFor="courses" className="form-label">Courses :</label>
                      <td>
                        <input
                        type="checkbox" className=" mx-2" id="webdesign" name='courses' checked={forminput.courses.includes("webdesign")} onChange={changeInput} value="webdesign"/>
                      </td>
                      <td><label htmlFor="webdesign" className="form-label">Webdesign</label></td>
                      <td><input
                        type="checkbox" className=" mx-2" id="c" name='courses' checked={forminput.courses.includes("c")} onChange={changeInput} value="c"/></td>
                      <td> <label htmlFor="c" className="form-label">C Lang</label></td>
                      <td><input
                        type="checkbox" className=" mx-2" id="c++" name='courses' checked={forminput.courses.includes("c++")} onChange={changeInput} value="c++"/></td>
                      <td><label htmlFor="c++" className="form-label">C++</label></td>
                      <td><input
                        type="checkbox" className=" mx-2" id="python" name='courses' checked={forminput.courses.includes("python")} onChange={changeInput} value="python"/></td>
                      <td><label htmlFor="python" className="form-label">Python</label></td>
                      </tr>
      
                      <tr>
                        <label htmlFor="city">City :</label>
                        <td>
                          <select name="city" onChange={changeInput} value={forminput.city}>
                          <option value="surat">Surat</option>
                          <option value="vadodara">Vadodara</option>
                          <option value="rajkot">Rajkot</option>
                          <option value="vapi">Vapi</option>
                        </select>
                        </td>
                      </tr>
      
                     <tr>
                       <label htmlFor="doj" className='mt-2 mb-3' >Date of Join :</label>
                      <td>
                      <input type="date" name='dateOfjoin' value={forminput.dateOfjoin} onChange={changeInput} /></td>
                     </tr>
      
                      <button type="submit" value="submit" className="btn btn-primary w-100">Add User</button>
                      
                    </div>
                    </table>
      
                  </div>
      
                </form>
              </div>
            </div>
          </div>
      <Link to={'/'}>View</Link>
    </div>
  )
}

export default Edit
