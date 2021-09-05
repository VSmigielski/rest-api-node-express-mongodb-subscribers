const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

app.use(express.json())

const subscribersRouter = require('./routes/subscribers')
app.use('/subscribers', subscribersRouter)

// localhost:3000/subscribers

app.listen(3000, () => console.log('Server Started'))