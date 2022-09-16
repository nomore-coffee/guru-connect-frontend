import axios from 'axios';

const customAxios = axios.create({
    // baseURL: `${process.env.REACT_APP_API_URL}`,
    baseURL: `http://localhost:8000`,
    timeout: 10000,
});

  export default customAxios;
