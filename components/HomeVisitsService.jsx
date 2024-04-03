import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SCREEN_WIDTH } from '../constants';

export const HomeVisitsService = ({title, text }) => {

  return (
    <TouchableOpacity style={styles.container} >
          <Text style={styles.title}>Услуги:</Text>
          <Text style={styles.text}>{text} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.95,
    paddingVertical: SCREEN_WIDTH * 0.02,
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
