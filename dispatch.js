var mqtt = require('mqtt')

var _clientId = 'senti-dispatcher'


var client = mqtt.connect('mqtt://hive.senti.cloud', {
	clientId: _clientId
})

/* function dispatch() {
	client.publish('sensor/update', 'now' + _clientId)
	console.log('Dispatching from ', _clientId)
}
 */

function dispatch() {
	client.on('connect', function() {
		client.publish('sensor/update', 'now' + _clientId)
		console.log('Dispatching from ', _clientId)
	})
	client.end()
}


module.exports = {
	dispatch: dispatch
}
