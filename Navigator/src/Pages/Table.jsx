import React, { isValidElement, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const Table = () => {

  const navigate = useNavigate();
  const allUsers = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []

  const [record, setRecord] = useState(allUsers);
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [mulDelete, setMulDelete] = useState([]);

  const userDelete = (id) => {
    let d = record.filter(val => val.id != id);
    localStorage.setItem("users", JSON.stringify(d));
    setRecord(d);
    alert("Record deleted..!");
  }

  const changeStatus = (id, st) => {
    if (st == "active") {
      let up = record.map((val) => {
        if (val.id == id) {
          val.status = "deactive";
        }
        return val;
      })
      localStorage.setItem("users", JSON.stringify(up))
      setRecord(up);
      alert("Status changed..!");
    } else {
      let up = record.map((val) => {
        if (val.id == id) {
          val.status = "active";
        }
        return val;
      })
      localStorage.setItem("users", JSON.stringify(up))
      setRecord(up);
      alert("Status changed..!");
    }
  }

  useEffect(() => {
    let filtered = [...allUsers];

    if (status != "") {
      filtered = filtered.filter(val => val.status === status);
    } else {
      setRecord(allUsers);
    }

    if (search != "") {
      filtered = filtered.filter(val =>
        val.name.toLowerCase().includes(search.toLowerCase())
      )
    } else {
      setRecord(allUsers);
    }

    if (sort === "ascending") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "descending") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setRecord(filtered);

  }, [status, search, sort])

  const resetData = () => {
    setStatus("")
    setSearch("");
    setSort("");
    setRecord(allUsers);
  }

  const multipleDeleteRecord = (id, checked) => {
    let old = [...mulDelete];
    if (checked) {
      old.push(id)
    } else {
      old = old.filter(val => val != id);
    }
    setMulDelete(old);
  }

  const multipleDelete = () => {
    let d = record.filter(val => !mulDelete.includes(val.id));
    localStorage.setItem("users", JSON.stringify(d));
    setRecord(d)
    alert("All selected records are deleted..!");
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">View Users</h2>

      <div className="d-flex justify-content-between mb-3">
        <div className="form-group">
          <select className="form-control" onChange={(e) => setStatus(e.target.value)} value={status}>
            <option value="">--- Filter by status ---</option>
            <option value="active">Active</option>
            <option value="deactive">Deactive</option>
          </select>
        </div>

        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search by name..." onChange={(e) => setSearch(e.target.value)} value={search} />
        </div>

        <div className="form-group">
          <select className="form-control" onChange={(e) => setSort(e.target.value)} value={sort}>
            <option value="">--- Sort by name ---</option>
            <option value="ascending">A-Z</option>
            <option value="descending">Z-A</option>
          </select>
        </div>

        <button className="btn btn-secondary" onClick={resetData}>Reset</button>
      </div>

      <table className="table table-bordered table-striped text-center">
        <thead className="thead-dark">
          <tr>
            <th>
              <button className='btn btn-sm btn-danger' onClick={() => multipleDelete()}>
                Selected Delete ({mulDelete.length})
              </button>
            </th>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            record.length > 0 ? (
              record.map((u, i) => {
                const { id, name, phone, status } = u;
                return (
                  <tr key={i}>
                    <td>
                      <input 
                        type="checkbox" 
                        onChange={(e) => multipleDeleteRecord(id, e.target.checked)} 
                        checked={mulDelete.includes(u.id)}
                        />
                    </td>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{phone}</td>
                    <td>
                      <button
                        onClick={() => changeStatus(id, status)}
                        className={`btn btn-sm ${status === "active" ? 'btn-success' : 'btn-danger'}`}>
                        {status}
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-sm btn-danger me-2" onClick={() => userDelete(id)}>Delete</button>
                      <button className="btn btn-sm btn-warning" onClick={() => navigate(`/edit`, { state: u })}>Edit</button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5">No records found</td>
              </tr>
            )
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