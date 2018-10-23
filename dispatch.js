var mqtt = require('mqtt')

var clientId = 'senti-service-dispatch'


var client = mqtt.connect('mqtt://hive.senti.cloud')

client.on('connect', () => {
})

client.on("error", (error) => {
	console.log("ERROR: ", error)
})


const dispatch = () => {
	// Updates all clients running senti-mqtt-client service
	client.publish('senti/services/mqttclient/update', 'now')
	console.log('Dispatching MQTT Client update from ', clientId)
}

module.exports = dispatch
