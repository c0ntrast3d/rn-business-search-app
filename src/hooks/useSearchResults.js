import { useEffect, useState } from 'react';
import yelp from '../webapi/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        performSearch('pizza');
    }, []);

    const performSearch = async (searchQuery) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 10,
                    term: searchQuery,
                    location: 'rome'
                }
            });
            setResults(response.data.businesses);
        }
        catch (error) {
            console.warn(error);
            setError(`Something went wrong:\n${error}`);
        }
    };

    return [performSearch, results, error];
};