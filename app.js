const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const Person = require('./models/Person')

const app = express()


mongoose.connect(
    process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    console.log('db is connected')
)

// LISTENING TO THE SERVER ON 3000 PORT
app.listen(3000, (err) => {
    if (err)
        console.log(err)
    else
        console.log('server connected on 3000')
})