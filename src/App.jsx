import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Modules/Home/Home'
import Verify from './Modules/Verify/Verify'
import Products from './Modules/Products/Products'
import Product_Det from './Modules/Products/Product_Det'

function App() {
  

  return (
    <>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='verify' element={<Verify />}/>
      <Route path='products' element={<Products />}/>
      <Route path='product_Det/:id' element={<Product_Det />}/>
     </Routes>
    </>
  )
}

export default App