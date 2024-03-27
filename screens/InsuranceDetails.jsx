
/* eslint-disable quotes */
import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { InputContainer } from '../components/InputContainer';
import { useNavigation } from '@react-navigation/native';
import { InsuranceHead } from '../components/InsuranceHead';
import { CustomCarousel } from '../components/CustomCarousel';
import image1 from '../assets/images/medication1.png';
import image2 from '../assets/images/Insurance/2.png';
import image3 from '../assets/images/Insurance/im_01.jpg';

export const carouselItems = [
  { title: 'Item 1', image: image1, text: 'Новые способы лечения от простуды для любимых питомцев' },
  { title: 'Item 2', image: image2, text: 'Покупайте все нужные витамины со скидкой в 20%' },
  { title: 'Item 3', image: image3, text: 'Самые высокооплачивамые врачи мира' },
];

export const InsuranceDetails = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <InsuranceHead />
      <CustomCarousel items={carouselItems} />
      <View style={styles.texts}>
      <Text style={styles.boldText}>Услуги:</Text>
      <Text style={styles.mainText}>Базовая, Мой доктор, На дом, Стандарт, Элитная</Text>
      <Text style={styles.boldText}>Цена:</Text>
      <Text style={styles.mainText}>От 15 000 ₸ / месяц</Text>
      <Text style={styles.linkText}>www.interteach.kz</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    flex: 1,
    alignItems: "center",
    paddingVertical: SCREEN_HEIGHT * 0.05,
    backgroundColor: "#fff",
  },
  texts: {
    paddingVertical: SCREEN_HEIGHT * 0.01,
    paddingHorizontal: SCREEN_WIDTH * 0.02,
  },
  boldText: {
    marginVertical: 10,
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
  },
  mainText: {
    marginBottom: SCREEN_HEIGHT * 0.01,
  fontWeight: '400',
  fontSize: 12,
  lineHeight: 15,
  color: 'rgba(21, 21, 21, 1)',
},
  linkText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 17,
    color: "rgba(0, 118, 255, 1)",
    textDecorationLine: "underline",
  },
});
