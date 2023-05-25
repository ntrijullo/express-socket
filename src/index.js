const express = require('express')
const path = require('path')
const socketio = require('socket.io')
const app = express()
const http = require('http')

app.set('port', 3000)
app.use(express.static(path.join(__dirname, 'public')))

//socket io conf 
const server = http.createServer(app)
const io = socketio(server)
require('./socket')(io)
server.listen(app.get('port'), ()=>{
    console.log('App en puerto '+app.get('port'))
})