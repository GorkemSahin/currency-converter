import mongoose from '../../common/services/mongoose.service'
const Schema = mongoose.Schema

const conversionSchema = new Schema({
  date: { type: Date, default: Date.now, index: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  amount: { type: Number, required: true },
  result: { type: Number, required: true },
  usdResult: { type: Number, required: true },
})

const Conversion = mongoose.model('Conversion', conversionSchema)

export default Conversion
