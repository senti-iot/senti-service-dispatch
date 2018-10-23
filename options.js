// Options for MQTT connections and general options

const mqttOptions = {
	host: 'mqtt://hive.senti.cloud',
	port: '1883',
	username: '',
	password: '',
	keepalive: 60,
	clientId: undefined,
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
		topic: undefined,
		payload: JSON.stringify({ status: 'offline (dead)' }),
		qos: 1,
		retain: true
	},
	mqtt_auth: undefined
}

const options = {
	watch_changes: true,
	phone_home: true,
	ping: true,
	ping_interval: 5000,
	logLocale: 'da',
	slackChannel: 'https://hooks.slack.com/services/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',
	slackBaseURL: 'https://hooks.slack.com/services/',
	slackToken: 'T1GKW3Y83/BD4HVLDA8/IAP9iIxvy5tpO7Sv8AjZGVkx',
	versions: {
		watchman_version: '',
		api_version: '1',
		client_version: ''
	}
}

const server = {
	server_title: 'Senti Watchman',
	port: 3001
}

const watch = {
	watch_changes: true,
	phone_home: true
}

const services = {
	mqttOptions: mqttOptions,
	options: options,
	watchman_service: 'senti-watchman.service',
	client_service: 'senti-mqtt-client.service'
}

var config = {
	server: server,
	watch: watch,
	services: services
}

module.exports = { options, mqttOptions, config }
