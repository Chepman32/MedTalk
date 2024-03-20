import { View, Text, SafeAreaView, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import React, { useState } from 'react';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { FavoriteItem } from './FavoriteItem';
import search from '../assets/icons/search.png';
import MockImage from '../assets/images/Rectangle_330.png';
import MockImage2 from '../assets/images/Rectangle_329.png';
import MockImage3 from '../assets/images/Rectangle_472.png';

const data = [
    {
        text: 'Специальное техническое обслуживание'
        , icon: MockImage,
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
];

export const Favorite = () => {
    const [searchValue, setSearchValue] = useState('');
  return (
    <SafeAreaView style={styles.container}>
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
              {
                  data.map((d) => <FavoriteItem text={d.text} icon={d.icon} type={d.type} isFavorite={d.isFavorite} />)
        }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    paddingVertical: SCREEN_HEIGHT * 0.05,
    paddingHorizontal: SCREEN_WIDTH * 0.025,
  },
  mainText: {
    marginBottom: SCREEN_HEIGHT * 0.01,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: 'rgba(21, 21, 21, 1)',
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
});
