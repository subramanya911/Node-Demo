const { StudentModel } = require('../models/studentModel');
const demoApi=async(req,res)=>{
    try {
        let data = req.body;
        const demoData = new StudentModel(data);
        const demo = await demoData.save(data);
        if (!demo) {
            res.status(500).json({ success: false, message: `Failed to create product`});
            return ;
         }
          res.status(200).json(data);
    }
    catch(err){
        res.status(500).json({ success: false, message: `Failed to create product`});
        return;
    }
}

module.exports= {
    demoApi
}