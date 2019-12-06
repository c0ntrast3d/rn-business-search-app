import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useFetchJSON from '../hooks/useSearchResults';
import ResultsList from '../components/ResultsList';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [performSearch, results, error] = useFetchJSON();

    const filterByPrice = (price) => {
        return results.filter(item => item.price === price);
    };

    return (
        <>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => performSearch(term)}
            />
            {error ? <Text>{error}</Text> : null}
            <ScrollView>
                <ResultsList
                    headerText='Cost Effective'
                    results={filterByPrice('€')}
                />
                <ResultsList
                    headerText='Bit Pricier'
                    results={filterByPrice('€€')}
                />
                <ResultsList
                    headerText='Big Spender'
                    results={filterByPrice('€€€')}
                />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;