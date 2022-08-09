const express =require('express');
const { adminDataController, adminWorkController } = require('../../controller/adminController');
const adminRoute = express.Router();

adminRoute.post('/admin_data',adminDataController)
adminRoute.post('/admin_works',adminWorkController)
module.exports={adminRoute}