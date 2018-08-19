import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';

import ChatScreen from './ChatScreen/ChatScreen';
import UserList from './UserList/UserList';

const TabBar =  createBottomTabNavigator(
    {
      users: UserList,
      chats: ChatScreen
    },
    {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === 'chats') {
            iconName = `ios-chatbubbles${focused ? '' : '-outline'}`;
          } else if (routeName === 'users') {
            iconName = `ios-people${focused ? '' : '-outline'}`;
          }
  
          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        },
      }),
      tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      },
    }
  );

  export default TabBar;