import { RequestHandler } from 'express'
import { getSymbols } from '../../common/services/exchange.service'
import { convert, prepareStatistics } from '../services/conversion.service'

export const serveConversion: RequestHandler = async (req, res, next) => {
  try {
    const conversion = await convert(req.body)
    res.status(200).send(conversion)
  } catch (e) {
    next(e)
  }
}

export const serveStatistics: RequestHandler = async (req, res, next) => {
  try {
    const statistics = await prepareStatistics()
    res.status(200).send(statistics)
  } catch (e) {
    next(e)
  }
}

export const serveSymbols: RequestHandler = async (req, res, next) => {
  try {
    const symbols = await getSymbols()
    res.status(200).send(symbols)
  } catch (e) {
    next(e)
  }
}
