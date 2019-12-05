import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => (
    <View style={styles.container}>
        <Feather name='search' style={styles.icon} />
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            placeholder='Search'
            style={styles.input}
            value={term}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15
    },
    input: {
        flex: 1,
        fontSize: 18
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;