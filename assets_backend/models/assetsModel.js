const { string } = require('joi')
const mongoose = require('mongoose')
const { createdStatus } = require('./Status.js')
const {v4:uuidv4}=require('uuid');



const Schema = mongoose.Schema

const AssetsSchema = new Schema({
    assets_name: {
        type: String,
        required: true,
        nullable: false
    },
    asset_type: {
        type: String,
        required: true,
        nullable: false,
    },
    asset_description: {
        type: String,
        required: true,
        nullable: false,
    },
    asset_price: {
        type: Number,
        required: true,
        nullable: false,
    },
    asset_model: {
        type: String,
        required: true,
        nullable: false,
        unique: true,
    },
    asset_quantity: {
        type: Number,
        required: true,
        nullable: false,
    },
    assets_tenured: {
        type: String,
        required: true,
        nullable: false,
    },
    status_id: {
        type: Number,
        required: true,
        nullable: false,
        default: () => createdStatus()
    },
    asset_image: {
        type: String,
        required: false,
        nullable: false,
    },
    asset_category: {
        type: String,
        required: true,
        nullable: false,
    },
    assets_ratings: {
        type: Number,
        required: true,
        nullable: false,
        default: 0
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
    assets_id: {
        type: String,
        required: false,
        default: () => uuidv4(),
        unique: true
    },



})

const AssetsModel = mongoose.model('AssetsModel', AssetsSchema)

module.exports = AssetsModel;