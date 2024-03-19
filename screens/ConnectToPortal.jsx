
/* eslint-disable quotes */
import React, { useState } from 'react';
import {SafeAreaView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { ConnectToPortalItem } from '../components/ConnectToPortalItem';

export const ConnectToPortal = () => {
    const [selected, setSelected] = useState("")
  return (
    <SafeAreaView style={styles.container}>
          <Text style={styles.mainText}>
          Выберите подходящее из списка:
          </Text>
          <ConnectToPortalItem text={"Аптека"} selected={selected} setSelected={setSelected} />
          <ConnectToPortalItem text={"Выезд на дом"} selected={selected} setSelected={setSelected} />
          <ConnectToPortalItem text={"Медицинский центр"} selected={selected} setSelected={setSelected} />
          <ConnectToPortalItem text={"Лаборатория"} selected={selected} setSelected={setSelected} />
          <ConnectToPortalItem text={"Стоматология"} selected={selected} setSelected={setSelected} />
          <ConnectToPortalItem text={"Ветеринарная клиника"} selected={selected} setSelected={setSelected} />
          <ConnectToPortalItem text={"Медицинское страхование"} selected={selected} setSelected={setSelected} />
          <ConnectToPortalItem text={"Торгующая компания"} selected={selected} setSelected={setSelected} />
          <ConnectToPortalItem text={"Сервис и ремонт"} selected={selected} setSelected={setSelected} />
          <TouchableOpacity style={selected ? styles.button : {...styles.button, ...styles.disabledButton}} >
            <Text style={styles.buttonText}>Отправить</Text>
          </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    paddingVertical: SCREEN_HEIGHT * 0.05,
      paddingHorizontal: SCREEN_WIDTH * 0.025,
  },
    mainText: {
      marginBottom: SCREEN_HEIGHT * 0.01,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: 'rgba(21, 21, 21, 1)',
    },
    button: {
        width: SCREEN_WIDTH * 0.95,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: SCREEN_HEIGHT * 0.009,
        backgroundColor: 'rgba(0, 137, 100, 1)',
        borderRadius: 8,
    },
    disabledButton: {
        opacity: 0.2,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        textAlign: 'center',
        color: '#fff',
      },
});
