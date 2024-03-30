import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import Fav from "../assets/icons/Frame_658375.png";
import NotFav from "../assets/icons/favorite.png";
import MockImage from "../assets/images/lab1.png"
import star from "../assets/icons/star.png"
import empty_star from "../assets/icons/empty_star.png"
import time from "../assets/icons/Frame_658501.png"
import phone from "../assets/icons/Frame_658502.png"
import geo from "../assets/icons/Frame_658503.png"
import { useNavigation } from '@react-navigation/native';

export const LabService = ({title, text, price }) => {

  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.container} >
          <View style={styles.row} >
          <Text style={styles.title}>{title} </Text>
          <Text style={styles.price}>{price} </Text>
          </View>
          <Text style={styles.text}>{text} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.95,
    paddingVertical: SCREEN_WIDTH * 0.02, // Adjusted padding
    paddingHorizontal: SCREEN_WIDTH * 0.04,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    overflow: 'hidden',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(219, 219, 219, 1)",
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 6,
    },
    title: {
        fontWeight: '400',
    fontSize: SCREEN_WIDTH * 0.04,
        lineHeight: SCREEN_WIDTH * 0.05,
        color: "rgba(0, 137, 100, 1)"
      },
  row: {
      flexDirection: "row",
      justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    maxWidth: SCREEN_WIDTH * 0.8,
    fontWeight: '300',
    fontSize: SCREEN_WIDTH * 0.04,
        lineHeight: SCREEN_WIDTH * 0.05,
    marginVertical: SCREEN_WIDTH * 0.004,
    },
    price: {
        fontSize: SCREEN_WIDTH * 0.05,
        lineHeight: SCREEN_WIDTH * 0.06,
        fontWeight: "600",
      },
});
