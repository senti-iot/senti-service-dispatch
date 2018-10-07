// console.log = () => {}  //Uncomment for production
const execFile = require('child_process').execFile

const execCmd = (cmd, args) => {
	let res
	var child = execFile(cmd, [args], (error, stdout, stderr) => {
		if (error) {
			console.error('stderr', stderr)
			throw error
		}
		res = (stdout)
		// console.log(res)
	})
}

module.exports = execCmd

// execCmd('ls', '-al')