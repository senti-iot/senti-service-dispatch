var os = require('os')
var hostname = os.hostname()

const mqttOptions = {
	host: 'mqtt://hive.senti.cloud',
	port: '1883',
	username: '',
	password: '',
	keepalive: 60,
	clientId: hostname,
	clean: true,
	will: {
		topic: 'sensor/status',
		payload: 'offline',
		qos: 1,
		retain: false
	}	
}

const options = {
	slackChannel: 'https://hooks.slack.com/services/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',
	logLocale: 'da'
}

module.exports = { options, mqttOptions }
