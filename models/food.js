const mongoose = require('mongoose');
var Food = mongoose.model('Food',{
  img: { type: String },
	title: { type: String },
	desc: { type: String },
	cost: { type: Number },
  count: { type: Number },
  category_id: { type: String },
});
module.exports = { Food };