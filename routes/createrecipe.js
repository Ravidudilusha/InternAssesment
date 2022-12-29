const express=require('express');
const{ createrecipe}=require('../controllers/recipeController');

const router=express.Router()

router.post("/",createrecipe);



module.exports=router;

