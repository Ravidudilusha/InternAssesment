const {application} = require("express");
var express=require("express");
var router=express.Router();
const bcrypt=require("bcryptjs");
const jwt =require("jsonwebtoken");



let recipe = require("../models/recipeModel");


router.get('/get',(req,res) =>{
    recipe.find().exec((err,recipe) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingrecipe:recipe
        });
    });
});



router.put("/update/:id",(req,res) => {
    recipe.findByIdAndUpdate(
    req.params.id,
    {
        $set:req.body
    },
    (err,recipe)=>{
        if(err){
         return res.status(400).json({error:err});
        }
     return res.status(200).json({
        success:"updated successfully"
    });
}
    );
});



router.delete("/delete/:id",(req,res) =>{
    recipe.findByIdAndRemove(req.params.id).exec((err,deletedrecipe)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccesful",err
        });

        return res.json({
            message:"Delete Succesful",deletedrecipe
        });
    });

    
});

router.get("/get/:id",(req,res) =>{
    let recipeid=req.params.id;
    recipe.findById(recipeid,(err,recipe)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }

        return res.status(200).json({
            success:true,
            recipe
    });
});
});


module.exports = router;