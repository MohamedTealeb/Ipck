import './App.css'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './Modules/Home/Home'
import Verify from './Modules/Verify/Verify'
import Products from './Modules/Products/Products'
import Product_Det from './Modules/Products/Product_Det'
import Login from './Modules/Login/Login'
import ProtectedRoute from './Modules/Auth/ProtectedRoute'
import SignUp from './Modules/SignUp/SignUp'

function App() {
  return (
    <>
     <Routes>
      {/* Public Routes */}
      <Route path='login' element={<Login />}/>
      <Route path='signup' element={<SignUp />}/>
      
      {/* Protected Routes */}
      <Route path='/' element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }/>
      <Route path='verify' element={
        <ProtectedRoute>
          <Verify />
        </ProtectedRoute>
      }/>
      <Route path='products' element={
        <ProtectedRoute>
          <Products />
        </ProtectedRoute>
      }/>
      <Route path='product_Det/:id' element={
        <ProtectedRoute>
          <Product_Det />
        </ProtectedRoute>
      }/>

      {/* Redirect any unknown routes to home */}
      {/* <Route path='*' element={<Navigate to="login" replace />} /> */}
     
     </Routes>
    </>
  )
}

export default App