import axios from 'axios';

const baseUrl = 'https://wd4782151544jfcwop.wilddogio.com/';

export default function Request(url, params) {
  return axios({
    baseURL: baseUrl,
    url: url,
    method: 'get',
    ...params
  });
}
