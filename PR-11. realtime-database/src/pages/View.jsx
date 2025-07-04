import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, onValue, remove } from 'firebase/database';
import { app } from '../firebase';
import { useNavigate } from 'react-router';

const View = () => {

  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState({});
  const db = getDatabase(app);
  const getUser = () => {
    const allRecord = ref(db, 'users');
    onValue(allRecord, (row) => {
      const data = row.val();
      setAllUsers(data || {}); // fallback in case no data
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const deleteUser = (id) => {
    const deleteData = ref(db, `users/${id}`)
    remove(deleteData) 
    .then((res) => {  
      alert("User deleted successfully");
      getUser();
    }).cathc((err) => {
      console.log(err);
      return false;
    })
  };

  const editUser = (id, name, age) => {

    let data= {id, name, age}
    navigate(`/edit`, {state : data})
  }

  return (
    <div align="center">
      <h1>View User</h1>
      <table border={1} align="center" cellPadding={10}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            Object.entries(allUsers).map(([key, value]) => {
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{value.name}</td>
                  <td>{value.age}</td>
                  <td>
                    <button onClick={ () => deleteUser(key) }>Delete</button>&nbsp;  
                    <button onClick={ () => editUser(key, value.name, value.age) }>Edit</button>
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>

      <hr />

      <h1>Link :- <Link to="/add">Add</Link></h1>
    </div>
  );
};

export default View;
