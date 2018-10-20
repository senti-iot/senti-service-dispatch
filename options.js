var os = require('os')
var hostname = os.hostname()

const mqttOptions = {
	host: 'mqtt://hive.senti.cloud',
	port: '1883',
	username: '',
	password: '',
	keepalive: 60,
	clientId: 'optain locally',
	clean: false, // false for persistent sessions
	topic_roots: {
		watchman: 'senti/services/watchman/',
		client: 'senti/sensor/'
	},
	topic_comms: {
		cmd: 'cmd',
		data: 'data',
		status: 'status',
		temperature: 'temperature'
	},
	will: {
		topic: 'optain locally',
		payload: JSON.stringify({ status: 'offline (dead)' }),
		qos: 1,
		retain: true
	}	
}

const options = {
	slackChannel: 'https://hooks.slack.com/services/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',
	logLocale: 'da'
}

module.exports = { options, mqttOptions }
