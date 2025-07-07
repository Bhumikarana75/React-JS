import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getDatabase, ref, update } from "firebase/database";
import { app } from "../firebase"; // ✅ Ensure this is correctly set up

const Edit = () => {
  const location = useLocation();
  const navigate = useNavigate(); // ✅ Use this instead of <Navigate />

  const [formInput, setFormInput] = useState({
    name: "",
    age: "",
  });

  useEffect(() => {
    setFormInput({
      name: location?.state?.name || "",
      age: location?.state?.age || "",
    });
  }, [location?.state]);

  const db = getDatabase(app);

  const changeInput = (e) => {
    const { name, value } = e.target;
    setFormInput({
      ...formInput,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const singleRow = ref(db, `users/${location?.state?.id}`);

    update(singleRow, {
      name: formInput.name,
      age: formInput.age,
    })
      .then(() => {
        alert("User updated successfully");
        navigate("/view");
      })
      .catch((err) => {
        console.error("Error updating user:", err);
        alert("Error updating user: " + err.message);
      });
  };

  return (
    <div align="center">
      <h1>EDIT USER</h1>
      <form onSubmit={handleSubmit}>
        <table border={1}>
          <tbody>
            <tr>
              <td>Name :</td>
              <td>
                <input
                  type="text"
                  name="name"
                  onChange={changeInput}
                  value={formInput.name}
                />
              </td>
            </tr>
            <tr>
              <td>Age :</td>
              <td>
                <input
                  type="text"
                  name="age"
                  onChange={changeInput}
                  value={formInput.age}
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" value="Update" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <hr />

      <h1>
        Link :- <Link to={`/`}>View</Link>
      </h1>
    </div>
  );
};

export default Edit;
