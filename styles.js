import React from 'react';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        width: '80%',
        padding: 10,
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        fontSize: 32,
        color: '#7789aa',
        backgroundColor: '#ddeeff',
        marginTop: 100,
        padding: 20,
        shadowColor: '#221144',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 25,
        shadowOpacity: 1.0
    },
    conversation: {
        width: '100%',
        height: 50,
        marginTop: 5,
        backgroundColor: 'white',
        paddingLeft: 10
    }
})