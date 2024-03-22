
/* eslint-disable quotes */
import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { InputContainer } from '../components/InputContainer';
import { useNavigation } from '@react-navigation/native';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [password, setPassword] = useState('');
  const [IIN, setIIN] = useState("")
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <InputContainer text="Имя" value={name} setValue={setName} placeholder="Иван" isRequired />
      <InputContainer text="Фамилия" value={secondName} setValue={setSecondName} placeholder={"Зайцев"} isRequired />
      <InputContainer text="Дата рождения" value={dateOfBirth} setValue={setDateOfBirth} placeholder={"ДД/ММ/ГГГ"} isRequired />
      <InputContainer text="ИИН" value={IIN} setValue={setIIN} placeholder={"000000000000"} />
      <InputContainer text="Почта" value={email} setValue={setEmail} placeholder={"ivan@gmail.com"} />
      <InputContainer text="Контактный номер" value={phone} setValue={setPhone} isRequired placeholder={"+&000 000 0000"} />
      <InputContainer text="Пароль" value={password} setValue={setPassword} placeholder={"••••••••"} isRequired/>
      <View style={{ width: SCREEN_WIDTH * 0.95, alignItems: "flex-end"}} >
      <Text style={styles.greenText}>Забыли пароль?</Text>
      </View>
       <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
      <Text style={styles.greyText}>У меня уже есть аккаунт</Text>
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")} >
      <Text style={styles.linkText}>Войти</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    flex: 1,
    alignItems: "center",
    paddingVertical: SCREEN_HEIGHT * 0.05,
    backgroundColor: "#fff",
  },
    mainText: {
      marginBottom: SCREEN_HEIGHT * 0.01,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: 'rgba(21, 21, 21, 1)',
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
  greenText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: 'rgba(0, 137, 100, 1)',
    paddingRight: SCREEN_WIDTH * 0.02,
  },
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
  returnButton: {
    width: SCREEN_WIDTH * 0.9,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SCREEN_HEIGHT * 0.01,
    paddingVertical: SCREEN_HEIGHT * 0.015,
    backgroundColor: 'rgba(245, 245, 245, 1)',
    borderRadius: 8,
},
returnButtonText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
    color: 'rgba(21, 21, 21, 1)',
},
  greyText: {
    marginTop: SCREEN_HEIGHT * 0.02,
    marginBottom: SCREEN_HEIGHT * 0.01,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: 'rgba(158, 158, 158, 1)',
  },
  linkText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 17,
    color: "rgba(0, 118, 255, 1)",
    textDecorationLine: "underline",
  },
  boldText: {
    marginVertical: 10,
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
},
});
