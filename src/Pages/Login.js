import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate=useNavigate();
  const [input,setinput]=useState({
    email:"",
    password:"",
  })
 
  const handleLogin=(e)=>{
    e.preventDefault();
    const loginuser=JSON.parse(localStorage.getItem("user"));
    //check credentials
    if(input.email===loginuser.email && input.password===loginuser.password){
      localStorage.setItem("login",true);
      navigate('/')
    }else{
      alert("Incorrect Email & Password");
    }
  }

  return (
    <>
    <div>
   <h1 align='center'>Login</h1>
       
    </div>

    <form onSubmit={handleLogin}>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email"  name="email"  value={input.email} onChange={(e)=>setinput({...input,[e.target.name]:e.target.value})} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password"  name="password" value={input.password} onChange={(e)=>setinput({...input,[e.target.name]: e.target.value})}  class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary mb-3 ms-3">Login</button>

  <label class='ms-3'>Don't have an Account</label> <span> <Link to='/register'>Register here</Link></span>
  

</form>
    
    
    
    </>
  )
}

export default Login;