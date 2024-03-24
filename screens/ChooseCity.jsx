import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import location from '../assets/icons/City.png';
import search from '../assets/icons/search.png';
import close from '../assets/icons/close.png';
import { useNavigation } from '@react-navigation/native';

const locations = [
 {
   country: 'Казахстан',
   cities: [
     'Алматы',
     'Астана',
     'Шымкент',
     'Актау',
     'Актобе',
     'Атырау',
     'Караганда',
     'Кокшетау',
     'Костанай',
     'Павлодар',
     'Петропавловск',
     'Талдыкорган',
     'Тараз',
   ],
 },
];

export const ChooseCity = ({ choosedCity = 'Алматы' }) => {
 const [searchValue, setSearchValue] = useState('');
 const [currentLocation, setCurrentLocation] = useState(null);
 const navigation = useNavigation();

 useEffect(() => {
   const getLocation = () => {
     Geolocation.getCurrentPosition(
       (position) => {
         const { latitude, longitude } = position.coords;
         fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`)
           .then(response => response.json())
           .then(data => {
             const city = data.address.city || 'Unknown';
             setCurrentLocation(city);
           })
           .catch(error => {
             console.error('Error getting current location:', error);
             setCurrentLocation('Unknown');
           });
       },
       (error) => {
         console.error('Error getting current location:', error);
         setCurrentLocation('Unknown');
       }
     );
   };

   getLocation();
 }, []);

 useEffect(() => {
   if (currentLocation) {
     console.log('Current Location:', currentLocation);
     const isCity = locations.some((loc) => loc.cities.includes(currentLocation));
     console.log('Is Current Location a City?', isCity ? 'Yes' : 'No');
   }
 }, [currentLocation]);

 return (
   <SafeAreaView style={styles.container}>
     <View style={styles.row}>
       <TouchableOpacity onPress={() => console.log(currentLocation)}>
       <Image style={styles.headIcon} source={location} />
     </TouchableOpacity>
       <Text style={styles.title}>Выберите город</Text>
       <TouchableOpacity onPress={() => navigation.navigate("Home")}>
         <Image style={styles.closeIcon} source={close} />
       </TouchableOpacity>
     </View>
     <View style={styles.inputContainer}>
       <Image source={search} style={styles.icon} />
       <TextInput
         value={searchValue}
         onChangeText={setSearchValue}
         style={styles.input}
         placeholder="Поиск"
         textAlignVertical="top"
       />
     </View>
     <ScrollView>
       {locations.map((loc) => (
         <View key={loc.country}>
           <Text style={styles.country}>{loc.country} </Text>
           {loc.cities.map((city) => (
             <TouchableOpacity key={city} onPress={() => navigation.navigate("Home")}>
               <Text style={choosedCity === city ? styles.choosedCity : styles.city}>
                 {city}
               </Text>
             </TouchableOpacity>
           ))}
         </View>
       ))}
     </ScrollView>
   </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
   width: SCREEN_WIDTH,
   flex: 1,
   alignItems: 'flex-start',
   paddingVertical: 30,
   paddingHorizontal: SCREEN_WIDTH * 0.1,
   backgroundColor: '#fff',
 },
 row: {
   width: '100%',
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
 },
 headIcon: {
   width: SCREEN_WIDTH * 0.1,
   height: SCREEN_WIDTH * 0.1,
 },
 closeIcon: {
   width: SCREEN_WIDTH * 0.05,
   height: SCREEN_WIDTH * 0.05,
 },
 title: {
   marginLeft: SCREEN_WIDTH * 0.02,
   fontSize: SCREEN_HEIGHT * 0.02,
   lineHeight: SCREEN_HEIGHT * 0.03,
   fontWeight: '600',
 },
 inputContainer: {
   flexDirection: 'row',
   alignItems: 'center',
   marginBottom: SCREEN_HEIGHT * 0.01,
   backgroundColor: 'rgba(245, 245, 245, 1)',
   borderRadius: 8,
   width: SCREEN_WIDTH * 0.9,
   height: SCREEN_HEIGHT * 0.038,
   marginVertical: SCREEN_HEIGHT * 0.005,
   paddingRight: 40,
 },
 icon: {
   marginLeft: SCREEN_WIDTH * 0.02,
 },
 input: {
   flex: 1,
   paddingLeft: SCREEN_WIDTH * 0.02,
 },
 country: {
   marginBottom: SCREEN_HEIGHT * 0.03,
   fontSize: SCREEN_HEIGHT * 0.02,
   lineHeight: SCREEN_HEIGHT * 0.03,
   fontWeight: '600',
 },
 city: {
   marginBottom: SCREEN_HEIGHT * 0.01,
   fontSize: SCREEN_HEIGHT * 0.02,
   lineHeight: SCREEN_HEIGHT * 0.03,
   fontWeight: '400',
 },
 choosedCity: {
   marginBottom: SCREEN_HEIGHT * 0.01,
   fontSize: SCREEN_HEIGHT * 0.02,
   lineHeight: SCREEN_HEIGHT * 0.03,
   color: 'rgba(0, 137, 100, 1)',
 },
});