require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const foodroute = require('./Route/food')
const bodyParser=require('body-parser')
const cors = require('cors');

const app = express();
app.use(cors({origin:'*'}));
mongoose.set('strictQuery', false);
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors({origin: '*'}))
mongoose.connect('mongodb://localhost:27017/fooditem')
.catch(err => console.log(err));
// Adding the Models
const  item = require("./Models/Resturant");

// Route
app.use('/', foodroute);



Port = 2610;
app.listen(Port, function(){
    console.log("Server is running on port  "+Port);
});