/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {About} from './About';
import { Image } from 'react-native';
import { MoreScreen } from './MoreScreen';
import { Franchise } from './Franchise';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerBackTitleVisible: false
    }} >
      <Stack.Screen name="Screen1" component={MoreScreen} options={{headerShown: false}} />
      <Stack.Screen name="About" component={About} options={{
        title: "O нас"
      }} />
      <Stack.Screen name="Franchise" component={Franchise} options={{
        title: "Франчайзинг"
      }} />
      <Stack.Screen name="Screen4" component={About} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Главная" component={StackNavigator} options={{
    tabBarIcon: ({ color, size }) => (
      <Image width={20} height={20} source={require('./assets/icons/home-page.png')}/>
          ),
          tabBarActiveTintColor: "green"
  }} />
        <Tab.Screen name="Избранное" component={StackNavigator} options={{
    tabBarIcon: ({  }) => (
      <Image width={20} height={20} source={require('./assets/icons/favorite.png')}/>
    ),
  }}/>
        <Tab.Screen name="Корзина" component={StackNavigator} options={{
    tabBarIcon: ({ color, size }) => (
      <Image width={20} height={20} source={require('./assets/icons/shop.png')}/>
    ),
  }}/>
        <Tab.Screen name="Другое" component={StackNavigator} options={{
    tabBarIcon: ({  }) => (
      <Image width={20} height={20} source={require('./assets/icons/more.png')}/>
    ),
  }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
