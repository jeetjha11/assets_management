const joi = require("joi");
const AssetsModel = require("../models/assetsModel");

const ValidateAssetsData = (req, res, next) => {

  const Schema = joi.object({
    assets_name: joi.string().required(),
    asset_type: joi.string().required(),
    asset_description: joi.string().required(),
    asset_price: joi.number().required(),
    asset_model: joi.string().required(),
    asset_quantity: joi.number().required(),
    assets_tenured: joi.string().required(),
    status_id: joi.number(),
    asset_image: joi.string(),
    asset_category: joi.string().required(),
  });
  const { error, value } = Schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();

}

module.exports = {
  ValidateAssetsData
}