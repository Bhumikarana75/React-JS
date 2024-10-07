// import React from "react"

// function App() {

//   return (
//     <div className="container">
//       <h2 align="center">
//         Comment and review
//       </h2>
//       <div className="row mt-5">
//         <div className="col-md-6">
//           <table border={}>
//           <form>
//             <div>
//               <div className="mb-3">
//                 <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
//                 <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
//                 <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="exampleInputPassword1" className="form-label">Salary</label>
//                 <input type="salary" className="form-control" id="exampleInputPassword1" />
//               </div>
//               <button type="submit" className="btn btn-primary">Submit</button>
//             </div>
//           </form>
//           </table>
//         </div>

//         <div className="col-md-6">
//           <table className="table table-striped" border={1}>
//             <thead>
//               <tr>
//                 <th scope="col">#</th>
//                 <th scope="col">Full Name</th>
//                 <th scope="col">Email</th>
//                 <th scope="col">Salary</th>
//                 {/* <th scope="col">
//                   <button >+</button>
//                 </th> */}
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <th scope="row">1</th>
//                 <td>Mark</td>
//                 <td>Otto</td>
//                 <td>@mdo</td>
//               </tr>
//             </tbody>
//           </table>

//         </div>
//       </div>
//     </div>
//   )
// }

// export default App



import { useState } from 'react';
// const app = () =>{
//   const [rows, setRows] = useState(() => {
//     const savedRows = localStorage.getItem('rows');
//     return savedRows ? JSON.parse(savedRows) : [];
//   })
// }

// useEffect (() => {
//   localStorage.setItem('rows', JSON.stringify(rows));
// }, [rows]);

// const addRow = () => {
//   setRows ([...rows, {fullName:"", email:"", salary:""}]);
// };

// const deleteRow = (index) => {
//   const newRows = [...rows];

// }

function app() {

  const [Input, setInput] = useState([
    { name: '', email: '', salary: '' }
  ])

  const add = () => {
    let newField = { id: Math.floor(Math.random() * 10000), name: "", email: "", salary: "" }
    setInput([...input, newField])
  }

  const deleteRow = (id) => {
    let d = input.filter(val => val.id != id);
    setInput(d)
  }

  return (
    <div align="center">
      <h1>Review and comments</h1>
      {
        Input.map((item, index) => {
          return (
            <div key={++index} className='col-md-6'>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">
                      Name:
                    </th>
                    <th scope="col">
                      Email:
                    </th>
                    <th scope="col">
                      Salary
                    </th>
                    {/* <th scope="col">
                      <button>+</button>
                    </th> */}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td><input type="text" value={item.name} /> &nbsp;&nbsp;</td>
                    <td><input type="email" value={item.email} />&nbsp;&nbsp;</td>
                    <td><input type="text" value={item.salary} />&nbsp;&nbsp;</td>
                  </tr>
                </tbody>
              </table>
              {
                index === 0 ? (
                  " "
                ) : (
                  <button onClick={() => deleteRow(item.id)}>-</button>
                )
              }
            </div>
          )
        })
      }

      <br /><br />
      <button onclick={() => add}>+</button>
    </div>
  )

}

export default app;