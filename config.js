// Configurations and options for Senti services

const mqtt = {
	host: 'mqtt://hive.senti.cloud',
	port: '1883',
	username: '',
	password: '',
	mqttAuth: undefined,
	clientId: undefined,
	keepalive: 60,
	clean: false, // false for persistent sessions
	will: {
		topic: undefined,
		payload: JSON.stringify({ status: 'offline (dead)' }),
		qos: 1,
		retain: true
	},
	topics: {
		roots: {
			watchman: 'senti/services/watchman/',
			client: 'senti/sensor/'
		},
		comms: {
			cmd: 'cmd',
			data: 'data',
			status: 'status',
			temperature: 'temperature',
			watch: 'watch'
		}
	}
}

const ext = {
	logLocale: 'da',
	versions: {
		watchmanVersion: '',
		clientVersion: '',
		apiVersion: '1'
	}
}

const server = {
	serverTitle: 'Senti Watchman',
	port: 3001
}

const watch = {
	watchChanges: true,
	phoneHome: true
}

const services = {
	mqtt: mqtt,
	ext: ext,
	watchman: 'senti-watchman.service',
	client: 'senti-mqtt-client.service',
	ping: true,
	pingInterval: 5000,
	slack: {
		channel: 'https://hooks.slack.com/services/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',
		baseURL: 'https://hooks.slack.com/services/',
		token: 'T1GKW3Y83/BD4HVLDA8/IAP9iIxvy5tpO7Sv8AjZGVkx'
	},
}

var config = {
	server: server,
	watch: watch,
	services: services
}

module.exports = config


console.dir(config, { depth: null })