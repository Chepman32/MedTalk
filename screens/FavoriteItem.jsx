/* eslint-disable quotes */

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants';
import { useNavigation } from '@react-navigation/native';
import MockImage from "../assets/images/Rectangle_330.png";
import Fav from "../assets/icons/Frame_658375.png";

export const FavoriteItem = ({ text, type, path }) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(path)} >
          <View style={styles.content} >
          <Image style={styles.image} source={MockImage} />
              <Text style={styles.boldText}>{text}</Text>
              <Image style={styles.icon} source={Fav} />
          </View>
          <Text style={styles.text}>{type}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.95,
        paddingVertical: SCREEN_WIDTH * 0.01,
    paddingHorizontal: SCREEN_WIDTH * 0.04,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    overflow: 'hidden',
    borderRadius: 8,
        borderWidth: 1,
    borderColor: "rgba(219, 219, 219, 1)",
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 6,
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
  image: {
    width: 64,
    height: 64,
    marginRight: SCREEN_WIDTH * 0.01,
  },
    text: {
      marginTop: SCREEN_HEIGHT * 0.01,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: 'rgba(21, 21, 21, 1)',
  },
  boldText: {
    marginVertical: 10,
    fontSize: 12,
    fontWeight: '800',
      lineHeight: 18,
    color: "rgba(0, 137, 100, 1)",
    },
    icon: {
        width: 20,
        height: 20,
        marginTop: SCREEN_WIDTH * 0.03,
      },
});
