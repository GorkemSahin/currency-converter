const { body, validationResult } = require('express-validator')

const conversionValidationRules = () => {
  return [
    body('from', 'Specify the source currency.').exists(),
    body('to', 'Specify the destination currency.').exists(),
    body('amount', 'Please enter a valid amount.').isNumeric(),
  ]
}

const validate = (req, res, next) => {
  console.log(req)
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }))
  next({
    extractedErrors,
    message: 'Validation error. Check your input.',
  })
}

module.exports = {
  conversionValidationRules,
  validate,
}
