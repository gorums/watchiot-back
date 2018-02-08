const express = require('express')
const app = express()
const { handler } = require('./index')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(handler)

const port = process.env.PORT || '3001'
app.listen(port, () => console.log(`App listening on port ${port}!`))
