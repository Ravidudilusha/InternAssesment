import axios from 'axios';
import React,{ Component} from 'react';
import Header from './Header';

export default class  AddStaff extends Component {


  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      password:"",
      Mobile:"",
      position:""


    }
  }

handleInputChange=(e)=>{
  const {name,value} = e.target;

  this.setState({
    ...this.state,
    [name]:value
    
  })

}

onSubmit=(e) =>{
  e.preventDefault();
  const{name,email,password,Mobile,position} = this.state;

  const data={
    name:name,
      email:email,
      password:password,
      Mobile:Mobile,
      position:position

  }
  console.log(data)
  axios.post('http://localhost:8080/',data).then((res) =>{
    alert("Added Successfully");
    if(res.data.success){
      this.setState(
        {
          name:"",
          email:"",
          password:"",
          Mobile:"",
          position:""
        }
      )
    }
  })
}
  render(){

    return(
        <div className="container">
          <Header/>
            <form >
            <div className="form-group">
          <label className="name">name</label>
          <input type="text" className="form-control" name='name' id="name" placeholder="Enter name" value={this.state.name} onChange={this.handleInputChange} required/>
           </div>
           <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email"  className="form-control" name="email" id="email" placeholder="Enter email" value={this.state.email} onChange={this.handleInputChange} required/>
           </div>
           <div className="form-group">
          <label className="mobilenumber">Mobile number</label>
          <input type="text" className="form-control" name='Mobile' id="Mobile" placeholder="Enter Mobile no" value={this.state.Mobile} onChange={this.handleInputChange} required/>
           </div>
          <div className="form-group">
          <label className="inputPassword">Password</label>
         <input type="password" className="form-control" name='password' id="password" placeholder="Password"value={this.state.password} onChange={this.handleInputChange} required/>
        </div>
        <div className="form-group">
          <label className="status">status</label>
          <input type="text" className="form-control" name='position' id="position" placeholder="Enter status" value={this.state.position} onChange={this.handleInputChange} required/>
           </div>
        
    <button type="submit" className="btn btn-danger" onClick={this.onSubmit}>Submit
    &nbsp;
    </button>
</form>
    </div>
);
 
}
}