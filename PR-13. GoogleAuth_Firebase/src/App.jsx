import { BrowserRouter, Route, Routes } from "react-router-dom"
import View from "./pages/View"
import Add from "./pages/Add"
import Edit from "./pages/Edit"
import Login from "./pages/Login"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/view" element={<View/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/edit" element={<Edit/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
