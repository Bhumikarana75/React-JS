import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Table from './pages/Table';
import Form from './pages/Form';
import Edit from './pages/Edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/add" element={<Form />} />
        <Route path="/edit/:editId" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;