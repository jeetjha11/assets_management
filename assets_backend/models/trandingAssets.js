const mongoose= require('mongoose')
const { createdStatus } = require('./Status')
const {v4:uuidv4}=require('uuid');


const Schema=mongoose.Schema

const TrandingSchema=new Schema({
   
    assets_traiding_date:
    {
        type:Date,
        required:true,
        nullable:false
    },
    created_at:{
        type:Date,
        default:new Date(),
        required:true
    },
    updated_at:{

        type:Date,
        required:false
    },
    deleted_at:{
        type:Date,
        required:false
    },
    status_id:{
        type:Number,
        required:true,
        nullable:false,
        default:()=>createdStatus()
    },
    assets_tranding_uuid:{
        type: String,
        required: false,
        default: ()=>uuidv4(),
        unique: true
    },



})

const TrandingAssets=mongoose.model('Tranding',TrandingSchema)

module.exports=TrandingAssets;