import React, { Component, useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

class LandingPage extends Component {
render(){
    return (
        <div>
         <h1>First page</h1>
         <Link to='/login'>
         <button type="submit" className="btn btn-danger" >Login</button>
         
         </Link>
         </div>

      )
}
}

export default LandingPage