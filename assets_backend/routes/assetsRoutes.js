const express=require('express');
const { addAssets, getAllAssets, getAssetsByid,updateAssets,deleteAssetById} = require('../controller/assetsController');
const { IsAuthenticated, IsAdmin } = require('../middileweres/auth');
const { ValidateAssetsData } = require('../validators/assetsValidators');



const assetsRoutes=express.Router();


assetsRoutes.post('/assets',ValidateAssetsData,IsAdmin,IsAuthenticated,addAssets)
assetsRoutes.get('/assets',IsAuthenticated,getAllAssets)
assetsRoutes.get('/assets',IsAuthenticated,getAssetsByid)
assetsRoutes.put('/assets',IsAuthenticated,updateAssets)
assetsRoutes.post('/assets',IsAuthenticated,deleteAssetById)





module.exports=assetsRoutes
