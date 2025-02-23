const http = require('node:http')
const { findAvailablePort } = require('./10.free-port.js')
const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Kaladin Stormblessed')
})

findAvailablePort(3000).then(port => {
    // Callback that will be executed when the server starts listening
    server.listen(port, () => {
        console.log(`Server listening on port http://localhost:${port}`)
      })
})

