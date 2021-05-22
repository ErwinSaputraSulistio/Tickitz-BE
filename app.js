// first set-ups (require)
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT
const route = require('./files/routes')

// app - settings
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(morgan('dev'))
app.listen(port, '127.0.0.1', () => { console.log('Server telah di-aktivasi dengan port ' + port) })

// routers
app.use('/v1', route)
app.use('/img/avatar', express.static('./uploads/images/avatars'))
app.use('/img/movie', express.static('./uploads/images/movies'))