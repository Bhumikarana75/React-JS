import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
  import "./App.css";

function App() {

  const [input, setInput] = useState([
    { id: Math.floor(Math.random() * 10000), name: '', email: '',salary :''}
  ]);

  const plus =()=>{
    let plusAction ={id: Math.floor(Math.random()*10000),name :"",email:"",salary:""};
    setInput([...input, plusAction]);
  }

  const deleteRow = (id) => {
    let updatedInput = input.filter(val => val.id !== id);
    setInput(updatedInput);
  }

  const handleChange = (id, event) => {
    const { name, value } = event.target;
    const updatedInput = input.map(item =>
      item.id === id ? { ...item, [name]: value } : item
    );
    setInput(updatedInput);
  }

  return (
    <div align="center" className="container">
      <h1 className="m-3">React - Add & Delate Table Rows Dynamically</h1>

      <table className="table" border={2}>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Salary</th>
            <th><button onClick={plus} className="btn btn-success fw-bold">+</button></th>
          </tr>
        </thead>
        <tbody>
          {
            input.map((item, index) => (
              <tr key={item.id}>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={item.name}
                    onChange={(e) => handleChange(item.id, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="email"
                    value={item.email}
                    onChange={(e) => handleChange(item.id, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="salary"
                    value={item.salary}
                    onChange={(e) => handleChange(item.id, e)}
                    className="form-control"
                  />
                </td>
                <td>
                  <button
                    onClick={() => deleteRow(item.id)}
                    className="btn btn-danger">
                    X
                  </button> 
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );

}

export default App;
