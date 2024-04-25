const express = require('express');
const app = express();
require('dotenv').config();
const Port = process.env.PORT
require('./config/dbConnection')
const userRoutes = require('./routes/userRoutes')
const assetsRoutes = require('./routes/assetsRoutes')
const cors = require('cors');
const filesupload=require('express-fileupload')

app.use(cors({
    origin: 'http://localhost:4200',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}));
app.use(express.json());

app.use(filesupload({
    useTempFiles:true
}))

app.use('/v1/user/auth/', userRoutes)
app.use('/v1/assets/', assetsRoutes)






app.listen(Port, () => {
    console.log(`Server is running on  http://127.0.0.1:${Port}/`)
})