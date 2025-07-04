import { addDoc, collection, getFirestore } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../firebase";

const Add = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const db = getFirestore(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill out all fields!");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "users"), {
        name: name,
        phone: phone,
      });
      console.log("Document written with ID: ", docRef.id); 
      alert("Record added!");
      setName("");
      setPhone("");
      navigate("/");
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };
  
  return (
    <div align="center">
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>Phone:</td>
              <td>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button type="submit">Submit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <Link to="/">View Users</Link>
    </div>
  );
};

export default Add;
