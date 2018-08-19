import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './components/login/Login';
import TabBar from './components/tabbar/TabBar';

const LoginScreen = createStackNavigator({
    Home: {
        screen: Login
    },
    TabBar: {
        screen: TabBar,
    }
},
{
    initialRouteName: 'Home'
}
);

export default LoginScreen;

