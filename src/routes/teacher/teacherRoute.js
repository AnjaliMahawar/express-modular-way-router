const express=require('express');
const { teacherDataController } = require('../../controller/teacherController');
const teachersRoute= express.Router();
teachersRoute.post('/teacher_data',teacherDataController)
module.exports={teachersRoute}