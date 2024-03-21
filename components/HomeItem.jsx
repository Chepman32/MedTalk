import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';

export const Homeitem = ({text, icon}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
                  <View style={{ alignItems: "flex-start" }}>
                  <Text style={styles.buttonText}>{text} </Text>
              </View>
                  <View style={{ alignItems: "flex-end", marginTop: 10, }}>
                  <Image style={styles.buttonIcon} source={icon} />
          </View>
        </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: SCREEN_WIDTH * 0.45,
    justifyContent: "space-between",
    padding: SCREEN_WIDTH * 0.01,
    paddingRight: SCREEN_WIDTH * 0.03,
    marginBottom: SCREEN_HEIGHT * 0.01,
    backgroundColor: "#fff",
    borderRadius: 10,
},
buttonIcon: {
  width: 32,
  height: 32,
  marginBottom: 8,
},
buttonText: {
  fontSize: 14,
  textAlign: 'center',
},
});

