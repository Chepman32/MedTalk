
/* eslint-disable quotes */
import React, { useState } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { InputContainer } from '../components/InputContainer';
import { useNavigation } from '@react-navigation/native';
import { SMSverification } from '../components/SMSverification';
import { ConfirmButton } from '../components/ConfirmButton';
import { CancelButton } from '../components/CancelButton';

export const PasswordRecover = () => {
  const [name, setName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState("")
  const [password, setPassword] = useState('');
  const [IIN, setIIN] = useState("")
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigation = useNavigation()

  return (
    
    <ScrollView><SafeAreaView style={styles.container}>
      <InputContainer text="Контактный номер" value={phone} setValue={setPhone} isRequired placeholder={"+&000 000 0000"} />
      <View style={{ width: SCREEN_WIDTH * 0.95, alignItems: "flex-start"}} >
      <Text style={styles.greyText}>Введите код подтверждения</Text>
      </View>
      <SMSverification/>
          <ConfirmButton text={"Отправить"} onPress={() => navigation.navigate("ChangePassword")} />
          <CancelButton text={"Назад"} onPress={() => navigation.goBack()}/>
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
    mainText: {
      marginBottom: SCREEN_HEIGHT * 0.01,
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
  greyButton: {
    width: SCREEN_WIDTH * 0.9,
    justifyContent: 'center',
  alignItems: 'center',
    marginTop: SCREEN_HEIGHT * 0.03,
    paddingVertical: SCREEN_HEIGHT * 0.015,
    backgroundColor: 'rgba(0, 137, 100, 1)',
    borderRadius: 8,
},
greyButtonText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    textAlign: 'center',
    color: '#fff',
},
});
