import axios from 'axios';

const API_HOST = 'https://api.boomset.com/';
const TOKEN = 'ed56d8f5cbc4f810ff1a7a5ccb7af8e6';

const httpBase = () => {
  const api = axios.create({
    baseURL: API_HOST,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Token  ${TOKEN}`,
    },
  });

  api.interceptors.response.use((response) => response, (error) => Promise.reject(error));

  return api;
};

export const getReq = (endpoint) => httpBase()
  .get(endpoint);

export default { getReq };
