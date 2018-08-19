import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, StyleSheet } from 'react-native';
import  styles from '../../styles';

class Login extends Component {
    render() {
        const { screen, text, button, textInput } = styles;
        return (
            <View style={screen}>
                <Text>Login with your name</Text>
                <TextInput style={textInput} placeholder="Nickname" />
                <Button onPress={() => this.props.navigation.navigate('TabBar')} title="LOGIN"  />
            </View>
        )
    }
}



export default Login