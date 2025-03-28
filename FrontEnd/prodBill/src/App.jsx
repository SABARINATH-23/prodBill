import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Update from './pages/Update';
import CreateProduct from './pages/CreateProduct';
const App= () => {

  return (
    <>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/products/create' element={<CreateProduct/>}></Route>
            <Route path='/product/update/:id' element={<Update/>}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App;