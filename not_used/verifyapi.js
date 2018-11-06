const verifyAPIVersionAndSend = (version, payload) => {
	switch (version) {
		case 'v1':
		case '1':
		case 'version1':
		case '1.0':
			res.json(payload)
			console.log(`GET /api/${req.params.version}/${payload}`)
			console.log('Caller id: ', req.headers.clientid)
			break
		case '2':
			res.send(`Version ${version} not supported`)
			break
		case '3':
			res.send(`Version ${version} not supported`)
			break
		default:
			res.send(`Version ${version} not supported`)
			break
	}
}

const verifyAPIVersion = (version) => {	
	switch (version) {
		case 'v1':
		case '1':
		case 'version1':
		case '1.0':
			return true
		default:
			console.log(`API version ${version} not supported`)
			return false
	}
}
