import axios from 'axios';

const url = import.meta.env.VITE_API_URL;

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

const apiCall = axios.create({
    baseURL: url,
    headers,
});

export default apiCall;