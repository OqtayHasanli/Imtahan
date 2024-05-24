const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: String,
  category: String,
  price:Number,
  image:String
});

module.exports = mongoose.model("Post", schema);
