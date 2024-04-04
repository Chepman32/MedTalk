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
import { PasswordRecover } from './screens/PasswordRecover';
import { ChangePassword } from './screens/ChangePassword';
import { PasswordSuccessfulChanged } from './screens/PasswordSuccessfulChanged';
import { ChooseCity } from './screens/ChooseCity';
import { InsuranceDetails } from './screens/InsuranceDetails';
import { InsuranceCatalog } from './screens/InsuranceCatalog';
import { MedicationScreen } from './screens/MedicationScreen';
import { Medications } from './screens/Medications';
import { PharmacyDetails } from './screens/PharmacyDetails';
import { OrderConfirmation } from './components/OrderConfirmation';
import { Labs } from './screens/Labs';
import { CardDetails } from './components/CardDetails';
import PaymentResult from './screens/PaymentResult';
import { Doctors } from './screens/Doctors';
import { HomeVisits } from './screens/HomeVisits';
import { HomeVisitDetails } from './screens/HomeVisitDetails';
import { Dentists } from './screens/Dentists';
import { DentistDetails } from './screens/DentistDetails';
import { LabDetails } from './screens/LabDetails';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{
      headerBackTitleVisible: false,
      headerTintColor: '#000',
      headerBackVisible: true,
    }} >
      <Stack.Screen name="Home" component={Home} options={{ title: 'Главная', headerShown: false }} />
      <Stack.Screen name="PharmacyDetails" component={PharmacyDetails} options={{ title: 'Медикаменты и аптеки', }} />
      <Stack.Screen name="Medications" component={Medications} options={{ title: 'Медикаменты и аптеки', }} />
      <Stack.Screen name="MedicationScreen" component={MedicationScreen} options={{ title: 'Восстановление пароля', }} />
      <Stack.Screen name="Labs" component={Labs} options={{ title: 'Лаборатории', }} />
      <Stack.Screen name="LabDetails" component={LabDetails} options={{ title: 'Лаборатории', }} />
      <Stack.Screen name="Doctors" component={Doctors} options={{ title: 'Врачи', }} />
      <Stack.Screen name="HomeVisits" component={HomeVisits} options={{ title: 'Выезд на дом', }} />
      <Stack.Screen name="HomeVisitDetails" component={HomeVisitDetails} options={{ title: 'Выезд на дом', }} />
      <Stack.Screen name="Dentists" component={Dentists} options={{ title: 'Стоматологии', }} />
      <Stack.Screen name="DentistDetails" component={DentistDetails} options={{ title: 'Стоматологии', }} />
      <Stack.Screen name="InsuranceCatalog" component={InsuranceCatalog} options={{ title: 'Медицинское страхование', }} />
      <Stack.Screen name="InsuranceDetails" component={InsuranceDetails} options={{ title: 'Медицинское страхование',  }} />
      <Stack.Screen name="PasswordRecover" component={PasswordRecover} options={{ title: 'Восстановление пароля' }} />
      <Stack.Screen name="ChangePassword" component={ChangePassword} options={{ title: 'Смена пароля', headerLeft: null }} />
      <Stack.Screen name="PasswordSuccessfulChanged" component={PasswordSuccessfulChanged} options={{ headerShown: false, headerLeft: null }} />
      <Stack.Screen name="SignIn" component={SignIn} options={{ title: 'Войти', headerLeft: null }} />
      <Stack.Screen name="SignUp" component={SignUp} options={{ title: 'Регистрация' }} />
      <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={{ title: 'Политика конфиденциальности', }} />
      <Stack.Screen name="ChooseCity" component={ChooseCity} options={{ title: 'Политика конфиденциальности', }} />
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

function CartStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="CardDetails" screenOptions={{
      headerTintColor: '#000',
      headerBackVisible: true,
    }} >
      <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
      <Stack.Screen name="OrderConfirmation" component={OrderConfirmation} options={{ headerShown: false }} />
      <Stack.Screen name="CardDetails" component={CardDetails} options={{ title: 'Оплата', }} />
      <Stack.Screen name="PaymentResult" component={PaymentResult} options={{ title: 'Оплата', }} />
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

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
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
        <Tab.Screen name="Корзина" component={CartStackNavigator} options={{
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
