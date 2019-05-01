const express = require('express')
const proxy   = require('express-http-proxy')

const app = express()

// Server
app.use(express.static(__dirname + '/dist'))

// Proxy
app.use('/api', proxy('https://api-v3.igdb.com'))
app.use('/image', proxy('https://images.igdb.com/igdb/image/upload', {
  proxyReqPathResolver(req) {
    return `https://images.igdb.com/igdb/image/upload${req.url}`
  }
}))

// Start
app.listen('8080', () => console.log('Server up on port 8080...'))