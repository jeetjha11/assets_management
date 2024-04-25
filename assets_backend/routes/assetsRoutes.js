const express=require('express');
const { addAssets, getAllAssets,addTrandingAssets,getAllTrandingAsset, getAssetsByid,updateAssets,deleteAssetById} = require('../controller/assetsController');
const { IsAuthenticated, IsAdmin } = require('../middileweres/auth');
const { ValidateAssetsData } = require('../validators/assetsValidators');
const validateTrandingAssetsid = require('../validators/trandingAssetsIdValidator');



const assetsRoutes=express.Router();


assetsRoutes.post('/assets',ValidateAssetsData,IsAdmin,IsAuthenticated,addAssets)
assetsRoutes.get('/assets',IsAuthenticated,getAllAssets)
assetsRoutes.get('/assets',IsAuthenticated,getAssetsByid)
assetsRoutes.put('/assets',IsAuthenticated,updateAssets)
assetsRoutes.post('/assets',IsAuthenticated,deleteAssetById)

assetsRoutes.post('/tranding_assets',IsAdmin,validateTrandingAssetsid,IsAuthenticated,addTrandingAssets)
assetsRoutes.get('/tranding_assets',getAllTrandingAsset)







module.exports=assetsRoutes
