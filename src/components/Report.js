import React, { Component } from 'react'
import axios from "axios";
import Header from './Header';

export default class AllStaff extends Component{

constructor(props){
    super(props);

    this.state={
       staff:[]
    };
}

componentDidMount(){
    this.retrieveStaff();
}

retrieveStaff(){
    axios.get("http://localhost:8080/get").then(res =>{
            if(res.data.success){
            this.setState({
                staff:res.data.existingStaff
            });

            console.log(this.state.staff)
        }
    })
}
onDelete= (id)=>{
    axios.delete(`http://localhost:8080/delete/${id}`).then((res)=>{
        alert("Delete Successfully");
        this.retrieveStaff();
    })
}
    render(){
        return(
            
            <div className='container'>
                <Header/>
                <h2>All Staff</h2>
                <table className='table'>
                    <thead>
                        <tr>
                        <th scope='col'>#</th>
                            <th scope='col'>name</th>
                            <th scope='col'>email</th>
                            <th scope='col'>Mobile</th>
                            <th scope='col'>position</th>
                         </tr>
                    </thead>
                    <tbody>
                    {this.state.staff.map((staff,index) =>(
                        <tr>
                            <th scope='row'>{index+1}</th>
                            <td>{staff.name}</td>
                            <td>{staff.email}</td>
                            <td>{staff.Mobile}</td>
                            <td>{staff.position}</td>
                            <td>
                            </td>
                             </tr>
                             ))}
                    </tbody>
                </table>
              </div>                     
            
        )
    }
}

