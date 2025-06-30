import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import axios from "axios";
import { useEffect, useState } from "react"

function App() {

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try{
      let res = await axios.get(`https://dummyjson.com/products`);
      setProducts(res.data.products)
    }catch(err){
      console.log(err);
      return false;
    }
  }

  useEffect(() => {
    getProducts();
  })
  
  return (
    <div className="container">
      <h2 className="text-center my-4">API Hunter - Product List with Axios</h2>
      <div className="table-responsive">
        <table border={1} className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Brand</th>
              <th scope="col">Category</th>
              <th scope="col">Tags</th>
              <th scope="col">Price</th>
              <th scope="col">Rating</th>
              <th scope="col">Stock</th>
              <th scope="col">Return Policy</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((prdct, index) => (
                <tr key={index}>
                  <td>{prdct.id}</td>
                  <td>{prdct.title}</td>
                  <td>{
                    prdct.brand == null ?
                         <div>
                          <span className="badge bg-danger">No Brand</span>
                         </div>
                      : prdct.brand
                  }</td>
                  <td>{prdct.category}</td>
                  <td>{prdct.tags.join(`, `)}</td>
                  <td>{prdct.price}</td>
                  <td>{prdct.rating}</td>
                  <td>{prdct.stock}</td>
                  <td>{prdct.returnPolicy}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App
