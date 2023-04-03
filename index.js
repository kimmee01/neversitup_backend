import express from 'express'
import bodyParser from 'body-parser' // get body JSON
import ApiRouter from './api/index.js'

import cors from 'cors'

// config server
import config from './config.js'
import DB from './lib/db.js'

const app = express()
const port = 3000

const db = new DB(config.db)

app.use(express.static('public'))
app.use(cors())

// config req to send to any ctrl to use it
app.use((req, res, next) => {
  req.config = config
  req.db = db
  next()
})
app.use('/api', bodyParser.json(), ApiRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
