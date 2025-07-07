import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import View from "./pages/View.jsx";
import Add from "./pages/Add.jsx";
import Edit from "./pages/Edit.jsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<View />} />
      <Route path="/add" element={<Add />} />
      <Route path="/edit" element={<Edit />} />
    </Routes>
  </BrowserRouter>
);

export default App;