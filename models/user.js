const mongoose = require('mongoose');
var userSchema=mongoose.Schema({
  name:{type: String},
  email:{type: String, unique:true},
  pass:{type: String, minLength:8},
  city:{type: Number},
  pin:{type: Number, minLength: 6},
});
var User=mongoose.model('User',userSchema);
module.exports = {Food};