const express = require("express")
var app = express()
const cors = require('cors')
const carouselList = require("./utils/slider.json");
app.use(cors({ origin: true }))
app.get("/", function (request, response) {
    response.send("Hello World!")
})

app.get("/api/carousel", function (request, response) {
    const { query } = request

    const slides = carouselList?.slides?.slice(0, parseInt(query.slides))

    response.send({ slides })
})

// const api = require('./api')

// app.use('/api', api)

app.listen(3600, function () {
    console.log("Started application on port %d", 3600)
});