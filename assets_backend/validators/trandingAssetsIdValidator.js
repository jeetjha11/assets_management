const trandeingAssetsModel= require('../models/assetsModel');


const validateTrandingAssetsid=(req,res,next) => {

    try{
        const id = req.body.assets_tranding_uuid;
        console.log("id",id);
        trandeingAssetsModel.find({ assets_id: { $in: [id] } })

       .then(assets => {
        console.log(assets);
        if(assets.length > 0){
            next();
        }
        else{
            res.status(404).json({
                message: "Invalid Assets Id",
            });
        }
        })
       .catch(error => {
        res.status(500).json({
            message: "Internal Server Error",
            error: error,
        });
        });

    }
    catch(error){
        res.status(500).json({
            message: "Internal Server Error",
            error: error,
        });
    }
   
}

module.exports = validateTrandingAssetsid