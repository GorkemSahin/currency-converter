import { RequestHandler } from 'express'
import { body, validationResult } from 'express-validator'

export const conversionValidationRules = () => {
  return [
    body('from', 'Specify the source currency.').exists(),
    body('to', 'Specify the destination currency.').exists(),
    body('amount', 'Please enter a valid amount.').isNumeric(),
  ]
}

export const validate: RequestHandler = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors: { [key: string]: string }[] = []
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }))
  next({
    extractedErrors,
    message: 'Validation error. Check your input.',
  })
}
