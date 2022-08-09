const express=require('express');
const { studentDataController } = require('../../controller/studentController');
const studentRoute=express.Router();
studentRoute.post('/student_data',studentDataController)

module.exports={studentRoute}