import axios from 'axios';

export const getCalorieAuthApi = async calcParams => {
  const response = await axios.post('/calorie', calcParams);
  return response.data;
};

export const getCalorieApi = async calcParams => {
  const response = await axios.post('/public', calcParams);
  return response.data;
};
