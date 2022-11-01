import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import AllFoods from '../pages/AllFoods'
import FoodDetails from '../pages/FoodDetails'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AddStaff from "../components/AddStaff";
import AllStaff from "../components/AllStaff";
import Report from "../components/Report";
import EditStaff from "../components/EditStaff";
import Dashboard from "../pages/Dashboard";
import EReport from '../components/EReport'


import Profile from "../components/Profile";
import { BrowserRouter as Router} from "react-router-dom";
// import './App.css';
import LoginScreen from "../LoginScreen/LoginScreen";
// import LandingPage from "./LandingPage/LandingPage";



const Routers=()=> {
  return <Routes>
    <Route path='/' element={<Navigate to='/homeui'/>}/>
    <Route path='/homeui' element={<Home/>}/>
    <Route path='/foodsui' element={<AllFoods/>}/>
    <Route path='/foodsui/:id' element={<FoodDetails/>}/>
    <Route path='/cartui' element={<Cart/>}/>
    <Route path='/checkoutui' element={<Checkout/>}/>
    {/* <Route path='/loginui' element={<Login/>}/> */}
    <Route path='/registerui' element={<Register/>}/>
    <Route path='/contactui' element={<Contact/>}/>
    {/* <Route path="/" element={<LandingPage/>}></Route> */}
     <Route path="/Home" element={<Home/>}></Route>
     <Route path="/loginui" element={<LoginScreen />}></Route>
      <Route path="/add" element={<AddStaff />}></Route>
      <Route path="/report" element={<Report />}></Route>
      <Route path="/edit" element={<AllStaff />}></Route>
      <Route path="/update/:id" element={<EditStaff />}></Route>
      <Route path="/Profile" element={<Profile />}></Route>
      <Route path="/Dashboard" element={<Dashboard />}></Route>
      <Route path="/EReport" element={<EReport />}></Route>
    

  </Routes>
}

export default Routers