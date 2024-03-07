import axiosInstance from './axiosInterceptor.js';

axiosInstance.get("/historial")
.then((response) => {
    console.log("response data:", response.data);
});
