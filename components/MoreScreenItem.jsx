/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants';
import { useNavigation } from '@react-navigation/native';

export const MoreScreenItem = ({ text, icon, path }) => {
    const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate(path)} >
      <Image style={styles.icon} source={icon} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_HEIGHT * 0.04,
    flexDirection: 'row',
    alignItems: 'center', // Corrected: This property should be applied to the container style
    padding: SCREEN_WIDTH * 0.01,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    overflow: 'hidden',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 6,
    },
    content: {
        flexDirection: "row",
    },
  icon: {
    width: 15,
    height: 15,
    marginRight: SCREEN_WIDTH * 0.005,
  },
  text: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: 'rgba(21, 21, 21, 1)',
  },
  boldText: {
    marginVertical: 10,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 16,
  },
});
