import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";

const View = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);


  const getUsers = async () => {
  try {
    setLoading(true);
    const querySnapshot = await getDocs(collection(db, "todos"));
    const users = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setRecords(users);
  } catch (err) {
    console.error("Error fetching users:", err);
  } finally {
    setLoading(false);
  }
};

{loading ? (
  <p>Loading...</p>
) : (
  <table className="table table-bordered">
    {/* existing table code here */}
  </table>
)}


  const deleteUser = async (id) => {
    try {
      await deleteDoc(doc(db, "todos", id));
      getUsers();
    } catch (err) {
      console.error("Error deleting user:", err);
    }
  };

  const clearAll = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "todos"));
      const deletes = querySnapshot.docs.map((docSnap) => deleteDoc(doc(db, "todos", docSnap.id)));
      await Promise.all(deletes);
      getUsers();
    } catch (err) {
      console.error("Error clearing todos:", err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Todo List</h2>
      <Link to="/add" className="btn btn-primary mb-3">Add a Todo</Link>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Task</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map(({ id, text }) => (
            <tr key={id}>
              <td>{text}</td>
              <td>
                <button className="btn btn-danger btn-sm me-2" onClick={() => deleteUser(id)}>Remove</button>
                <button className="btn btn-warning btn-sm" onClick={() => navigate("/edit", { state: { id, text } })}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-danger mt-3 px-4 py-2 fw-bold" onClick={clearAll}>Clear List</button>
    </div>
  );
};

export default View;