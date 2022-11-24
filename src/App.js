import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Read from './Pages/Read';
import Create from './Pages/Create';
import Update from './Pages/Update';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Protect from './Pages/Protect';




const App = () => {

 

  return (
    <>
     
    <BrowserRouter>
    
    
    
    <Routes>
    
     
      
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/' element={<Protect/>}>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={ <About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/read' element={<Read/>}></Route>
      
      <Route path='/create' element={<Create/>}></Route>
      <Route path='/update' element={<Update/>}></Route>


      </Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;