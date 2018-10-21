// Options for MQTT connections and general options

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
		temperature: 'temperature',
		watch: 'watch'
	},
	will: {
		topic: 'optain locally',
		payload: JSON.stringify({ status: 'offline (dead)' }),
		qos: 1,
		retain: true
	},
	mqtt_auth: ''
}

const options = {
	watch_changes: true,
	phone_home: true,
	ping: true,
	ping_interval: 5000,
	logLocale: 'da',
	slackChannel: 'https://hooks.slack.com/services/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',
	versions: {
		watchman_version: '',
		api_version: '1',
		client_version: ''
	}
}

module.exports = { options, mqttOptions }
