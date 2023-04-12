import axios from 'axios';

axios.defaults.baseURL = 'https://slim-mom-backend-tf5k.onrender.com/api';

export const setToken = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const unsetToken = () => {
  axios.defaults.headers.common.Authorization = '';
};
