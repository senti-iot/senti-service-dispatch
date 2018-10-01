#!/usr/bin/env nodejs
const dispatch = require("./dispatch").dispatch

var express = require("express")
const bodyParser = require('body-parser')

var port = process.env.PORT || 3000

var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}))

// GET route to force dispatch through browser
app.get("/dispatch", (req, res, next) => {	
    res.send('OK')
    const data = req.body
    console.log("GET")
	// console.log(data)
	dispatch()
})

// GET route for API call (slashed next arg) http://services.senti.cloud/api/1
app.get('/api/:version', (req, res) => {
	// res.send('OK')
	res.send(req.params.version)
	const data = req.body
	console.log("GET /api/:version ")
	console.log(data)
	dispatch()
})

// POST is intended for the GitHub webhook
app.post("/dispatch", (req, res) => {		
    res.send('OK')
    const data = req.body
	console.log("POST")
	// console.log(data)
	dispatch()
})

app.listen(port, () => {
    console.log(`Server running on port: ${port}. Started ${new Date().toString()}`)
})
