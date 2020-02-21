import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID -TmYK5AOzziGEgplCOm-CmzQcTToc-q29nIqkZl_wls'
    }
});