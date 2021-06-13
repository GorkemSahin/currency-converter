import express from 'express'

import {
  serveStatistics,
  serveConversion,
  serveSymbols,
} from '../controllers/conversion.controller'
import {
  conversionValidationRules,
  validate,
} from '../validators/conversion.validator'

const router = express.Router()

router.post('/convert', conversionValidationRules(), validate, serveConversion)

router.get('/statistics', serveStatistics)

router.get('/symbols', serveSymbols)

export default router
