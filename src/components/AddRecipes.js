import axios from 'axios';
import { Component} from 'react';
import Header from './Header';
import React, { useState, useEffect } from "react";


const AddRecipe=()=>{


  const[Recipe_name,setrecipe_name]=useState("");
  const[Ingredients,setingredients]=useState("");
  const[Description,setdescription]=useState("");



function onSubmit(e){
  e.preventDefault();


  const data={
    Recipe_name,
    Ingredients,
    Description,
  }
  console.log(data)
  axios.post('http://localhost:8080/',data).then((res) =>{
    alert("Added Successfully");
    window.location="/home";
  }).catch((err)=>{
    alert(err);

  })
}

    return(
        <div className="container">
          <Header/>
          <div class="position-sticky">
          <div class="bg-secondary p-2 text-white bg-opacity-10"> 
          <center>
          <h2>Add staff</h2>
          </center>
            <form onSubmit={onSubmit}>
            <div className="form-group">
          <p></p>
          <input type="text" className="form-control" name='name' id="name" placeholder="Enter recipe name" value={Recipe_name}  onChange={(e)=>{setrecipe_name(e.target.value)}} required />
           </div>
           <div className="form-group">
          
          <input type="text"  className="form-control" name="ingredients" id="ingredients" placeholder="Enter ingredients" value={Ingredients} onChange={(e)=>{setingredients(e.target.value)}} required/>
           </div>
           <div className="form-group">
          
          <input type="text" className="form-control" name='description' id="description" placeholder="Enter description" value={Description} onChange={(e)=>{setdescription(e.target.value)}} required/>
           </div>
          
        
    <button type="submit" className="btn btn-danger" >Add recipe
    &nbsp;
    </button>
</form>
</div>
</div>
</div>
);
 
}
export default AddRecipe;