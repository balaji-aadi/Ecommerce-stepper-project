import axios from "axios";
import URLS from "./url";

const instance = axios.create({
  baseURL: URLS.baseURL,
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `token ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      // handle error
    } else if (error.response.status === 403) {
      // handle error
    } else if (error.response.status === 401) {
      // handle error
    } else {
      // handle error
    }
    return Promise.reject(error);
  }
);

export default instance;
