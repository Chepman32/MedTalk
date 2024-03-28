import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SuccessfulMessage } from '../components/SuccessfulMessage';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { InputContainer } from './InputContainer';
import { CustomCheckBox } from './CustomCheckBox';

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
      <ScrollView bounces={false}>
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
              <View style={styles.row}>
              <InputContainer text="Дом" value={house} setValue={setHouse} placeholder={"Дом"} style={{width: SCREEN_WIDTH * 0.4}} />
              <InputContainer text="Квартира/Офис" value={apt} setValue={setApt} placeholder={"Квартира/Офис"} style={{width: SCREEN_WIDTH * 0.4}}/>
          </View>
              <View style={styles.row}>
              <InputContainer text="Домофон" value={interphone} setValue={setInterphone} placeholder={"Домофон"} style={{width: SCREEN_WIDTH * 0.25}} />
          <InputContainer text="Подъезд" value={driveway} setValue={setDriveway} placeholder={"Подъезд"} style={{width: SCREEN_WIDTH * 0.25}} />
          <InputContainer text="Этаж" value={stage} setValue={setStage} placeholder={"Этаж"} style={{width: SCREEN_WIDTH * 0.25}} />
          </View>
          <View style={styles.comment}>
          <InputContainer text="Коментарий" value={comment} setValue={setComment} placeholder={"Коментарий"} multiline />
          </View>
          <CustomCheckBox/>
    </SafeAreaView>
      </ScrollView>
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
    comment: {
      marginBottom: SCREEN_HEIGHT * 0.05
    },
    row: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
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
