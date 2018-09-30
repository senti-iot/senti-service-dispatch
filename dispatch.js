var mqtt = require('mqtt')

var _clientId = 'senti-dispatcher'


var client = mqtt.connect('mqtt://hive.senti.cloud', {
	clientId: _clientId
})

function dispatch() {
	client.publish('sensor/update', 'now' + _clientId)
	console.log('Dispatching from ', _clientId)
	client.end()
}


/* function dispatch() {
	client.on('connect', function (err) {
			if (!err) {
				client.publish('sensor/update', 'now' + _clientId)
				console.log('Dispatching')
			}
		}
	)
	client.end()
}
 */
module.exports = {
	dispatch: dispatch
}
