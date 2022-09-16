import axios from './axioss';

// const customAxios = axios.create({
//     // baseURL: `${process.env.REACT_APP_API_URL}`,
//     baseURL: `http://localhost:8000`,
//     timeout: 10000,
// });

export default function get_logininfo(request) {
    return  axios.post('/auth/authenticating_user', request);
  }
  