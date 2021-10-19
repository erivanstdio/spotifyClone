import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../scenes/Home';
import Search from '../../scenes/Search';
import Library from '../../scenes/Library';
import Icon from '../Icon';


const Tab = createBottomTabNavigator();

const BottomBar = () => {
  return(
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: 'black', height: '10%', paddingBottom: 18, paddingTop: 14 },
        tabBarIcon: ({ color, size }) => {

          return <Icon iconName={route.name} size={size} color={color}/>
        }, 
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Search" component={Search}/>
      <Tab.Screen name="Library" component={Library}/>
    </Tab.Navigator>
  );
}

export default BottomBar;