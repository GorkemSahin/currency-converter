import ConversionModel from '../models/conversion.model'
import { Conversion } from '../services/conversion.service'

export const createAndSaveConversion = async (conversion: Conversion) => {
  return await ConversionModel.create(conversion)
}

export const getTotalAmountOfConversions = async () => {
  const [{ usdTotal }] = await ConversionModel.aggregate([
    {
      $group: {
        _id: null,
        usdTotal: { $sum: '$usdResult' },
      },
    },
  ])
  return usdTotal
}

export const getMostPopularCurrency = async () => {
  const [
    {
      _id: { currency },
    },
  ] = await ConversionModel.aggregate([
    {
      $match: {
        result: { $exists: true },
      },
    },
    {
      $group: {
        _id: {
          currency: '$to',
        },
        count: { $sum: 1 },
      },
    },
    {
      $sort: { count: -1 },
    },
    {
      $limit: 1,
    },
  ])
  return currency
}

export const getNoOfConversions = async () => {
  const [{ noOfConversions }] = await ConversionModel.aggregate([
    {
      $match: {
        result: { $exists: true },
      },
    },
    {
      $group: {
        _id: null,
        noOfConversions: { $sum: 1 },
      },
    },
  ])
  return noOfConversions
}
