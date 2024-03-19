import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';

export const ConnectToPortalInputs = ({ visible, setCompleted }) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [BIN, setBIN] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const formatPhoneNumber = (value) => {
    // Remove non-digit characters from the input
    const cleanedValue = value.replace(/\D/g, '');

    // Apply the desired format
    let formattedValue = '+7';
    if (cleanedValue.length > 1) {
      formattedValue += ` (${cleanedValue.slice(1, 4)})`;
    }
    if (cleanedValue.length > 4) {
      formattedValue += ` ${cleanedValue.slice(4, 7)}`;
    }
    if (cleanedValue.length > 7) {
      formattedValue += ` ${cleanedValue.slice(7, 9)} ${cleanedValue.slice(9)}`;
    }
    return formattedValue;
  };

  const handlePhoneChange = (value) => {
    // Remove non-digit characters from the input
    const cleanedValue = value.replace(/\D/g, '');

    // Update the phone state with the cleaned value
    setPhone(formatPhoneNumber(cleanedValue));
  };

  useEffect(() => {
    if (name && title && BIN && email && phone) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  }, [BIN, email, name, phone, setCompleted, title]);

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>ФИО</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="Иванов Иван Иванович"
        textAlignVertical="top"
      />
      <Text style={styles.text}>Название</Text>
      <TextInput
        value={title}
        onChangeText={setTitle}
        style={styles.input}
        placeholder="Введите название"
        textAlignVertical="top"
      />
      <Text style={styles.text}>БИН/ИИН</Text>
      <TextInput
        value={BIN}
        onChangeText={setBIN}
        style={styles.input}
        placeholder="000000000000"
        textAlignVertical="top"
      />
      <Text style={styles.text}>E-mail</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        placeholder="ivan@gmail.com"
        textAlignVertical="top"
      />
      <Text style={styles.text}>Номер телефона</Text>
      <TextInput
        value={phone}
        onChangeText={handlePhoneChange}
        style={styles.input}
        placeholder="+7"
        textAlignVertical="top"
        keyboardType="phone-pad"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.95,
    justifyContent: 'center',
    alignItems: 'flex-start',
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