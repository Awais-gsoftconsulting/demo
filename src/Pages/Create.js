import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    let navigate=useNavigate();
    const [id, setID] = useState(0);
    const [title,settitle]=useState("");
    const [technology,settechnology]=useState("");
    const [detail,setdetail]=useState("");

    const handlepost=()=>{
        axios.post(`https://637c9c0872f3ce38eaa7e9a1.mockapi.io/apidata`,{
            id,
            title,
            technology,
            detail
        }).then(()=>{
            navigate('/read')
        })
    }
  return (
    <>
 
    ID<input   type="text"  required onChange={(e)=>{setID(e.target.value)}}/>
    Title:<input   required  type="text" onChange={(e)=>{settitle(e.target.value)}}/>
    Technology:<input type="text"  required onChange={(e)=>{settechnology(e.target.value)}}/>
    Detail<input   type="text"  required onChange={(e)=>{setdetail(e.target.value)}}/><br/><br/>
    
    <button  type='submit' style={{backgroundColor:'Blue' ,
     position:"relative",left:"940px", padding:"5px",}} onClick={handlepost}>Create Project</button>
    
    
    
    </>
  )
}

export default Create;