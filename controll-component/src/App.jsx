import { useRef } from 'react'

function App() {
  // const [count, setCount] = useState(0)

  const name = useRef();
  const phone = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameData = name.current.value;
    const phoneData = phone.current.value;
    
    console.log(nameData);
    console.log(phoneData);

    name.current.value = '';
    phone.current.value = '';
    
  }


  return (
    <>  
      <div align="center">
      <h1>Uncontroll Component</h1>
      <form onSubmit={handleSubmit}> 
        <table border="1" >
          <thead>
            <tr>
              <td>Name</td>
              <td><input type="text" ref={name} /></td>
            </tr>
            <tr>
              <td>Phone</td>
              <td><input type="text" ref={phone} /></td>
            </tr>
            
            <tr>
              <td></td>
              <td><input type="submit" /></td>
            </tr>
          </thead>
        </table>
      </form>
      </div>
    </>
  )
}

export default App
