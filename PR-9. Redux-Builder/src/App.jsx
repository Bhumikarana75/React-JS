import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "./action/taskAction";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const allRecord = useSelector(state => state.notes_crud.users)

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !note) {
      alert("Please fill in all fields");
      return false;
    }

    let obj = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      note: note
    }

    dispatch(addTask(obj));
    setNote("");
    setTitle("");
    alert("Your Note added successfully..!");
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2 className="text-center mb-4">Add Task</h2>
          <form onSubmit={handleSubmit} className="mb-4">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="mb-3">
              <textarea
                rows={3}
                className="form-control"
                placeholder="Write a Note..."
                onChange={(e) => setNote(e.target.value)}
                value={note}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Add Note
            </button>
          </form>

          <h3 className="text-center">Your Notes</h3>
          {
            allRecord.length > 0 ? (
              <div className="list-group d-flex justify-content-center align-items-center m-3">
                {
                  allRecord.map((val) => (
                    <div key={val.id} className="list-group-item d-flex justify-content-between align-items-center m-3" style={{width: 250}}>
                      <div>
                        <h5>{val.title}</h5>
                        <p className="mb-1">{val.note}</p>
                      </div>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => dispatch(deleteTask(val.id))}
                      >
                        Delete
                      </button>
                    </div>
                  ))
                }
              </div>
            ) : (
              <p className="text-center mt-4">There are no notes here..!</p>
            )
          }
        </div>
      </div>
    </div>
  );













  // return (
  //   <>
  //     <div align="center">
  //         <h2>Add Task</h2>

  //         <div>
  //           <form onSubmit={handleSubmit}>
  //             <input 
  //             type="text"
  //             placeholder="Enter Title"
  //             onChange={(e) => setTitle(e.target.value)}
  //             value={title || ""} 
  //             />
  //             <br />
  //             <textarea rows={5} placeholder="Write a Note..." onChange={(e) => setNote(e.target.value)} value={note || ""}>
  //             <br />
  //             <button type="submit">submit</button>
  //             </textarea>
  //           </form>
  //         </div>
  //         <div>
  //           {
  //             allRecord.map((val) => {
  //               return(
  //                 <div>
  //                   <h5>{val.title}</h5>
  //                   <p>{val.note}</p>
  //                   <div>
  //                     <span onClick={() => dispatch(deleteTask(val.id))}>
  //                       Delete
  //                     </span>
  //                   </div>
  //                 </div>
  //               )
  //             })
  //           }
  //         </div>
  //     </div>    
  //   </>
  // )
}

export default App
