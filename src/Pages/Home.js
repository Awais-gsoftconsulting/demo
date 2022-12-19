import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  

  
  return (
    <div style={{background:"pink", minHeight:'85vh'}}>
     <h1 className='text-center my-4'>Outstanding Stuff </h1>
     <div className='products'>
     
     <div class="card text-center ">
  <div class="card-header my-3">
    Sale Sale ! So HURRY uP 
  </div>
  <div class="card-body my-5">
    <h5 class="card-title">All Stuff is Availble</h5>
    <p class="card-text">So if You interested Click Button Below</p>
    <Link to='/product' class="btn btn-primary my-2">Click to buy</Link>
  </div >
 
</div>
         

     </div>

    </div>
  )
}

export default Home;