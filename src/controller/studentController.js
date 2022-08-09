let studentDataLogic=(req,res)=>{
    let data2={
        name:"Anjali",
        surname:'Mahawar',
        class:"12th",
        rollno:"04"
    }
    res.json(data2)

}
exports.studentDataController=studentDataLogic;