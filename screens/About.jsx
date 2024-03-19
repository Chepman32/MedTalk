/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, ScrollView} from 'react-native';
import { SCREEN_WIDTH } from '../constants';

export const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.mainText} >
          Медицинская информационная платформа «Med Talk» это облачные сервисы 
и справочные системы для населения, врачей, медицинских организаций 
и торгующих компаний в области здравоохранения. Цель проекта «Med Talk» - повышение качества медицинской помощи и улучшение здоровья населения.
                  </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
        flex: 1,
      paddingHorizontal: SCREEN_WIDTH * 0.025,
  },
  mainText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: 'rgba(21, 21, 21, 1)',
  },
});
