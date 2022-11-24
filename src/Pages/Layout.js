import React from 'react'
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Layout = () => {
    
  const navigate=useNavigate();
  const handlelogout=()=>{
    localStorage.removeItem("login");
    navigate('/login');
  }
    


  function randomColor() {
    return `#${Math.random()
      .toString(16)
      .substr(-6)}`
  }
  
const handle=()=>{
    document.body.style.backgroundColor = randomColor();
}


  return (
    
         <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/">My-App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/read">All Projects</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/create">Add New Project</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/contact">Contact</Link>
        </li>
        
      </ul>
      
    </div>
    <button  class='mx-3 btn btn-info py-0' style={{ 
     position:"relative",left:"5px",top:"5px"}}
     onClick={handle}
     >ColorMode</button>
 
 <button class='btn btn-primary py-0' style={{
     position:"relative",left:"1px",top:"5px"}}
     onClick={handlelogout}
     >Logout</button>

  </div>
</nav>

   
  )
}

export default Layout;