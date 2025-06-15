import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const Table = () => {
  const navigate = useNavigate();
  const [status, setStatus] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const allUsersRecord = JSON.parse(localStorage.getItem('users')) || [];

  const [records, setRecords] = useState(allUsersRecord);
  const [mulDelete, setMulDelete] = useState([]);
  const [mulStatusChange, setMulStatusChange] = useState([]);

  const deleteFunction = (id) => {
    let d = records.filter((val) => val.id !== id);
    localStorage.setItem('users', JSON.stringify(d));
    setRecords(d);
    alert('Record deleted..!');
  };

  const changeStatus = (id, status) => {
    let updatedRecords = records.map((record) => {
      if (record.id === id) {
        record.status = status === 'active' ? 'deactive' : 'active';
      }
      return record;
    });

    localStorage.setItem('users', JSON.stringify(updatedRecords));
    setRecords(updatedRecords);
    alert('Status changed..!');
  };

  useEffect(() => {
    let filtered = [...allUsersRecord];

    if (status != "") {
      filtered = filtered.filter(val => val.status === status);
    } else {
      setRecords(allUsersRecord);
    }

    if (search != "") {
      filtered = filtered.filter(val =>
        val.name.toLowerCase().includes(search.toLowerCase())
      )
    } else {
      setRecords(allUsersRecord);
    }

    if (sort === "ascending") {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "descending") {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    setRecords(filtered);

  }, [status, search, sort]);

  const resetData = () => {
    setSort("");
    setSearch("");
    setStatus("");
    setRecords(allUsersRecord);
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
    let d = records.filter(val => !mulDelete.includes(val.id));
    localStorage.setItem("users", JSON.stringify(d));
    setRecords(d);
    alert("Selected records has been Deleted..!");
  }

  const multipleStatusChange = (id, checked) => {
    let old = [...mulStatusChange];
    if (checked) {
      old.push(id)
    } else {
      old = old.filter(val => val != id);
    }
    setMulStatusChange(old);
  }

  const multipleStatus = () => {
    let updatedRecords = records.map((statusRecord) => {
      if (mulStatusChange.includes(statusRecord.id)) {
        statusRecord.status = statusRecord.status === 'active' ? 'deactive' : 'active';
      }
      return statusRecord;
    });

    localStorage.setItem('users', JSON.stringify(updatedRecords));
    setRecords(updatedRecords);
    alert("Status of selected records has been changed..!");
  }

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">User Management</h2>

      <div className="d-flex align-items-center justify-content-center mb-3">
        <div className="form-group mx-4">
          <select className="form-control" onChange={(e) => setStatus(e.target.value)} value={status}>
            <option value="">--- Filter by status ---</option>
            <option value="active">Active</option>
            <option value="deactive">Deactive</option>
          </select>
        </div>

        <div className="form-group mx-4">
          <input type="text" className="form-control" placeholder="Search by name..." onChange={(e) => setSearch(e.target.value)} value={search} />
        </div>

        <div className="form-group mx-4">
          <select className="form-control" onChange={(e) => setSort(e.target.value)} value={sort}>
            <option value="">--- Sort by name ---</option>
            <option value="ascending">A-Z</option>
            <option value="descending">Z-A</option>
          </select>
        </div>

        <button className="btn btn-secondary mx-4" onClick={resetData}>Reset</button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>
                <button className="btn btn-danger" onClick={multipleDelete}>
                  Delete Selected ({mulDelete.length})
                </button>
              </th>
              <th>
                <button className="btn btn-info" onClick={multipleStatus}>
                  Change Status ({mulStatusChange.length})
                </button>
              </th>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              records.length > 0 ? (
                records.map((rcd, i) => {
                  const { id, name, email, gender, selectedCourses, date, status } = rcd;
                  return (
                    <tr key={i}>
                      <td align='center'>
                        <input
                          type="checkbox"
                          onChange={(e) => multipleDeleteRecord(id, e.target.checked)}
                          checked={mulDelete.includes(rcd.id)}
                        />
                      </td>
                      <td align='center'>
                        <input
                          type="checkbox"
                          onChange={(e) => multipleStatusChange(id, e.target.checked)}
                          checked={mulStatusChange.includes(rcd.id)}
                        />
                      </td>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{gender}</td>
                      <td>{selectedCourses.join(", ")}</td>
                      <td>{date}</td>
                      <td>
                        <button
                          className={`btn btn-${status === 'active' ? 'success' : 'danger'}`}
                          onClick={() => changeStatus(id, status)}>
                          {status}
                        </button>
                      </td>
                      <td>
                        <button className="btn btn-warning me-2" onClick={() => navigate(`/edit`, { state: rcd })}>
                          Edit
                        </button>
                        <button className="btn btn-danger" onClick={() => deleteFunction(id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="10" className="text-center">No records found</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>

      <div className="text-center">
        <Link to={'/add'} className="btn btn-primary mt-3">Add New User</Link>
      </div>
    </div>
  );
};

export default Table;



