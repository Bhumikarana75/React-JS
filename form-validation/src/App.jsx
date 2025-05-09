import { useState } from "react";

function App() {
  const [input, setInput] = useState({
    name: "",
    email: "",
  });

  const [submittedData, setSubmittedData] = useState([]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, input]); 
    setInput({
      name: "",
      email: "",
    });
  };

  return (
    <div align="center">
      <form onSubmit={handleSubmit}>
        <h1>Form Validation</h1>
        <table border={1}>
          <tbody>
            <tr>
              <td>Name :</td>
              <td>
                <input
                  onChange={handleChange}
                  value={input.name}
                  type="text"
                  name="name"
                />
              </td>
            </tr>
            <tr>
              <td>Email :</td>
              <td>
                <input
                  onChange={handleChange}
                  value={input.email}
                  type="text"
                  name="email"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input type="submit" value="Submit" />
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      {submittedData.length > 0 && (
        <table border={1} style={{ marginTop: "20px" }}>
          <thead>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {submittedData.map((val, index) => (
              <tr key={index}>
                <td>{++index}</td>
                <td>{val.name}</td>
                <td>{val.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
