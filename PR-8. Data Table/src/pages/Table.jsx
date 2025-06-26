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
    const updated = records.filter((val) => val.id !== id);
    localStorage.setItem('users', JSON.stringify(updated));
    setRecords(updated);
    alert('Record deleted..!');
  };

  const changeStatus = (id, currentStatus) => {
    const updated = records.map((record) =>
      record.id === id ? { ...record, status: currentStatus === 'active' ? 'deactive' : 'active' } : record
    );
    localStorage.setItem('users', JSON.stringify(updated));
    setRecords(updated);
    alert('Status changed..!');
  };

  useEffect(() => {
    let filtered = [...allUsersRecord];

    if (status !== "") {
      filtered = filtered.filter(val => val.status === status);
    }

    if (search !== "") {
      filtered = filtered.filter(val =>
        val.name.toLowerCase().includes(search.toLowerCase())
      );
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
  };

  const multipleDeleteRecord = (id, checked) => {
    const updated = checked ? [...mulDelete, id] : mulDelete.filter(val => val !== id);
    setMulDelete(updated);
  };

  const multipleDelete = () => {
    const updated = records.filter(val => !mulDelete.includes(val.id));
    localStorage.setItem("users", JSON.stringify(updated));
    setRecords(updated);
    setMulDelete([]);
    alert("Selected records have been deleted..!");
  };

  const multipleStatusChange = (id, checked) => {
    const updated = checked ? [...mulStatusChange, id] : mulStatusChange.filter(val => val !== id);
    setMulStatusChange(updated);
  };

  const multipleStatus = () => {
    const updated = records.map((item) =>
      mulStatusChange.includes(item.id)
        ? { ...item, status: item.status === 'active' ? 'deactive' : 'active' }
        : item
    );
    localStorage.setItem('users', JSON.stringify(updated));
    setRecords(updated);
    setMulStatusChange([]);
    alert("Status of selected records has been changed..!");
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">User Management</h2>

      <div className="d-flex align-items-center justify-content-center mb-3 flex-wrap">
        <div className="form-group mx-2 mb-2">
          <select className="form-control" onChange={(e) => setStatus(e.target.value)} value={status}>
            <option value="">--- Filter by status ---</option>
            <option value="active">Active</option>
            <option value="deactive">Deactive</option>
          </select>
        </div>

        <div className="form-group mx-2 mb-2">
          <input type="text" className="form-control" placeholder="Search by name..." onChange={(e) => setSearch(e.target.value)} value={search} />
        </div>

        <div className="form-group mx-2 mb-2">
          <select className="form-control" onChange={(e) => setSort(e.target.value)} value={sort}>
            <option value="">--- Sort by name ---</option>
            <option value="ascending">A-Z</option>
            <option value="descending">Z-A</option>
          </select>
        </div>

        <button className="btn btn-secondary mx-2 mb-2" onClick={resetData}>Reset</button>
      </div>

      <div className="table-responsive">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>
                <button className="btn btn-danger btn-sm" onClick={multipleDelete}>
                  Delete Selected ({mulDelete.length})
                </button>
              </th>
              <th>
                <button className="btn btn-info btn-sm" onClick={multipleStatus}>
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
              records.length > 0 ? records.map((rcd, i) => {
                const { id, name, email, gender, selectedCourses, date, status } = rcd;
                return (
                  <tr key={i}>
                    <td className="text-center">
                      <input
                        type="checkbox"
                        onChange={(e) => multipleDeleteRecord(id, e.target.checked)}
                        checked={mulDelete.includes(id)}
                      />
                    </td>
                    <td className="text-center">
                      <input
                        type="checkbox"
                        onChange={(e) => multipleStatusChange(id, e.target.checked)}
                        checked={mulStatusChange.includes(id)}
                      />
                    </td>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{gender}</td>
                    <td>{selectedCourses?.join(", ")}</td>
                    <td>{date}</td>
                    <td>
                      <button
                        className={`btn btn-${status === 'active' ? 'success' : 'danger'} btn-sm`}
                        onClick={() => changeStatus(id, status)}
                      >
                        {status}
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-warning btn-sm me-2" onClick={() => navigate(`/edit`, { state: rcd })}>
                        Edit
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => deleteFunction(id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              }) : (
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
