import React, { Component } from 'react'
import axios from "axios";
import Header from './Header';
import { Link } from 'react-router-dom';


export default class AllStaff extends Component{

constructor(props){
    super(props);

    this.state={
        recipe:[]
    };
}

componentDidMount(){
    this.retrieverecipe();
}

retrieverecipe(){
    axios.get("http://localhost:8080/get").then(res =>{
            if(res.data.success){
            this.setState({
                recipe:res.data.existingrecipe
            });

            console.log(this.state.recipe)
        }
    })
}
onDelete= (id)=>{
    axios.delete(`http://localhost:8080/delete/${id}`).then((res)=>{
        alert("Are you sure you want to delete the recipe");
        this.retrieverecipe();
    })
}
    render(){
        return(
            <div className='container'>
                <Header/>
                <div class="bg-secondary p-2 text-white bg-opacity-10"> 
                <center>
                <h2 class="display-6">All recipes</h2>
                </center>
                <table class="table table-danger table-striped">
                    <thead>
                        <tr>
                        <th scope='col'>#</th>
                            <th scope='col'>recipe name</th>
                            <th scope='col'>ingredients</th>
                            <th scope='col'>description</th>
                            <th scope='co1'>Action</th>
                         </tr>
                    </thead>
                    <tbody>
                    {this.state.recipe.map((recipe,index) =>(
                        <tr>
                            <th scope='row'>{index+1}</th>
                            <td>{recipe.Recipe_name}</td>
                            <td>{recipe.Ingredients}</td>
                            <td>{recipe.Description}</td>
                            <td>
                            <Link to={"/update/"+ recipe._id} className = "btn btn-warning">Edit</Link>
                                &nbsp;
                                <a className='btn btn-danger' href="#" onClick={()=>this.onDelete(recipe._id)} >
                                    <i></i>&nbsp;Delete
                                </a>
                            </td>
                             </tr>
                             ))}
                    </tbody>
                </table>
                <Link to={"/add"} className = "btn btn-warning">AddRecipes</Link>
                &nbsp;
              </div>  
              </div>                   
            
        )
    }
}

