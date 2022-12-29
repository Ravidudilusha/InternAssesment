const express = require("express");
const mongoose = require("mongoose");
const bodyParser= require("body-parser");
const cors = require('cors');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});




const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb connection success!");
});

const RecipeRouter = require("./routes/createrecipe.js");

const recipe=require("./routes/recipe.js");




app.use("/",RecipeRouter);

app.use("/",recipe)

app.use(express.json());


app.listen(PORT, () => {
    console.log(`server is up and running on port number : ${PORT}`)
});
