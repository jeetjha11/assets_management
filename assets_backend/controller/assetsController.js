const AssetsModel = require("../models/assetsModel")



module.exports = {
    addAssets: async (req, res) => {
        const assetsModel = new AssetsModel(req.body)
        try {
            const assets = await assetsModel.save()
            res.status(200).json(assets)
        }
        catch (error) {
            res.status(500).json({
                "message": "Internal Server Error",
                "error": error
            })
        }

    },
    getAllAssets : async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skipIndex = (page - 1) * limit; 

            const assets = await AssetsModel.find({status_id: { $nin: [2] }})
                .skip(skipIndex)
                .limit(limit);

            res.status(200).json(assets);
        } catch (error) {
            res.status(500).json({
                message: "Internal Server Error",
                error: error,
            });
        }
    },
    getAssetsByid: async (req, res) => {
        try {
            const assets = await AssetsModel.findById(req.params.id)
            res.status(200).json(assets)
        }
        catch (error) {
            res.status(500).json({
                "message": "Internal Server Error",
                "error": error
            })
        }
    },
    updateAssets: async (req, res) => {
        try {
            const assets = await AssetsModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
            res.status(200).json(assets)
        }
        catch (error) {
            res.status(500).json({
                "message": "Internal Server Error",
                "error": error
            })
        }
    },
    deleteAssetById: async (req, res) => {
        try {
            const assets = await AssetsModel.findByIdAndDelete(req.params.id)
            res.status(200).json(assets)
        }
        catch (error) {
            res.status(500).json({
                "message": "Internal Server Error",
                "error": error
            })
        }
    }

}