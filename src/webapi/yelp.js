import axios from 'axios';
import ENDPOINTS from './endpoints';
import KEYS from './keys';

export default axios.create({
    baseURL: ENDPOINTS.yelp,
    headers: {
        Authorization: `Bearer ${KEYS.yelp}`
    }
});

/*
keys.js file is not included in this repo in order not to share my  API key.
The file structure is sequent:
export default KEYS = {
    yelp: 'api_key',
    other: 'api_key'
};
*/