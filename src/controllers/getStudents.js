const { StudentModel } = require('../models/studentModel');

const getdemoApi =async(req,res)=>{
    try{
        const demo = await StudentModel.find().lean();
        if (!demo) {
            res.status(500).json({ success: false, message: `Failed to create product`});
            return ;
          }
          res.status(200).json(demo);
    }
    catch(err){
        res.status(500).json({ success: false, message: `Failed to create product`});
        return;
    }
}

module.exports= {
    getdemoApi
}