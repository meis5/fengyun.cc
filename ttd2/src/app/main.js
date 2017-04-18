import path from 'path'
import debug from 'debug'
import express from 'express'
import compression from 'compression'
import cors from 'cors'

import conf from '../conf/conf'
import homeTpl from './templates/homeTpl'

const log = debug('express')
const app = express()

const { port } = conf

app.use(cors())
app.use(compression())
app.use('/static', express.static(path.resolve(__dirname, '../../../public/static')))

app.get('/', (req, res) => {
  res.send(homeTpl)
})

app.listen(port, () => {
  log(`App is listening port ${port}`)
})
