import axiosInstance from './axiosInterceptor.js';

console.log("prueba")
axiosInstance.get("/historial")
.then((response) => {
    console.log("response data:", response.data);
});
