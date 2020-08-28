import axios from 'axios';

const API_KEY = 'a57fd54e1d2044b4ae863603202808';

const instance = axios.create({
    headers: {
        accept: 'application/json',
        'content-type': 'application/json'
    }
})

instance.interceptors.request.use(config => {
    config.params = {...config.params};
    return config;
    }, error => {
      return Promise.reject(error);
  });

export default {
    get: ({ params, city, days }) => instance.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${days}`),
    post: ({ params, city, days }) => instance.post(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=${days}`)
};