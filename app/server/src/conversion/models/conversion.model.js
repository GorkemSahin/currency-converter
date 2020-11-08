const mongoose = require('../../common/services/mongoose.service');
const Schema = mongoose.Schema;

const conversionSchema = new Schema({
  date: { type: Date, default: Date.now, index: true },
  from: String,
  to: String,
  amount: Number,
  result: Number,
  usdResult: Number
});

const Conversion = mongoose.model('Conversion', conversionSchema);

module.exports = Conversion;