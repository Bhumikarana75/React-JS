import { doc, getFirestore, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { app } from "../firebase";

const Edit = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id, name: initialName, phone: initialPhone } = state || {};

  const [name, setName] = useState(initialName || "");
  const [phone, setPhone] = useState(initialPhone || "");

  const db = getFirestore(app);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill out all fields!");
      return;
    }
    try {
      const userDoc = doc(db, "users", id);
      await updateDoc(userDoc, { name, phone });
      alert("User updated!");
      navigate("/");
    } catch (err) {
      console.error("Error updating user:", err);
    }
  };

  return (
    <div align="center">
      <h2>Edit User</h2>
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
                <button type="submit">Update</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default Edit;
