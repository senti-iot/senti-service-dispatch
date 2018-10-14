// Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/

module.exports = {
	apps: [{
		name: 'senti-service-dispatch',
		script: 'index.js',
		args: 'one two',
		instances: 1,
		// instances: 'max',
		exec_mode: 'fork',
		autorestart: true,
		watch: true,
		ignore_watch: 'logs/*',
		max_memory_restart: '1G',
	}],
}
