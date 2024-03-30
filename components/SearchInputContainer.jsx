import { View, Text, StyleSheet, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import search from '../assets/icons/search.png';

export const SearchInputContainer = ({ searchValue, setSearchValue, placeholder }) => {
  const [isValid, setIsValid] = useState(true);

  return (
    <View style={styles.inputContainer}>
      <Image source={search} style={styles.icon} />
      <TextInput
        value={searchValue}
        onChangeText={setSearchValue}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={"rgba(158, 158, 158, 1)"}
        textAlignVertical="top"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_HEIGHT * 0.035,
    marginVertical: SCREEN_HEIGHT * 0.005,
  },
  icon: {
    marginLeft: SCREEN_WIDTH * 0.02,
  },
  input: {
    flex: 1,
    paddingLeft: SCREEN_WIDTH * 0.02,
    },
});
