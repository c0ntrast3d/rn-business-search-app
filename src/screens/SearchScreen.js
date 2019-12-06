import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useFetchJSON from '../hooks/useSearchResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

    const [term, setTerm] = useState('');
    const [performSearch, results, error] = useFetchJSON();

    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => performSearch(term)}
            />
            {error ? <Text>{error}</Text> : null}
            <Text>Found {results.length} results</Text>
            <ResultsList headerText='Cost Effective' />
            <ResultsList headerText='Pricier' />
            <ResultsList headerText='Big Spender' />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;