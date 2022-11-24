import React, { useState ,useEffect} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Update = () => {
    let navigate=useNavigate();
    const [id, setID] = useState(0);
    const [title,settitle]=useState("");
    const [technology,settechnology]=useState("");
    const [detail,setdetail]=useState("");

    
useEffect(() => {
        setID(localStorage.getItem('ID'))
        settitle(localStorage.getItem('Title'));
        settechnology(localStorage.getItem('Technology'));
        setdetail(localStorage.getItem('Detail'))
}, []);

const update = () => {
      axios.put(`https://637c9c0872f3ce38eaa7e9a1.mockapi.io/apidata/${id}`,{
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
    <h1>Update</h1>
    ID<input   type="text" value={id} onChange={(e)=>{setID(e.target.value)}}/>
    Title:<input   type="text" value={title} onChange={(e)=>settitle(e.target.value)}/>
    Technology:<input type="text" value={technology} onChange={(e)=>settechnology(e.target.value)}/>
    Detail<input   type="text"   value={detail}  onChange={(e)=>setdetail(e.target.value)}/><br/><br/>
    
    <button  type='submit' style={{backgroundColor:'Yellow' ,
     position:"relative",left:"350px"}} onClick={update}>Update</button>
     
    
    
    
    </>
  )
}

export default Update;