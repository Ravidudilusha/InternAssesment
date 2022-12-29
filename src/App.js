import React from 'react'
import {Routes,Route,Navigate} from 'react-router-dom'
import AddRecipes from "./components/AddRecipes"
import AllRecipes from "./components/AllRecipes";

import EditRecipe from "./components/EditRecipe";

import Header from './components/Header';
function App() {
    return <Routes>
      <Route path='/' element={<Navigate to='/home'/>}/>
      <Route path="/add" element={<AddRecipes />}></Route>
      <Route path="/home" element={<AllRecipes />}></Route>
      <Route path="/update/:id" element={<EditRecipe />}></Route>
      
    

  </Routes>
}

export default App