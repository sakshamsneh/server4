const mongoose = require('mongoose');
var orderSchema=mongoose.Schema({
  userid:{type: String, required:true},
  fid:{type: String, required:true},
  count:{type: Number, required:true},
  tcost:{type: Number, required:true},
  date:{type: Date, required:true},
});
var Order=mongoose.model('Order',orderSchema);
module.exports = { Order };