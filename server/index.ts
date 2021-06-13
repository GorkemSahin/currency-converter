import express from 'express'
import { config } from './src/common/config/env.config'
import bodyParser from 'body-parser'
import cors from 'cors'
import conversionRoutes from './src/conversion/routes/conversion.routes'
import { errorHandler, notFoundHandler } from './src/common/utils/error.utils'
import path from 'path'
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '../app/build')))
app.use(express.static('public'))

app.use('/conversion', conversionRoutes)

app.use(notFoundHandler)

app.use(errorHandler)

app.listen(config.port, function () {
  console.log('Server started working with the following config: ', config)
})
