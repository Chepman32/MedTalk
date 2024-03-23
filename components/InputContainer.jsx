import { View, Text, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';

export const InputContainer = ({ text, type, value, setValue, placeholder, isRequired }) => {
  const [isValid, setIsValid] = useState(true);

  const validateInput = (input) => {
    const regex = /^[а-яА-Я]+$/; // Cyrillic name regex
    setIsValid(regex.test(input));
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>
          {text} {isRequired && <Text style={styles.required}>* </Text>}
        </Text>
      </View>
      <TextInput
        value={value}
        onChangeText={(text) => {
          setValue(text);
          type === "name" && validateInput(text) || type === "secondName" && validateInput(text);
        }}
        style={[styles.input, !isValid && styles.inputError]} // Apply error style if input is not valid
        placeholder={placeholder}
        textAlignVertical="top"
        keyboardType="visible-password"
      />
      {!isValid && (
        <Text style={styles.errorText}>Введите корректное имя</Text> // Display error message
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    paddingBottom: SCREEN_HEIGHT * 0.0005,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
  },
  input: {
    width: SCREEN_WIDTH * 0.92,
    height: SCREEN_HEIGHT * 0.035,
    marginVertical: SCREEN_HEIGHT * 0.005,
    paddingLeft: SCREEN_WIDTH * 0.04,
    backgroundColor: 'rgba(235, 235, 235, 1)',
    borderRadius: 8,
  },
  text: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: 'rgba(21, 21, 21, 1)',
  },
  required: {
    color: 'red',
  },
  inputError: {
    borderColor: 'red', // Border color for error
  },
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});
