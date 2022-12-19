import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './Pages/Home';
import Header from './Pages/Header';
import Cart from './Pages/Cart';
import Product from './Product';
import { BrowserRouter,Routes,Route } from 'react-router-dom';



const App = () => {
 
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/cart' element={<Cart/>}></Route>
    <Route path='/product' element={<Product/>}></Route>


   </Routes>
   
   
   </BrowserRouter>
  )
}

export default App;