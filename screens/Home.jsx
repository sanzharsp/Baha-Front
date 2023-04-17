import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen options={{    tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ), }} name="Басты бет" component={HomeScreen} />
      <Tab.Screen options={{    tabBarIcon: ({ color, size }) => (
            <AntDesign name="login" size={size} color={color} />
          ), }} name="Кіру" component={HomeScreen} />
  </Tab.Navigator>
  </NavigationContainer>
  );
}

