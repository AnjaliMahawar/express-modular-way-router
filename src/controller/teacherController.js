let teacherDataLogic=(req,res)=>{
    let data1={
        msg:"hello from teachers data",
        name:"Anjali",
        surname:"Mahawar"
    }
    res.json(data1)
}
////2. exports.something = somelogic
exports.teacherDataController=teacherDataLogic;