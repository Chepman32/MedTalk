
/* eslint-disable quotes */
import React, { useState } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { InputContainer } from '../components/InputContainer';
import { useNavigation } from '@react-navigation/native';
import { SMSverification } from '../components/SMSverification';
import { ConfirmButton } from '../components/ConfirmButton';
import { CancelButton } from '../components/CancelButton';

export const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState("")
    const [confirmedPassword, setConfirmedPassword] = useState("")

  const navigation = useNavigation()

  return (
    
    <ScrollView><SafeAreaView style={styles.container}>
          <InputContainer text="Придумайте пароль" value={newPassword} setValue={setNewPassword} isRequired placeholder={"+••••••••"} />
          <InputContainer text="Повторите новый пароль" value={confirmedPassword} setValue={setConfirmedPassword} isRequired placeholder={"••••••••"} />
      <View style={{ width: SCREEN_WIDTH * 0.95, alignItems: "flex-start"}} >
      <Text style={styles.greyText}>Введите код подтверждения</Text>
      </View>
          <ConfirmButton text={"Отправить"} onPress={() => navigation.navigate("PasswordSuccessfulChanged")} />
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
