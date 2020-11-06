const config = require('../config/env.config');
const axiosInstance = require('../utils/axios.utils');

const fetchRates = async (from, to) => {
  const symbols = "USD," + to;
  const resp = await axiosInstance.get('/latest', { params: { base: from, symbols }});
  console.log(resp.data)
  return { to: resp.data.rates[to], usd: resp.data.rates["USD"] };
}

module.exports = fetchRates;