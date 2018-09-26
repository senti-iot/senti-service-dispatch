#!/usr/bin/env nodejs
var express = require("express")

var app = express()

app.get("/", (req, res, next) => {	
	res.json("Now dispatching service messages")
	console.log("Now dispatching service messages")
})

var port = process.env.PORT || 80

app.listen(port, () => {
	console.log("Server running on port: ", port)
})
