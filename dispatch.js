var mqtt = require('mqtt')

var _clientId = 'senti-dispatcher'


var client = mqtt.connect('mqtt://hive.senti.cloud')

/* function dispatch() {
	client.publish('sensor/update', 'now' + _clientId)
	console.log('Dispatching from ', _clientId)
}
 */

function dispatch() {
	client.on('connect', function () {
		console.log('Dispatching from ', _clientId)
		client.subscribe('sensor/update', function (err) {
			if (!err) {
				client.publish('sensor/update', 'now')
				console.log('Dispatching from ', _clientId)
			} else console.log('Error')
		})
	})



/* 	client.on('connect', function() {
		client.publish('sensor/update', 'now')
		console.log('Dispatching from ', _clientId)
	})
	// client.end() */
	
}


module.exports = {
	dispatch: dispatch
}
