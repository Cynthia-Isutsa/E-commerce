import React from 'react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className=''>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  )
}

export default App
