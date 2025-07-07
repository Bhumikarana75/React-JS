import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import {app} from "../firebase"; // Adjust the import path as necessary

const add = () => {

    const [formInput, setFormInput] = useState({
        name: "",
        age: ""
    });

    const db = getDatabase(app)

    const changeInput = (e) => {
      const { name, value } = e.target;
      setFormInput({
        ...formInput,
        [name] : value
      })
    }

    const handleSubmit = (e) => {
        e.preventDefault();    
        let obj = {
            userId: Math.floor(Math.random() * 100000),
            ...formInput
        }  
        
        set(ref(db, `users/${obj.userId}`), {
          name : formInput.name,
          age : formInput.age,
        }).then((res) =>{
          alert("User added successfully");
        }).catch((err) => {
          alert("Error adding user: " + err.message);
          return false;
        });
    }

  return (
    <div align="center">
      <h1>ADD USER</h1>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tr>
            <td>Name :</td>
            <td>
              <input type="text" name="name" onChange={changeInput}/>
            </td>
          </tr>
          <tr>
            <td>Age :</td>
            <td>
              <input type="text" name="age" onChange={changeInput}/>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="submit" />
            </td>
          </tr>
        </table>
      </form>

      <hr />

      <h1>
        link :- <Link to={`/view`}>View</Link>
      </h1>
    </div>
  );
};

export default add;
