import path from 'path'
import debug from 'debug'
import express from 'express'
import cors from 'cors'

import conf from '../conf/conf'
import render from './render'

const log = debug('express')
const app = express()

const { port } = conf

app.use(cors())
app.use('/static/', express.static(path.resolve(__dirname, '../public/static')))

app.get('/*', (req, res) => {
  res.send(
    render({
      location: req.url,
    }),
  )
})

app.listen(port, () => {
  log(`App is listening port ${port}`)
})
