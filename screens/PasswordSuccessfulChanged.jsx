
/* eslint-disable quotes */
import React from 'react';
import {SafeAreaView, StyleSheet, Text } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { CancelButton } from '../components/CancelButton';

export const PasswordSuccessfulChanged = () => {

  const navigation = useNavigation();

  return (

    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Готово!</Text>
      <Text style={styles.mainText}>Ваш пароль успешно изменен!</Text>
          <CancelButton text={"Войти"} onPress={() => navigation.navigate("SignIn")}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    flex: 1,
    alignItems: "flex-start",
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
    mainText: {
      marginBottom: SCREEN_HEIGHT * 0.01,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: 'rgba(21, 21, 21, 1)',
  },
  title: {
    marginBottom: SCREEN_HEIGHT * 0.03,
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "600",
    },
});
