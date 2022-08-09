//import area
const express =require('express');
const { adminRoute } = require('./routes/admin/adminRoute');
const { parentRoute } = require('./routes/parents/parentRoute');
const { studentRoute } = require('./routes/students/studentsRoute');
const { teachersRoute } = require('./routes/teacher/teacherRoute');
const app =express();
require('dotenv').config()

let port=process.env.PORT
app.use('/admin',adminRoute)
app.use('/teacher',teachersRoute)
app.use('/student',studentRoute)
app.use('/parent',parentRoute)
app.listen(port,()=>{
    console.log('server is running on port '+port)
})