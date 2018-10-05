#!/usr/bin/env nodejs
const dispatch = require("./dispatch").dispatch

var express = require("express")
const bodyParser = require('body-parser')

const options = require('./options').options

const apiVersion = '1'

var port = process.env.PORT || 3000

var app = express()

app.use(bodyParser.json()) // support json encoded bodies
app.use(bodyParser.urlencoded({ // support encoded bodies
    extended: true,
}))

app.set('json')

// Routes will go here

// GET route to force dispatch through browser
app.get("/dispatch", (req, res, next) => {	
    res.send('OK')
    const data = req.body
    console.log("GET")
	dispatch()
})

// GET route to return current API version
// GET route for API version - http://services.senti.cloud/api
app.get('/api', (req, res) => {
	res.json(apiVersion)
	console.log("GET /api")
})


// GET route for API version - http://services.senti.cloud/api/1
app.get('/api/:version', (req, res) => {
	res.send(req.params.version)	
	console.log("GET /api/:version ")
})

// GET route for options http://services.senti.cloud/api/1/options
app.get('/api/:version/options', (req, res) => {
	// res.setHeader('Content-Type', 'application/json')
	// res.send(JSON.stringify(options, null, 3))
	// res.json(options)
	
	switch (req.params.version) {
		case 'v1':
		case '1':
		case 'version1':
		case '1.0':
			res.json(options)
			break
		case '2':
			res.send(`Version ${req.params.version} not supported`) 
			break
		case '3':
			res.send(`Version ${req.params.version} not supported`)
			break
		default:
			res.send(`Version ${req.params.version} not supported`) 
			break
	}

	console.log(`GET /api/${req.params.version}/options`)
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
