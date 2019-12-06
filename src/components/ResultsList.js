import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsList = ({ headerText }) => {
    return (
        <View>
            <Text style={styles.headerText}>{headerText}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default ResultsList;