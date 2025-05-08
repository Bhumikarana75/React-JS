import { useState } from 'react'

function App() {
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [record, setRecord] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, phone);

    let obj = {
      id: Math.floor(Math.random() * 10000000),
      name: name,
      phone: phone
    }
    console.log(obj);

    setRecord([...record, obj]);
    setName('');
    setPhone('');
  }

  return (
    <>
      <div align='center'>
        <h1>Controller Component</h1>
        <form onSubmit={handleSubmit}>
          <table border='1' >
            <thead>
              <tr>
                <td>Name</td>
                <td><input type="text" onChange={(e) => setName(e.target.value)} value={name} /></td>
              </tr>
              <tr>
                <td>Phone</td>
                <td><input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} /></td>
              </tr>
              <tr>
                <td></td>
                <td><input type="submit" /></td>
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
            </tr>
          </thead>
          <tbody>
            {records.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </>
  )
}

export default App
