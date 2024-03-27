import { View, Text, SafeAreaView, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { FavoriteItem } from './FavoriteItem';
import search from '../assets/icons/search.png';
import MockImage1 from '../assets/images/medication1.png';
import MockImage2 from '../assets/images/Rectangle_329.png';
import MockImage3 from '../assets/images/Rectangle_472.png';
import MockImage4 from '../assets/images/image_150.png';
import noFavorites from '../assets/icons/noFavorites.png';
import { InsuranceItem } from '../components/InsuranceItem';
import { SearchInputContainer } from '../components/SearchInputContainer';

export const data = [
    {
        text: 'Специальное техническое обслуживание'
        , icon: MockImage1,
        type: 'Медицинское оборудование / Сервис и ремонт',
        isFavorite: true,
    },
    {
        text: 'Скорая на дом “HealthCity”'
        , icon: MockImage2,
        type: '',
        isFavorite: false,
    },
    {
        text: 'МРТ оборудование с последним обновлением'
        , icon: MockImage3,
        type: 'Медицинское оборудование / Медицинская мебель',
        isFavorite: true,
    },
    {
        text: 'Соловьев Александр Викторович'
        , icon: MockImage4,
        type: '',
        isFavorite: true,
    },
];

export const InsuranceCatalog = () => {
    const [searchValue, setSearchValue] = useState('');

    const filteredData = data.filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase()));

    return (
        <SafeAreaView style={styles.container}>
            <SearchInputContainer searchValue={searchValue} setSearchValue={setSearchValue} placeholder={"Найти врача"} />
            <ScrollView >
                <View style={styles.main} >
                <InsuranceItem/>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
        flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SCREEN_HEIGHT * 0.05,
    },
    main: {
        width: SCREEN_WIDTH,
        display: 'flex',
        flexDirection: 'column',
    justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
  mainText: {
      marginTop: SCREEN_HEIGHT * 0.03,
      paddingBottom: SCREEN_HEIGHT * 0.035,
      textAlign: 'center',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: 'rgba(136, 136, 136, 1)',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_HEIGHT * 0.035,
    marginVertical: SCREEN_HEIGHT * 0.005,
  },
  icon: {
    marginLeft: SCREEN_WIDTH * 0.02,
  },
  input: {
    flex: 1,
    paddingLeft: SCREEN_WIDTH * 0.02,
    },
    image: {
        width: SCREEN_WIDTH * 0.2,
        height: SCREEN_WIDTH * 0.2,
        marginTop: SCREEN_WIDTH * 0.07,
      },
});
