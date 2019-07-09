const mongoose = require('mongoose');
var userSchema=mongoose.Schema({
  name:{type: String, required:true},
  email:{type: String, unique:true, required:true},
  pass:{type: String, minLength:8, required:true},
  city:{type: Number, required:true},
  pin:{type: Number, minLength: 6, required:true},
});
var User=mongoose.model('User',userSchema);
module.exports = {Food};