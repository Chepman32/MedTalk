import { View, Text, SafeAreaView, TextInput, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { FavoriteItem } from './FavoriteItem';
import search from "../assets/icons/search.png"

export const Favorite = () => {
    const [searchValue, setSearchValue] = useState('');
  return (
    <SafeAreaView style={styles.container}>
          <TextInput
        value={searchValue}
        onChangeText={setSearchValue}
        style={styles.input}
        placeholder="Поиск"
        textAlignVertical="top"
          />
          <ScrollView>
          <FavoriteItem text={"Специальное техническое обслуживание"} type={"Медицинское оборудование / Сервис и ремонт"} />
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
      input: {
        width: SCREEN_WIDTH * 0.95,
        height: SCREEN_HEIGHT * 0.035,
        marginVertical: SCREEN_HEIGHT * 0.005,
        paddingLeft: SCREEN_WIDTH * 0.04,
        backgroundColor: '#fff',
        borderRadius: 8,
      },
  });
