import axios from 'axios';

export default () => {
  async function get(url = process.env.API_HUBSPOT_HOST, params = null) {
    return await axios({
      baseURL: process.env.API_HUBSPOT_HOST,
      url,
      params,
      headers: {
        Authorization: 'Bearer ' + process.env.API_HUBSPOT_KEY,
        'Content-Type': 'application/json'
      }
    });
  }

  async function post(url = process.env.API_HUBSPOT_HOST, data = null) {
    return await axios({
      method: 'POST',
      baseURL: process.env.API_HUBSPOT_HOST,
      url,
      data,
      headers: {
        Authorization: 'Bearer ' + process.env.API_HUBSPOT_KEY,
        'Content-Type': 'application/json'
      }
    });
  }

  return {
    get,
    post
  };
};
