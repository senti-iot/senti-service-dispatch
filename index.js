#!/usr/bin/env nodejs
var express = require("express")

var app = express()

app.get("/dispatch", (req, res, next) => {
	// res.json(["Christian", "Mikkel", "Andrei", "Martin", "Henrik"])
	res.json("Now dispatching service messages")
	console.log("Now dispatching service messages")
})

const port = 3001

app.listen(port, () => {
	console.log("Server running on port: ", port), 'localhost'
})
