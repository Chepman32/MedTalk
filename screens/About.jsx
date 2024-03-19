/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, ScrollView} from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';

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
          <Text style={styles.boldText} >
          Ключевые преимущества платформы для населения:
          </Text>
          <Text style={styles.mainText} >
          Круглосуточная возможность получать информацию обо всех видах услуг в сфере здравоохранения. Поиск лекарств и аптек, врачей, медицинских центров, лабораторий и стоматологий. Это все на Web платформе или мобильном приложении в Вашем телефоне. Онлайн запись в любое время. История болезни и всех заключений храниться на ID карте с возможностью менять клинику без потери данных. Med Talk автоматически посчитает стоимость назначенных препаратов и посоветует аптеку. Напомнит о записи и многое другое.
          </Text>
          <Text style={styles.boldText} >
          Для медицинских организаций:
          </Text>
          <Text style={styles.mainText} >
          Облачная медицинская информационная система для автоматизации клиник, медицинских центров, стоматологий и других. Полный набор функций для автоматизации работы регистратуры, кассы, врачей, стационара. Сайт клиники на базе платформы, реклама и продвижение клиники. Привлечение потока пациентов в клинику: баннерная и контекстная реклама в сервисах платформы. Поиск и приобретение медицинского оборудования и ИМН по самым лучшем ценам.
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SCREEN_HEIGHT * 0.01,
      paddingHorizontal: SCREEN_WIDTH * 0.025,
  },
  mainText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: 'rgba(21, 21, 21, 1)',
  },
  boldText: {
    marginVertical: 10,
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
},
});
