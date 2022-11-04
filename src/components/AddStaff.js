import axios from 'axios';
import { Component} from 'react';
import Header from './Header';
import React, { useState, useEffect } from "react";

const AddStaff=()=>{


  const[name,setfname]=useState("");
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const[Mobile,setMobile]=useState("");
  const[position,setposition]=useState("");



function onSubmit(e){
  e.preventDefault();


  const data={
    name,
      email,
      password,
      Mobile,
      position,

  }
  console.log(data)
  axios.post('http://localhost:8080/',data).then((res) =>{
    alert("Added Successfully");
  }).catch((err)=>{
    alert(err);

  })
}

    return(
        <div className="container">
          <Header/>
            <form onSubmit={onSubmit}>
            <div className="form-group">
          <p></p>
          <input type="text" className="form-control" name='name' id="name" placeholder="Enter name" value={name}  onChange={(e)=>{setfname(e.target.value)}} required />
           </div>
           <div className="form-group">
          
          <input type="email"  className="form-control" name="email" id="email" placeholder="Enter email" value={email} onChange={(e)=>{setemail(e.target.value)}} required/>
           </div>
           <div className="form-group">
          
          <input type="text" className="form-control" pattern=".{10}" name='Mobile' id="Mobile" placeholder="Enter Mobile no" value={Mobile} onChange={(e)=>{setMobile(e.target.value)}} required/>
           </div>
          <div className="form-group">
          
         <input type="password" className="form-control" name='password' id="password" placeholder="Password"value={password}onChange={(e)=>{setpassword(e.target.value)}} required/>
        </div>
        <div className="form-group">
          <input type="text" className="form-control" name='position' id="position" placeholder="Enter status" value={position}onChange={(e)=>{setposition(e.target.value)}} required/>
           </div>
        
    <button type="submit" className="btn btn-danger" >Add Staff
    &nbsp;
    </button>
</form>
    </div>
);
 
}
export default AddStaff;