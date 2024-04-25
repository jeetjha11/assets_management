const AssetsModel = require("../models/assetsModel")
const cloudinary = require("../util/cloudinary");
const TrandingAssetsModel = require("../models/trandingAssets");



module.exports = {
    addAssets: async (req, res) => {
        console.log(req.body);
        const files = req.files.asset_image
        console.log(files);


        cloudinary.uploader.upload(files.tempFilePath, async (err, data) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    "message": "Error While Uploading Images",
                    "error": err
                })
            }
            console.log(data)
            const assetsModel = new AssetsModel(req.body)
            assetsModel.asset_image = data.url

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
        })



    },
    getAllAssets: async (req, res) => {
        try {
            const page = parseInt(req.query.page) || 1;
            const limit = parseInt(req.query.limit) || 10;
            const skipIndex = (page - 1) * limit;

            const assets = await AssetsModel.find({ status_id: { $nin: [2] } })
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
    },
    getAllTrandingAsset: async (req, res) => {
        try {
            const trandingAssets = await TrandingAssetsModel.find({ status_id: { $nin: [2] } })
            assets_ids = []
            for (let i = 0; i < trandingAssets.length; i++) {
                assets_ids.push(trandingAssets[i].assets_tranding_uuid)
            }

            const assets_data = await AssetsModel.find({ assets_id: { $in: assets_ids } })


            res.status(200).json(assets_data)

        } catch (error) {
            res.status(500).json({
                message: "Internal Server Error",
                error: error,
            });

        }
    },
    addTrandingAssets: async (req, res) => {

        try {
            const assetsModel = new TrandingAssetsModel(req.body)
            const assets = await assetsModel.save();
            res.status(200).json(assets)

        } catch (error) {
            res.status(500).json({
                message: "Internal Server Error",
                error: error,
            });

        }
    }

}