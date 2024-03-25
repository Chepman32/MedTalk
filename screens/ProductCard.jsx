/* eslint-disable quotes */
import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import product from "../assets/images/Rectangle__329.png"
import star from "../assets/icons/star.png"
import empty_star from "../assets/icons/empty_star.png"
import message_black from "../assets/icons/message_black.png"
import cart_white from "../assets/icons/cart_white.png"

export const ProductCard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
      MINDRAY BeneHeart D6
      </Text>
      <View style={styles.row}>
        <Text style={styles.boldText}>В наличии:</Text>
        <Text style={styles.mainText}>Есть</Text>
      </View>
      <Text style={styles.boldText}>Описание</Text>
      <Text style={styles.greyText}>
      MINDRAY BeneHeart D6 - компактная, прочная
и эргономичная конструкция хорошо приспособлена к эксплуатации в экстренных ситуациях. 
      </Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.greyButton}>
          <Image style={styles.buttonIcon} source={message_black}/>
          <Text style={styles.greyButtonText} >Есть вопрос?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.greenButton}>
        <Image style={styles.buttonIcon} source={cart_white}/>
          <Text style={styles.greenButtonText} >Купить</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SCREEN_HEIGHT * 0.01,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
      backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "600"
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: SCREEN_WIDTH * 0.03,
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  },
  boldText: {
    marginRight: SCREEN_WIDTH * 0.02,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 14,
},
  mainText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: 'rgba(21, 21, 21, 1)',
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  greyText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    color: 'rgba(136, 136, 136, 1)',
  },
  greyButton: {
    width: SCREEN_WIDTH * 0.43,
    height: SCREEN_HEIGHT * 0.05,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  greyButtonText: {
    marginRight: SCREEN_WIDTH * 0.02,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 14,
  },
  greenButton: {
    width: SCREEN_WIDTH * 0.43,
    height: SCREEN_HEIGHT * 0.05,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "rgba(0, 137, 100, 1)",
    color: "#fff"
  },
  greenButtonText: {
    marginRight: SCREEN_WIDTH * 0.02,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 14,
    color: "rgba(255, 255, 255, 1)"
  },
  buttonIcon: {
    width: SCREEN_WIDTH * 0.05,
    height: SCREEN_WIDTH * 0.05,
    marginRight: SCREEN_WIDTH * 0.02,
  }
  
});
