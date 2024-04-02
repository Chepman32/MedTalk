import React, { useCallback, useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { InputContainer } from './InputContainer';
import { ConfirmButton } from './ConfirmButton';
import CardExpirationInput from './CardExpirationInput';
import SuccessfulPayment from './SuccessfulPayment';

export const CardDetails = () => {
  const [cardNum, setCardNum] = useState('');
  const [expiration, setExpiration] = useState('');
  const [CVV, setCVV] = useState('');
  const [isValidCard, setIsValidCard] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const validateCardNumber = useCallback((cardNumber) => {
    const visaPattern = /^4[0-9]{12}(?:[0-9]{3})?$/;
    const mastercardPattern = /^5[1-5][0-9]{14}$/;
    const isValidVisa = visaPattern.test(cardNumber.replace(/\s/g, ''));
    const isValidMastercard = mastercardPattern.test(cardNumber.replace(/\s/g, ''));
    return isValidVisa || isValidMastercard;
  }, []);

  useEffect(() => {
    setIsButtonDisabled(!(cardNum && expiration && CVV));
  }, [cardNum, expiration, CVV]);

  const handlePress = () => {
    const isValid = validateCardNumber(cardNum);
    setIsValidCard(isValid);
    if (!isValid) {
      Alert.alert('Ошибка', 'Некорректный номер карты');
    }
  };

  return (
    <ScrollView bounces={false}>
      <SafeAreaView style={styles.container}>
        <SuccessfulPayment/>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  title: {
    fontWeight: '600',
    fontSize: SCREEN_WIDTH * 0.05,
    lineHeight: SCREEN_WIDTH * 0.05,
    color: 'rgba(21, 21, 21, 1)',
  },
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    backgroundColor: 'rgba(0, 137, 100, 1)',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});
