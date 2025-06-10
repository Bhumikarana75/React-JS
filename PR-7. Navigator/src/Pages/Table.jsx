import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Table = () => {
  const [allrecord, setAllRecord] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('users')) || [];
    setAllRecord(data);
  }, []);

  const deleteUser = (id) => {
    const filtered = allrecord.filter((val) => val.id !== id);
    localStorage.setItem('users', JSON.stringify(filtered));
    setAllRecord(filtered);
    alert('Record deleted successfully');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">View Users</h2>
      <table className="table table-bordered table-striped text-center">
        <thead>
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
          {allrecord.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>{item.gender}</td>
              <td>{item.courses.join(', ')}</td>
              <td>{item.city}</td>
              <td>{item.dateOfjoin}</td>
              <td>
                <button className="btn btn-sm btn-danger me-2" onClick={() => deleteUser(item.id)}>Delete</button>
                <button className="btn btn-sm btn-warning" onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-center">
        <Link to="/add" className="btn btn-primary">Add New User</Link>
      </div>
    </div>
  );
};

export default Table;