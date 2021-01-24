const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()


const app = express()




// LISTENING TO THE SERVER ON 3000 PORT
app.listen(3000, (err) => {
    if (err)
        console.log(err)
    else
        console.log('server connected on 3000')
})