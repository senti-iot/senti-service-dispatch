#!/usr/bin/env nodejs
var express = require("express")

var port = process.env.PORT || 3000

var app = express()

app.get("/dispatch", (req, res, next) => {	
	res.json("Now dispatching service messages")
	console.log("Now dispatching service messages")
})

app.post("/dispatch", (req, res, next) => {	
	res.json("Now dispatching service messages")
	console.log("Now dispatching service messages")
})


app.listen(port, () => {
	console.log("Server running on port: ", port)
})




/* var http = require('http')

http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' })
	res.end('Hello World\n')
}).listen(8080, 'localhost')
console.log('Server running at http://localhost:8080/')

 */
