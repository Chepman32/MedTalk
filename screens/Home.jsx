import React, { useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import search from '../assets/icons/search.png';
import banner from '../assets/images/banner.png';
import { Homeitem } from '../components/HomeItem';
import location from '../assets/icons/City.png';
import profile from '../assets/icons/profile.png';
import drugs from '../assets/icons/Home_icons/pill.png';
import doctor from '../assets/icons/Home_icons/Frame_658349.png';
import car from '../assets/icons/Home_icons/Frame_658347.png';
import labs from '../assets/icons/Home_icons/Frame_658351.png';
import dentist from '../assets/icons/Home_icons/Frame658352.png';
import pets from '../assets/icons/Home_icons/Frame658353.png';
import tools from '../assets/icons/Home_icons/Frame658355.png';
import ads from '../assets/icons/Home_icons/Frame658356.png';
import facilities from '../assets/icons/Home_icons/Frame658350.png';
import insurance from '../assets/icons/Home_icons/Frame658354.png';
import { AuthWarningModal } from '../components/AuthWarningModal';
import { useNavigation } from '@react-navigation/native';
import { GeolocationModal } from '../components/GeolocationModal';

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

export const Home = () => {
    const [searchValue, setSearchValue] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLocationModalVisible, setLocationModalVisible] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(null);
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
  
  const navigation = useNavigation();

    const toggleModal = () => {
        setModalVisible(true);
      };
  return (
      <View style={styles.container}>
          <View style={styles.head}>
        <TouchableOpacity onPress={() => {
          if (currentLocation) {
            setLocationModalVisible(true)
          }
          else {
            navigation.navigate("ChooseCity")
          }
        }}>
        <Image style={styles.headIcon} source={location}/>
              </TouchableOpacity>
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
              <Image style={styles.headIcon} source={profile}/>
          </View>
          <Image style={styles.banner} source={banner} resizeMode="contain"/>
      <View style={styles.buttons}>
              <Homeitem text={'Медикаменты и аптеки'} icon={drugs} onPress={toggleModal} />
              <Homeitem text={'Врачи'} icon={doctor} />
              <Homeitem text={'Выезд на дом и Онлайн консультация'} icon={car} onPress={toggleModal} />
              <Homeitem text={'Лаборатории'} icon={labs} onPress={toggleModal} />
              <Homeitem text={'Стоматологии'} icon={dentist}  onPress={toggleModal}/>
              <Homeitem text={'Ветеринарные клиники'} icon={pets} onPress={toggleModal} />
              <Homeitem text={'Медицинское оборудование'} icon={tools } onPress={toggleModal} />
              <Homeitem text={'Частные объявления'} icon={ads} onPress={toggleModal} />
              <Homeitem text={'Медицинское учреждение'} icon={facilities} onPress={toggleModal} />
              <Homeitem text={'Медицинское страхование'} icon={insurance} onPress={toggleModal}/>
          </View>
      <AuthWarningModal isModalVisible={isModalVisible} setModalVisible={setModalVisible} hide={() => setModalVisible(false)} />
      <GeolocationModal isModalVisible={isLocationModalVisible} hide={() => setLocationModalVisible(false)} city={currentLocation} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    head: {
        width: SCREEN_WIDTH,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingRight: 32, // Changed from paddingHorizontal to paddingRight
        paddingLeft: 16,
        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      },
    headIcon: {
        width: SCREEN_WIDTH * 0.1,
        height: SCREEN_WIDTH * 0.1,
    },
      inputContainer: {
        flexDirection: 'row',
          alignItems: 'center',
        backgroundColor: 'rgba(245, 245, 245, 1)',
        borderRadius: 8,
        width: SCREEN_WIDTH * 0.6,
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
    banner: {
        width: SCREEN_WIDTH * 0.95,
      height: SCREEN_HEIGHT * 0.12,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  bannerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});
