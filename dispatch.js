var mqtt = require('mqtt')

var _clientId = 'senti-dispatcher'


var client = mqtt.connect('mqtt://hive.senti.cloud')

client.on('connect', function () {
})

client.on("error", function (error) {
	console.log("ERROR: ", error)
})


function dispatch() {
	client.publish('sensor/update', 'now')
	console.log('Dispatching from ', _clientId)
}


module.exports = {
	dispatch: dispatch
}
