const express = require('express');
const {
  getStatistics,
  getConversion,
  getSymbols
} = require('../controllers/conversion.controller');
const { conversionValidationRules, validate } = require('../validators/conversion.validator');

const router = express.Router();
  
router.get('/convert', conversionValidationRules(), validate, getConversion);

router.get('/statistics', getStatistics);

router.get('/symbols', getSymbols)

module.exports = router;