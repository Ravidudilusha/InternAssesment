import axios from 'axios';
import React , {useState,useEffect} from 'react';
import Header from './Header';
import {useParams,useNavigate } from "react-router-dom";

export default function Update(){
  const navigate = useNavigate();
  const {id } = useParams();
  const [name , setname] = useState('');
  const [email , setemail] = useState();
  const [password , setpass] = useState('');
  const [Mobile , setMobile] = useState('');
  const [position , setposition] = useState('');
  
  
  useEffect(()=>{
      axios.get(`http://localhost:8080/get/${id}`)
      .then((res)=>{
          
          setname(res.data.name);
          setemail(res.data.email);
          setpass(res.data.password);
          setMobile(res.data.Mobile);
          setposition(res.data.position);
            console.log(res.data);
      })
  },[])

  const sendDataToAPI =()=>{
      const data = {name,email,password,Mobile,position}
      axios.put(`http://localhost:8080/update/${id}`,data)
      .then((res)=>{
          alert("Update Successful");  
      })
      .catch((err)=>{
          alert("Update Unsuccessful");
      })
  };





    return(
        <div className="container">
          <Header/>
          <h1 className='head'>EditStaff</h1>
            <form>
            <div className="form-group">
          <label className="name">name</label>
          <input type="text" className="form-control" name='name' id="name" placeholder="Enter name" value={name} onChange={(e)=>setname(e.target.value)} required/>
           </div>
           <div className="form-group">
          <label className="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" name='email' id="email" placeholder="Enter email" value={email} onChange={(e)=>setemail(e.target.value)} required/>
           </div>
           <div className="form-group">
          <label className="mobilenumber">Mobile number</label>
          <input type="text" className="form-control" name='Mobile' id="Mobile" placeholder="Enter Mobile no" value={Mobile} onChange={(e)=>setMobile(e.target.value)} required/>
           </div>
          <div className="form-group">
          <label className="inputPassword">Password</label>
         <input type="password" className="form-control" name='password' id="password" placeholder="Password"value={password} onChange={(e)=>setpass(e.target.value)} required/>
        </div>
        <div className="form-group">
          <label className="status">status</label>
          <input type="text" className="form-control" name='position' id="position" placeholder="Enter status" value={position} onChange={(e)=>setposition(e.target.value)} required/>
           </div>
        
    <button type="submit" className="btn btn-danger" onClick={sendDataToAPI}>Update
    &nbsp;
    </button>
</form>
    </div>
);
 
};
 