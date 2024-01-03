import axios from 'axios';
import {API_URL} from '@env';

const apiCall = (token: string, path: string) => {
  var config = {
    method: 'get',
    url: API_URL + path,
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };

  return axios(config).then(response => {
    return response.data;
  });
};

export default apiCall;
