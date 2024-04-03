import { useState,useContext } from 'react'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Products from './pages/Products'
import Product from '../src/pages/Product'
import { Routes,Route } from 'react-router-dom'

import styles from './App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/products' element={<Products></Products>}></Route>
      <Route path='/product/:id' element={<Product></Product>}></Route>
      <Route path='*' element={<ErrorPage></ErrorPage>}></Route>
     
    </Routes>
    </>
  )
}

export default App
