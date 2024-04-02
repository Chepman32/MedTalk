import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const getCurrentYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};

const CardExpirationInput = () => {
  const [expirationDate, setExpirationDate] = useState('');

  const handleExpirationDateChange = (text) => {
    let formattedText = '';

    // Remove non-numeric characters
    const numericText = text.replace(/\D/g, '');

    // Format the text as MM/YY
    if (numericText.length > 0) {
      formattedText += numericText.slice(0, 2);
      if (numericText.length > 2) {
        formattedText += '/' + numericText.slice(2, 4);
      }
    }

    // Validate the month
    const month = parseInt(formattedText.split('/')[0], 10);
    if (month > 0 && month <= 12) {
      // Validate the year
      const year = parseInt(formattedText.split('/')[1], 10);
      const currentYear = getCurrentYear();
      if (year >= currentYear) {
        setExpirationDate(formattedText);
      } else {
        setExpirationDate('');
      }
    } else {
      setExpirationDate('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={expirationDate}
        onChangeText={handleExpirationDateChange}
        maxLength={5}
        keyboardType="numeric"
        placeholder="MM/YY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default CardExpirationInput;
