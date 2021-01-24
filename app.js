const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

// REQUIRING THE MODEL
const Person = require('./models/Person')

const app = express()

// CONNECTING TO THE DB
mongoose.connect(
    process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    console.log('db is connected')
)

// Create and Save a Record of a Model 
let mahmoud = new Person({ name: "Mahmoud Joma", age: 24, favoriteFoods: ['Burger', 'Fries', 'Fast Food', 'anything not healthy'] })

mahmoud.save((data, err) => {
    try {
        console.log(data)
    } catch (err) {
        console.log({ message: err })
    }
})




// LISTENING TO THE SERVER ON 3000 PORT
app.listen(3000, (err) => {
    if (err)
        console.log(err)
    else
        console.log('server connected on 3000')
})