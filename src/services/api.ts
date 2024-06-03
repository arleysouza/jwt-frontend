import axios, { AxiosInstance } from "axios";

const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL_SERVER || "",
  headers: {
    "Content-Type": "application/json",
  },
});

// o interceptor de é chamado a cada requisição
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // ou outra forma de obter o token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      return Promise.reject({ message: error.response });
    } else if (error.request) {
      // O servidor não está respondendo
      return Promise.reject({ message: "Servidor inoperante" });
    } else {
      // Algo aconteceu ao configurar a requisição
      return Promise.reject({ message: error.message });
    }
  }
);

export default api;


