const express =require('express');
const { parentDataController } = require('../../controller/parentsController');
const parentRoute=express.Router();


parentRoute.post('/parents_data',parentDataController)
//export
module.exports={parentRoute}