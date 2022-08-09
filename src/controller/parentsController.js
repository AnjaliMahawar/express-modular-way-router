let parentDataLogic=(req,res)=>{
    res.status(200).json({
        msg:"hello from parents data",
        fullname:"Dinesh ji Mahawar",
        mobile_no:"7894561236",
        address:"bagicha no. 12 neemuch",

    })
    
}
//export
exports.parentDataController=parentDataLogic;