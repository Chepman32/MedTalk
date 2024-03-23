
/* eslint-disable quotes */
import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { InputContainer } from '../components/InputContainer';
import { useNavigation } from '@react-navigation/native';

export const SignIn = () => {
  const [phone, setPhone] = useState('');
  const [password, setassword] = useState('');

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
          <InputContainer text="Контактный номер" value={phone} setValue={setPhone} isRequired/>
      <InputContainer text="Пароль" value={password} setValue={setassword} isRequired/>
      <View style={{ width: SCREEN_WIDTH * 0.95, alignItems: "flex-end"}} >
        <TouchableOpacity onPress={() => navigation.navigate("PasswordRecover")}>
        <Text style={styles.greenText}>Забыли пароль?</Text>
      </TouchableOpacity>
      </View>
       <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.returnButton} onPress={() => {navigation.navigate("Home")}} >
            <Text style={styles.returnButtonText}>Вернуться на главную</Text>
      </TouchableOpacity>
      <Text style={styles.greyText}>Еще не зарегистрированы?</Text>
      <TouchableOpacity onPress={() => {navigation.navigate("SignUp")}} >
      <Text style={styles.linkText}>Регистрация</Text>
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
