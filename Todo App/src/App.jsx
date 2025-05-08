import { useState } from "react";

function App() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [record, setRecord] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, phone);

    if (!name || !phone) {
      alert("Please enter both name and phone.");
      return;
    }

    if (editId !== null) {
      const updaterec = record.map((item) =>
        item.id === editId ? { ...item, name, phone } : item
      );
      setRecord(updaterec);
      setEditId(null);
    } else {
      let obj = {
        id: Math.floor(Math.random() * 10000000),
        name: name,
        phone: phone,
      };
      console.log(obj);

      setRecord([...record, obj]);
    }

    setName("");
    setPhone("");
  };

  const handledelete = (id) => {
    const deleteRec = record.filter((item) => item.id != id);
    setRecord(deleteRec);
  };

  const handleEdit = (item) => {
    setName(item.name);
    setPhone(item.phone);
    setEditId(item.id);
  };

  return (
    <>
      <div align="center">
        <h1>To-Do App</h1>
        <form onSubmit={handleSubmit}>
          <table border="1">
            <thead>
              <tr>
                <td>Name</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </td>
              </tr>
              <tr>
                <td>Phone</td>
                <td>
                  <input
                    type="text"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    type="submit"
                    value={editId !== null ? "Update" : "Submit"}
                  />
                </td>
              </tr>
            </thead>
          </table>
        </form>

        <h2>Record</h2>
        <table border={1}>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Phone</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {record.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>
                  <button onClick={() => handleEdit(item)}>Edit</button> 
                  <button onClick={() => handledelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
