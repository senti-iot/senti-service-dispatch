// GET route for options https://services.senti.cloud/api/1/options
app.get('/api/:version/options', (req, res) => {
	// verifyAPIVersionAndSend(req.params.version, options)
	switch (req.params.version) {
		case 'v1':
		case '1':
		case 'version1':
		case '1.0':
			res.json(options)
			console.log(`GET /api/${req.params.version}/options`)
			console.log('Caller id: ', req.headers.clientid)
			break
		case '2':
			res.send(`Version ${req.params.version} not supported`)
			break
		case '3':
			res.send(`Version ${req.params.version} not supported`)
			break
		default:
			res.send(`Version ${req.params.version} not supported`)
			break
	}
})

// GET route for MQTT options https://services.senti.cloud/api/1/mqttoptions
app.get('/api/:version/mqttoptions', (req, res) => {
	// verifyAPIVersionAndSend(req.params.version, mqttOptions)
	switch (req.params.version) {
		case 'v1':
		case '1':
		case 'version1':
		case '1.0':
			res.json(mqttOptions)
			console.log(`GET /api/${req.params.version}/mqttoptions`)
			console.log('Caller id: ', req.headers.clientid)
			break
		case '2':
			res.send(`Version ${req.params.version} not supported`)
			break
		case '3':
			res.send(`Version ${req.params.version} not supported`)
			break
		default:
			res.send(`Version ${req.params.version} not supported`)
			break
	}
})
