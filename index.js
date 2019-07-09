const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db.js');
const cors = require('cors');

var foodController = require('./controllers/foodController.js');
var app = express();
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));//links to angular running at 4200, as origin link
app.use('/foods', foodController);
app.listen(3000, () => console.log('Server started at port : 3000'));