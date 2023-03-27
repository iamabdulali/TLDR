require('dotenv').config()

const express = require('express')


// express app
const app = express()

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.get('/', (req, res) => {
    res.json({mssg: 'Welcome to the app'})
})

// listen for requests, process.env.PORT is a way of referencing our port number which is sensitive information when we push this to the cloud
app.listen(process.env.PORT, () => {
    console.log('listening on port 4000!!!', process.env.PORT)
})