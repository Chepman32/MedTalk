/* eslint-disable quotes */

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { useNavigation } from '@react-navigation/native';

export const ConnectToPortalInputs = ({ text, selected, setSelected }) => {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [BIN, setBIN] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
  return (
    <View
      style={styles.container}
      >
          <Text  style={styles.text}>ФИО</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholder="Иванов Иван Иванович"
            textAlignVertical="top"
          />
           <Text  style={styles.text}>Название</Text>
          <TextInput
            value={title}
            onChangeText={setTitle}
            style={styles.input}
            placeholder="Введите название"
            textAlignVertical="top"
          />
          <Text  style={styles.text}>БИН/ИИН</Text>
          <TextInput
            value={BIN}
            onChangeText={setBIN}
            style={styles.input}
            placeholder="000000000000"
            textAlignVertical="top"
          />
          <Text  style={styles.text}>E-mail</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder="ivan@gmail.com"
            textAlignVertical="top"
          />
          <Text  style={styles.text}>Номер телефона</Text>
          <TextInput
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
            placeholder="+7"
            textAlignVertical="top"
          />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.95,
    justifyContent: 'center',
    alignItems: "flex-start",
    padding: SCREEN_WIDTH * 0.01,
    marginBottom: SCREEN_HEIGHT * 0.01,
  },
    input: {
        width: SCREEN_WIDTH * 0.95,
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
});
