import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000', // URL base de tu API
});

// Interceptor para las solicitudes
axiosInstance.interceptors.request.use(
  config => {
    // Puedes realizar modificaciones en la configuración de la solicitud aquí
    return config;
  },
  error => {
    // Manejo de errores para solicitudes
    return Promise.reject(error);
  }
);

// Interceptor para las respuestas
axiosInstance.interceptors.response.use(
  response => {
    // Puedes realizar modificaciones en la respuesta aquí
    return response;
  },
  error => {
    // Manejo de errores para respuestas
    return Promise.reject(error);
  }
);

export default axiosInstance;
