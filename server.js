const express = require('express')
const app = express()

const memberRouter = require('./routes/members')

app.use('/members', memberRouter)

app.listen(8081)