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
    if (error.response && error.response.status === 401) {
      // Tratar erros de autenticação, como redirecionar para a página de login
      console.error("Unauthorized access - redirecting to login");
      // Redirecione para a página de login ou faça outra ação apropriada
    }
    return Promise.reject(error);
  }
);

export default api;


