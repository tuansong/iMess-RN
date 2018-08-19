import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
//import { io } from 'react-native-socket.io-client/socket.io'

import LoginScreen from './LoginScreen';
import reducer from './store/reducer';



export default class App extends React.Component {

  // componentDidMount() {
  //   console.log("CONECTING SOCKET");
  //   socket = io('http://127.0.0.1:3000', {jsonp: false});
  // }

  render() {
    return (
      <Provider store={store}>
        <LoginScreen />
      </Provider>
    );
  }
}

const store = createStore(reducer);