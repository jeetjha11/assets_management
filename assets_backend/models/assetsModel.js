const { string } = require('joi')
const mongoose = require('mongoose')
const {createdStatus}= require('./Status.js')



const Schema=mongoose.Schema

const AssetsSchema=new Schema({
    assets_name:{
        type:String,
        required:true,
        nullable:false
    },
    asset_type:{
        type:String,
        required:true,
        nullable:false,
    },
    asset_description:{
        type:String,
        required:true,
        nullable:false,
    },
    asset_price:{
        type:Number,
        required:true,
        nullable:false,
    },
    asset_model:{
        type:String,
        required:true,
        nullable:false,
        unique:true,
    },
    asset_quantity:{
        type:Number,
        required:true,
        nullable:false,
    },
    assets_tenured:{
        type:String,
        required:true,
        nullable:false,
    },
    status_id:{
        type:Number,
        required:true,
        nullable:false,
        default:()=>createdStatus()
    },
    asset_image:{
        type:String,
        required:false,
        nullable:false,
    },
    asset_category:{
        type:String,
        required:true,
        nullable:false,
    },
    created_at: {
        type: Date,
        default: new Date(),
        required: true
    },
    updated_at: {
        type: Date,
        required: false,
    },
    deleted_at: {
        type: Date,
        required: false,
    },



})

const AssetsModel=mongoose.model('AssetsModel',AssetsSchema)

module.exports=AssetsModel;