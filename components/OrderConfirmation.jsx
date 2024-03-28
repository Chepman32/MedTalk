import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SuccessfulMessage } from '../components/SuccessfulMessage';
import { SCREEN_WIDTH } from '../constants';
import { InputContainer } from './InputContainer';

export const OrderConfirmation = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [secondPhone, setSecondPhone] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [house, setHouse] = useState('');
    const [apt, setApt] = useState('');
    const [interphone, setInterphone] = useState('');
    const [driveway, setDriveway] = useState('');
    const [stage, setStage] = useState('');
    const [comment, setComment] = useState('');
  return (
      <SafeAreaView style={styles.container}>
          <Text style={styles.boldText}>
          Данные покупателя
          </Text>
          <InputContainer text="Имя" value={name} setValue={setName} isRequired placeholder={"Имя"} />
          <InputContainer text="Номер телефона" value={phone} setValue={setPhone} placeholder={"+000 000 0000 *"} />
          <InputContainer text="Дополнительный номер телефона *" value={secondPhone} setValue={setSecondPhone} placeholder={"+000 000 0000 *"} />
          <Text style={styles.boldText}>
          Адрес покупателя
          </Text>
          <InputContainer text="Город" value={city} setValue={setCity} placeholder={"Алматы"} />
          <InputContainer text="Улица" value={street} setValue={setStreet} placeholder={"Байзакова"} />
          <InputContainer text="Дом" value={house} setValue={setHouse} placeholder={"Алматы"} />
          <InputContainer text="Квартира/Офис" value={apt} setValue={setApt} placeholder={"Квартира/Офис"} />
          <InputContainer text="Домофон" value={interphone} setValue={setInterphone} placeholder={"Домофон"} />
          <InputContainer text="Подъезд" value={driveway} setValue={setDriveway} placeholder={"Подъезд"} />
          <InputContainer text="Этаж" value={stage} setValue={setStage} placeholder={"Этаж"} />
          <InputContainer text="Коментарий" value={comment} setValue={setComment} placeholder={"Коментарий"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    flex: 1,
    alignItems: 'center',
    paddingVertical: 30,
        paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  boldText: {
    fontWeight: '600',
    fontSize: SCREEN_WIDTH * 0.05,
    lineHeight:  SCREEN_WIDTH * 0.05,
    color: 'rgba(21, 21, 21, 1)',
  },
  input: {
    width: SCREEN_WIDTH * 0.95,
    height: 200,
    marginVertical: 20,
    padding: 12,
    paddingTop: 12,
    backgroundColor: 'rgba(235, 235, 235, 1)',
    borderRadius: 8,
  },
  button: {
    width: SCREEN_WIDTH * 0.95,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
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
