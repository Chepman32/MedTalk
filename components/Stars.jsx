import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SCREEN_WIDTH } from '../constants';
import star from '../assets/icons/star.png';
import empty_star from '../assets/icons/empty_star.png';

export const Stars = ({ rating, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.row}>
        {[...Array(5)].map((_, index) => (
<Image
  key={index}
  style={styles.icon}
  source={index < rating ? star : empty_star}
/>
))}
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: SCREEN_WIDTH * 0.03,
  },
});
