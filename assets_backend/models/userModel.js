const { number } = require('joi');
const mongoose = require('mongoose');

const {v4:uuidv4}=require('uuid');
const {createdStatus}=require('./Status');



const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    gender: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
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
    status_id: {
        type: 'Number',
        required: true,
        default: ()=>createdStatus()
    },
    assets: {
        type: [],
        required: false,
        default: []
    },
    user_id: {
        type: String,
        required: false,
        default: ()=>uuidv4(),
        unique: true
    },
    role: {
        type: String,
        required: true,
        default: process.env.USER_ROLE_ID
    }

})

const User = mongoose.model('User', userSchema)

module.exports = User;