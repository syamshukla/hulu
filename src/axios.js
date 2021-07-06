import axios from 'axios';
axios.defaults.baseURL = "https://api.themoviedb.org/3"

const instance = axios.create({
    baseUrl: "https://api.themoviedb.org/3"
    
});



export default instance;