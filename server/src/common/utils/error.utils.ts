import { ErrorRequestHandler, RequestHandler } from 'express'

export const notFoundHandler: RequestHandler = (_, res, next) => {
  const error = new Error('Not found.')
  res.status(404)
  next(error)
}

export const errorHandler: ErrorRequestHandler = (error, _, res) => {
  res.status(error.status || 500).json({
    error: {
      ...error,
      message: error?.message || 'Something went wrong.',
    },
  })
}
