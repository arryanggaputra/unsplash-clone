import axios from "axios";

const ApiClient = axios.create();

ApiClient.defaults.headers.common[
  "Authorization"
] = `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`;

ApiClient.defaults.baseURL = `${process.env.REACT_APP_UNSPLASH_API_ENDPOINT}`;

ApiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if (401 === error.response.status) {
    //   window.location.href = `${process.env.ROOT_URL}`;
    // } else {
    // }
    return Promise.reject(error.response);
  }
);

export default ApiClient;
