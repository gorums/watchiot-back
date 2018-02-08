require('dotenv').config()
const express = require('express')
const morgan = require('morgan')

const { status } = require('./lib/status')

const app = express()

app.use(morgan('combined'))
app.get('/api/status', status)

module.exports.handler = app
