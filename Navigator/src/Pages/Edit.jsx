import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Edit = () => {

  const location = useLocation();

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [editId, setEditId] = useState("");

  const [allRecord, setAllRecord] = useState(localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : [])

  useEffect(() => {
    setName(location?.state?.name)
    setPhone(location?.state?.phone)
    setEditId(location?.state?.id)
  }, [location?.state])

  const handleSubmit = (e) => {
    e.preventDefault();

    let up = allRecord.map((val,i) => {
      if(val.id == editId){
        val.name = name,
        val.phone = phone
      }
      return val;
    })
    localStorage.setItem("users", JSON.stringify(up));
    alert("Record updated..!");
    navigate('/');
  }
  return (
    <div>
      <h2>Edit User React Route</h2>
      <form onSubmit={handleSubmit}>
        <table>
          <tr>
            <td>
              Name :- 
            </td>
            <td>
              <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            </td>
          </tr>
          <tr>
            <td>
              Phone :- 
            </td>
            <td>
              <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />
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
      <Link to={'/'}>View</Link>
    </div>
  )
}

export default Edit;
