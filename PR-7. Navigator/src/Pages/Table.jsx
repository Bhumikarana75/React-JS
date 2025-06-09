import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const Table = () => {

  const [allrecord, setallRecord] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('users')) || [];
    setallRecord(data);
  }, []);

  const deleteUser = (id) => {
    let deleteData = allrecord.filter(val => val.id != id);
    localStorage.setItem('users', JSON.stringify(deleteData));
    setallRecord(deleteData);
    alert('record deleted successfully');
  }

  const editUser = (id) => {
    navigate(`/edit/${id}`);
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">View Users</h2>
      <Link to="/form"></Link>
      <table className="table table-bordered table-striped text-center">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Courses</th>
            <th>City</th>
            <th>DOJ</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
              allrecord.map((item, i) => {
                const { id, name, email, password, gender, courses, city, dateOfjoin } = item;
                return (
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{password}</td>
                    <td>{gender}</td>
                    <td>{courses}</td>
                    <td>{city}</td>
                    <td>{dateOfjoin}</td>
                    <td>
                      <button className="btn btn-sm btn-danger me-2" onClick={() => deleteUser(id)}>Delete</button>
                      <button className="btn btn-sm btn-warning" onClick={() => editUser({id})}>Edit</button>
                    </td>
                  </tr>
                );
              })
            }
        </tbody>
      </table>

      <div className="text-center">
        <Link to="/add" className="btn btn-primary">Add New User</Link>
      </div>
    </div>
  )
}

export default Table;