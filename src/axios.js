import axios from 'axios';

const instance = axios.create({
    baseURL:"http://localhost:5001/clone-47dfa/us-central1/api" //The API URL
})

export default instance;