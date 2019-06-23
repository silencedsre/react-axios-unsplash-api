import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1ef370165fbed9f0527bc1dccbdf996495e2d7f5c397fc6c236227d48096b7c9'
    }
});

