import axiosInstance from '../utils/axios';

const fetchSymbols = async () => {
  return await axiosInstance.get(`/conversion/symbols`);
};

const fetchConversion = async (query) => {
  return await axiosInstance.get(`/conversion/convert`, { params: query });
};

export default { fetchSymbols, fetchConversion };