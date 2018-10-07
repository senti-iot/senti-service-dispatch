var mqtt = require('mqtt')

var clientId = 'senti-service-dispatch'


var client = mqtt.connect('mqtt://hive.senti.cloud')

client.on('connect', function () {
})

client.on("error", function (error) {
	console.log("ERROR: ", error)
})


const dispatch = () => {
	client.publish('sensor/update', 'now')
	console.log('Dispatching from ', clientId)
}


module.exports = dispatch
