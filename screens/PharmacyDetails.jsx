
/* eslint-disable quotes */
import React, { useState } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { InputContainer } from '../components/InputContainer';
import { useNavigation } from '@react-navigation/native';
import { InsuranceHead } from '../components/InsuranceHead';
import { CustomCarousel } from '../components/CustomCarousel';
import image1 from '../assets/images/Insurance/pic.png';
import image2 from '../assets/images/Insurance/2.png';
import image3 from '../assets/images/Insurance/im_01.jpg';
import { PharmacyHead } from '../components/PharmacyHead';
import { MedicationsItem } from '../components/MedicationsItem';

export const PharmacyDetails = () => {
  const carouselItems = [
    { title: 'Item 1', image: image1, text: 'Новые способы лечения от простуды для любимых питомцев' },
    { title: 'Item 2', image: image2, text: 'Покупайте все нужные витамины со скидкой в 20%' },
    { title: 'Item 3', image: image3, text: 'Самые высокооплачивамые врачи мира' },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <PharmacyHead/>
          <CustomCarousel items={carouselItems} />
          <View style={styles.tabs}>
          <View style={styles.tabsItem}>
            <Text style={styles.text}>О нас</Text>
        </View>
        <View style={styles.tabsItem}>
            <Text style={styles.text}>Наши филиалы</Text>
        </View>
      </View>
      <ScrollView style={{marginTop: SCREEN_HEIGHT * 0.02}} >
        <MedicationsItem/>
      </ScrollView>
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
    tabs: {
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-between",
      alignItems: "center",
      marginTop: SCREEN_HEIGHT * 0.02
      },
      tabsItem: {
        width: "48%",
        height: SCREEN_HEIGHT * 0.05,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(245, 245, 245, 1)",
        borderRadius: 8,
      },
});
