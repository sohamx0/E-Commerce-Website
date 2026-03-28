import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/home'
import About from './pages/about'
import Collection from './pages/collection'
import Contact from './pages/contact'
import Cart from './pages/cart'
import Login from './pages/login'
import Orders from './pages/orders'
import Product from './pages/product'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productid' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/order' element={<Orders />} />
      </Routes>
    </div>
  )
}

export default App