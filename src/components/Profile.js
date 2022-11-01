import axios from "axios";
import React, { Component } from "react";
import { render } from "react-dom";
import Header from "./Header";

export default class Profile extends Component{


componentDidMount(){
    fetch("http://localhost:8080/Profile",{
        method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-Control-Allow-Origin":"*",
        },
        body:JSON.stringify({
            token:window.localStorage.getItem("token"),
        }),
    })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,"Profile");
            this.setState({Profile:data.data})
        });
}

render(){
    return(
        <div>
            <Header/>

        <h2>ravidu</h2>
        </div>
    )
}
}

