import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Read = () => {
    const[api,setapi]=useState([]);
    const setdata = (data) => {
        let { id,  title, technology, detail } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Title', title);
        localStorage.setItem('Technology', technology);
        localStorage.setItem('Detail', detail)
}
 const getdata=()=>{
    axios.get(`https://637c9c0872f3ce38eaa7e9a1.mockapi.io/apidata`).then((response)=>{
        setapi(response.data.reverse());
    })
 }





    useEffect(()=>{
        getdata();

    },[])

    const handleDelete=(id)=>{
        axios.delete(`https://637c9c0872f3ce38eaa7e9a1.mockapi.io/apidata/${id}`)
      .then(()=>{
        getdata();
      })
    }

  return (
    <>
      
      <table className='table table-dark'>
        <thead>
      <tr>
                          <th scope='col'>id</th>
                        <th scope='col'>Title</th>
                        <th scope='col'>Technology</th>
                        <th scope='col'>Detail</th>
                        <th scope='col'>update</th>
                        <th scope='col'>Delete</th>
                    </tr>
                    </thead>
    {
        api.map((data)=>{
            return(
               
                <tbody>
                    
                    <tr>
                        <th scope='row'>{data.id}</th>
                        <td >{data.title}</td>
                        <td>{data.technology}</td>
                        <td>{data.detail}</td>

                        
                        <td><Link to='/update'><button style={{backgroundColor:'yellow' }} onClick={()=>setdata(data)}>Update</button>
                        </Link> </td>
                       
                        <td>
                            <button style={{backgroundColor:'Red' }} onClick={()=>handleDelete(data.id)} >Delete</button>
                        </td>
                        
                    </tr>
                    
                </tbody>
            
            )
        })
       
    }
 </table>
   
    </>
  )
}

export default Read;