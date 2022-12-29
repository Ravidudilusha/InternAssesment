const asyncHandler=require('express-async-handler');
const Recipe=require('../models/recipeModel');
const JWT_SECRET="ravidu1234"

const createrecipe =asyncHandler(async(req,res)=>{
    const {Recipe_name,Ingredients,Description}=req.body;
    

    const recipe=await Recipe.create({
        Recipe_name,
        Ingredients,
        Description,
    });

        if(recipe){
            res.status(201).json({
                _id:Recipe._id,
                Recipe_name:Recipe.Recipe_name,
                Ingredients:Recipe.Ingredients,
                Description:Recipe.Description,
            });
        }else{
            res.status(400)
        throw new Error('Error occured!');
        }
});


module.exports={createrecipe};