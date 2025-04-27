import { useState } from 'react'
import './App.css'
import { categories, products } from './data'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory)

  return (
    <div align="center">
      <table border="1">
        <thead>
          <tr>
            <td >
              <button onClick={() => setSelectedCategory('All')}>All</button>
            </td>
            {
              categories.map((category) => (
                <td key={category.id}>
                  <button onClick={() => setSelectedCategory(category.name)}>
                    {category.name}
                  </button>
                </td>
              ))
            }
          </tr>
        </thead>
      </table>

      <br /><br />

      <table border="1" width='500px'>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App


// import { useState } from 'react'
// import './App.css'
// import { categories, products } from './data'

// function App() {
//   const [selectedCategory, setSelectedCategory] = useState('All')

//   const filteredProducts = selectedCategory === 'All'
//     ? products
//     : products.filter(product => product.category === selectedCategory)

//   return (
//     <div align="center">
//       <table border="1">
//         <thead>
//           <tr>
//             <td
//               style={{ cursor: 'pointer' }}
//               onClick={() => setSelectedCategory('All')}
//             >
//               All
//             </td>
//             {categories.map((category) => (
//               <td
//                 key={category.id}
//                 style={{ cursor: 'pointer' }}
//                 onClick={() => setSelectedCategory(category.name)}
//               >
//                 {category.name}
//               </td>
//             ))}
//           </tr>
//         </thead>
//       </table>

//       <br /><br />

//       <table border="1" width="500px">
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Category</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredProducts.map((product) => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>{product.name}</td>
//               <td>{product.category}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default App
