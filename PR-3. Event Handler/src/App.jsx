import { useState } from "react";
import {category, item} from "./Data";
import Product from "./Product";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {

  const [filterData, setFilterData] = useState([]);

  const categoryButtonClick = (cat) => {
    if(cat == "All"){
      setFilterData(item)
    }
    else{
      let up = item.filter((product) => {
        return product.category == cat;
      })
      setFilterData(up);
    }
  }

  return (
    <div align="center">
      <h1 className="font-monospace fw-bold mt-4">Gadget Galaxy</h1>
      <Product 
        category = {category}
        item={item}
        categoryButtonClick={categoryButtonClick}
        filterData={filterData}
      />
    </div>
  )
}

export default App;