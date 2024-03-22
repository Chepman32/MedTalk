import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { About } from './screens/About';
import { Image } from 'react-native';
import { MoreScreen } from './screens/MoreScreen';
import { Franchise } from './screens/Franchise';
import { Socials } from './screens/Socials';
import { Support } from './screens/Support';
import { UserAgreement } from './screens/UserAgreement';
import { PrivacyPolicy } from './screens/PrivacyPolicy';
import { ConnectToPortal } from './screens/ConnectToPortal';
import { Favorite } from './screens/Favorite';
import { Cart } from './screens/Cart';
import { Home } from './screens/Home';
import { SignIn } from './screens/SignIn';
import { SignUp } from './screens/SignUp';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
      headerBackTitleVisible: false,
      headerTintColor: '#000', // Set back button color to black
      headerBackVisible: true, // Make back button visible
      headerShown: route.name !== 'Другое', // Show header only if the route name is not 'Другое'
    })}>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'Войти', headerLeft: null }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Регистрация' }} />
    </Stack.Navigator>
  );
}

function MoreStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="MoreScreen" screenOptions={({ route }) => ({
      headerBackTitleVisible: false,
      headerTintColor: '#000', // Set back button color to black
      headerBackVisible: true, // Make back button visible
      headerShown: route.name !== 'Другое', // Show header only if the route name is not 'Другое'
    })}>
      <Stack.Screen name="MoreScreen" component={MoreScreen} options={{ headerShown: false }} />
      <Stack.Screen name="About" component={About} options={{ title: 'о нас' }} />
      <Stack.Screen name="UserAgreement" component={UserAgreement} options={{ title: 'Пользовательское соглашение' }} />
      <Stack.Screen name="Franchise" component={Franchise} options={{ title: 'Франчайзинг' }} />
      <Stack.Screen name="Socials" component={Socials} options={{ headerShown: false }} />
      <Stack.Screen name="Support" component={Support} options={{ title: 'Служба поддержки' }} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ title: 'Политика конфиденциальности', }} />
      <Stack.Screen name="ConnectToPortal" component={ConnectToPortal} options={{ title: 'Подключиться к порталу' }} />
    </Stack.Navigator>
  );
}

function FavoriteStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="MoreScreen" screenOptions={({ route }) => ({
      headerBackTitleVisible: false,
      headerTintColor: '#000',
      headerBackVisible: true,
      headerShown: route.name !== 'Другое',
    })}>
      <Stack.Screen name="Favorite" component={Favorite} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Главная" component={HomeStackNavigator} options={{
          tabBarIcon: ({ color, size }) => (
            <Image width={20} height={20} source={require('./assets/icons/home-page.png')} />
          ),
          tabBarActiveTintColor: 'green',
        }} />
        <Tab.Screen name="Избранное" component={FavoriteStackNavigator} options={{
          tabBarIcon: ({ }) => (
            <Image width={20} height={20} source={require('./assets/icons/favorite.png')} />
          ),
        }} />
        <Tab.Screen name="Корзина" component={Cart} options={{
          tabBarIcon: ({ color, size }) => (
            <Image width={20} height={20} source={require('./assets/icons/shop.png')} />
          ),
        }} />
        <Tab.Screen name="Другое" component={MoreStackNavigator} options={{
          tabBarIcon: ({ }) => (
            <Image width={20} height={20} source={require('./assets/icons/more.png')} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
