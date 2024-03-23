import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';

export const ConfirmButton = ({text, onPress}) => {

  return (
    <TouchableOpacity style={styles.button} onPress={onPress} >
            <Text style={styles.buttonText}>{text} </Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    button: {
        width: SCREEN_WIDTH * 0.9,
        justifyContent: 'center',
      alignItems: 'center',
        marginTop: SCREEN_HEIGHT * 0.03,
        paddingVertical: SCREEN_HEIGHT * 0.015,
        backgroundColor: 'rgba(0, 137, 100, 1)',
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        textAlign: 'center',
        color: '#fff',
  },
});