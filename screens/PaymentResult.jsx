import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SCREEN_WIDTH } from '../constants';
import SuccessfulPayment from '../components/SuccessfulPayment';
import PaymentError from '../components/PaymentError';

export default function PaymentResult({route}) {
    const { isSuccess } = route.params;

  return (
      <View style={styles.container}>
          {
              isSuccess ? <SuccessfulPayment/> : <PaymentError/>
          }
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: SCREEN_WIDTH * 0.07,
        height: SCREEN_WIDTH * 0.07,
        marginBottom: SCREEN_WIDTH * 0.05,
    },
    row: {
        flexDirection: 'row',
        marginTop: SCREEN_WIDTH * 0.05,
    },
    title: {
        fontSize: SCREEN_WIDTH * 0.05,
        lineHeight: SCREEN_WIDTH * 0.06,
        fontWeight: '600',
    },
    text: {
        fontSize: SCREEN_WIDTH * 0.04,
        lineHeight: SCREEN_WIDTH * 0.05,
        color: 'rgba(136, 136, 136, 1)',
    },
    boldText: {
        fontSize: SCREEN_WIDTH * 0.04,
        lineHeight: SCREEN_WIDTH * 0.05,
        fontWeight: '500',
        color: 'rgba(136, 136, 136, 1)',
    },
});
