/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, ScrollView} from 'react-native';
import { SCREEN_WIDTH } from '../constants';

export const Franchise = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.mainText} >
          «Med Talk» – медицинская информационная платформа для всех участников рынка в сфере здравоохранения.
Рынок медицинских услуг один из немногих растет и развивается непрерывно.
Работа под брендом «Med Talk» это возможность предоставлять населению и медицинским организациям широкий спектр услуг и сервисов в области здравоохранения.
Начать работу быстро и комфортно – очень просто! Это возможно благодаря всесторонней поддержке, которую наши партнеры получают буквально с момента принятия решения о покупке франшизы. Специалисты «Med Talk» сопровождают франчайзинг – партнера на всех этапах старта бизнеса.
                  </Text>
                  <View style={styles.row}>
                  <Text style={styles.blueText}>
                          <Text style={styles.mainText} >
                          По всем вопросам и приобретению свяжитесь с нами:
                  </Text>
                          &nbsp; medtalk@medtalk.kz
</Text>
                  </View>
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
    row: {
        flexDirection: "row"
      },
      blueText: {
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 15,
        color: 'blue',
      },
});
