// Configurations and options for Senti services

var config = {
	mqttConnect: {
		host: 'mqtt://hive.senti.cloud',
		port: '1883',
		username: '',
		password: '',
		mqttAuth: undefined,
		clientId: undefined,
		keepalive: 60,
		clean: false // false for persistent sessions
	},
	mqttWillWatchman: {
		topic: undefined,
		payload: JSON.stringify({ status: 'offline (dead)' }),
		qos: 1,
		retain: true
	},
	mqttWillClient: {
		topic: undefined,
		payload: JSON.stringify({ status: 'offline (dead)' }),
		qos: 1,
		retain: true
	},
	mqttRootTopics: {
		watchman: 'senti/services/watchman',
		client: 'senti/sensor',
		api: 'senti/services/api'
	},
	mqttPubSubTopics: {
		cmd: 'cmd',
		data: 'data',
		state: 'state',
		update: 'update',
		watch: 'watch'
	},
	server: {
		serverTitle: 'Senti Watchman',
		port: 3001
	},
	services: {
		watchman: 'senti-watchman.service',
		client: 'senti-mqtt-client.service',
		ping: true,
		pingInterval: 3000
	},
	watch: {
		watchChanges: true,
		phoneHome: true
	},
	slack: {
		channel: 'https://hooks.slack.com/services/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',
		baseURL: 'https://hooks.slack.com/services/',
		token: 'T1GKW3Y83/BD4HVLDA8/IAP9iIxvy5tpO7Sv8AjZGVkx'
	},
	versions: {
		watchmanVersion: '', // add getVersion
		clientVersion: '', // add getVersion
		apiVersion: '1'
	},
	aux: {
		logLocale: 'da'
	}
}

module.exports = config

// console.dir(config, { depth: null })