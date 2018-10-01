module.exports = {
	apps: [{
		name: 'senti-service-dispatch',
		script: 'index.js',

		// Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
		args: 'one two',
		instances: 'max',
		autorestart: true,
		watch: true,
		ignore_watch: 'logs/*',
		max_memory_restart: '1G',
		env: {
			NODE_ENV: 'development'
		},
		env_production: {
			NODE_ENV: 'production'
		}
	}],
}

