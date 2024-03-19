/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { useNavigation } from '@react-navigation/native';

export const ConnectToPortalItem = ({ text, selected, setSelected }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[
        styles.container,
        selected === text ? styles.selected : null,
      ]}
      onPress={() => setSelected(text)}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_HEIGHT * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SCREEN_WIDTH * 0.01,
    marginBottom: SCREEN_HEIGHT * 0.01,
    backgroundColor: 'rgba(235, 235, 235, 1)',
    overflow: 'hidden',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(219, 219, 219, 1)',
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 6,
  },
  selected: {
      backgroundColor: 'rgba(0, 137, 100, 0.2)',
      borderWidth: 1,
    borderColor: 'rgba(0, 137, 100, 1)',
  },
  text: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: 'rgba(21, 21, 21, 1)',
  },
});
