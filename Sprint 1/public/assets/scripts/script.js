const axiosInstance = require('./axiosInterceptor');


alert(message="prueba")
console.log("prueba")
axiosInstance.get("/historial",(response) => {
    alert(response)
})
