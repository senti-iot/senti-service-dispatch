#!/usr/bin/env nodejs
const dispatch = require("./dispatch").dispatch

var express = require("express")
const bodyParser = require('body-parser')

var port = process.env.PORT || 3000

var app = express()

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ // support encoded bodies
    extended: true,
}))

// Routes will go here

// GET route to force dispatch through browser
app.get("/dispatch", (req, res, next) => {	
    res.send('OK')
    const data = req.body
    console.log("GET")
	dispatch()
})

// GET route for options API call (slashed next arg) http://services.senti.cloud/api/1?options
app.get('/api/:version/options', (req, res) => {
	res.send(req.params.version)
	res.send('Options')
	console.log("GET /api/:version/options ")
})

// POST is intended for the GitHub webhook
app.post("/dispatch", (req, res) => {		
    res.send('OK')
    const data = req.body
	console.log("POST")
	dispatch()
})

// Start the server
app.listen(port, () => {
    console.log(`Server running on port: ${port}. Started ${new Date().toString()}`)
})
