let adminDataLogic=(req,res)=>{
    res.json({
        msg:"hello from admin data",

    })

}
let adminWorkLogic=(req,res)=>{
    res.json({
        msg:"hello from admin works"
    })
}
//2. exports.something = somelogic
exports.adminDataController = adminDataLogic;
exports.adminWorkController=adminWorkLogic