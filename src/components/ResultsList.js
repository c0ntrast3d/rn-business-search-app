import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsItem from './ResultsItem';

const ResultsList = ({ headerText, results }) => {
    return results.length > 0 ? (
        <View style={styles.container}>
            <Text style={styles.headerText}>{headerText}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => (<ResultsItem result={item} />)}
            />
        </View>
    ) : null;
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

export default ResultsList;