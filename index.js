#!/usr/bin/env nodejs
var express = require("express")
const bodyParser = require('body-parser')

var port = process.env.PORT || 3000

var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}))

app.get("/dispatch", (req, res, next) => {	
    // res.json("Now dispatching service messages")
    res.send('OK')
    const theData = req.body;
    console.log("Now dispatching service messages")
    console.log(theData)
})

app.post("/dispatch", (req, res, next) => {	
	// res.json("Now dispatching service messages")
    res.send('OK')
    const theData = req.body;
	console.log("Now dispatching service messages")
    console.log(theData)
})

app.listen(port, () => {
    console.log("Server running on port: ", port)
    console.log(`Server running on port: ${port}. Started ${new Date().toString()}`)
})




/* var http = require('http')

http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'text/plain' })
	res.end('Hello World\n')
}).listen(8080, 'localhost')
console.log('Server running at http://localhost:8080/')

 */
