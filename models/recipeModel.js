const mongoose = require('mongoose');
const bcrypt=require('bcryptjs')

const Schema = mongoose.Schema;

const recipeSchema = new Schema({

    Recipe_name: {
        type : String,
        required:true
    },
    Ingredients:{
        type: String,
        required:true,

    },
    Description:{
        type: String,
        required:true
    },

})

const recipe = mongoose.model("recipe",recipeSchema)

module.exports = recipe;