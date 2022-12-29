import axios from 'axios';
import React , {useState,useEffect} from 'react';
import Header from './Header';
import {useParams,useNavigate } from "react-router-dom";

export default function Update(){
  const navigate = useNavigate();
  const {id } = useParams();
  const [Recipe_name , setrecipe_name] = useState('');
  const [Ingredients , setingredients] = useState();
  const [Description , setdescription] = useState('');
  
  
  useEffect(()=>{
      axios.get(`http://localhost:8080/get/${id}`)
      .then((res)=>{
          
        setrecipe_name(res.data.recipe.Recipe_name);
        setingredients(res.data.recipe.Ingredients);
        setdescription(res.data.recipe.Description);
        console.log(res.data);
      })
  },[])

  function sendDataToAPI(){
      const data = {Recipe_name,Ingredients,Description}
      axios.put(`http://localhost:8080/update/${id}`,data)
      .then((res)=>{
          alert("Update Successful");
          window.location="/home";  
      })
      .catch((err)=>{
          alert(err);
      })
  };





    return(
        <div className="container">
          <Header/>
          <div class="bg-secondary p-2 text-white bg-opacity-10"> 
          <center> 
          <h1 className='head'>EditStaff</h1>
          </center>
            <form onSubmit={sendDataToAPI}>
            <div className="form-group">
            <input type="text" className="form-control" name='name' id="name" placeholder="Enter recipe name" value={Recipe_name}  onChange={(e)=>{setrecipe_name(e.target.value)}} required />
           </div>
           <div className="form-group">
          
          <input type="text"  className="form-control" name="ingredients" id="ingredients" placeholder="Enter ingredients" value={Ingredients} onChange={(e)=>{setingredients(e.target.value)}} required/>
           </div>
           <div className="form-group">
          
          <input type="text" className="form-control" name='description' id="description" placeholder="Enter description" value={Description} onChange={(e)=>{setdescription(e.target.value)}} required/>
           </div>
        
    <button type="submit" className="btn btn-danger" >Update
    &nbsp;
    </button>
</form>
    </div>
    </div>
);
 
};
 