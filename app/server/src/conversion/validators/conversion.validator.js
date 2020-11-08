const { query, validationResult } = require('express-validator');

const conversionValidationRules = () => {
  return [ 
    query('from', 'Specify the source currency.').exists(),
    query('to', 'Specify the destination currency.').exists(),
    query('amount', "Please enter a valid amount.").isNumeric()
  ]  
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  conversionValidationRules,
  validate,
}