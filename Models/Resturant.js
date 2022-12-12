const mongoose =require('mongoose');

const FoodSchema = new mongoose.Schema({
          Foodname:String,
          Foodprice:Number

})
module.exports =mongoose.model("Food",FoodSchema);