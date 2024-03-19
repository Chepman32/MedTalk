import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ok from '../assets/icons/ok.png';
import { SCREEN_HEIGHT } from '../constants';

export const SuccessfulMessage = () => {
  const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
          <Image width={25} height={25} source={ok} />
          <Text style={styles.title}>Спасибо за обращение!</Text>
      <Text style={styles.mainText}>
      Сообщение отправлено, мы ответим Вам в ближайшее время
      </Text>
          <Text style={styles.greyText}>Следующие списание 19/01/24</Text>
          <View>
          <Text style={styles.greyText}>(Подписки длятся 1 год)</Text>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
    title: {
        marginBottom: SCREEN_HEIGHT * 0.005,
      textAlign: "center",
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 20,
    color: 'rgba(21, 21, 21, 1)',
    },
    mainText: {
        marginBottom: 30,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 15,
        color: 'rgba(21, 21, 21, 1)',
      },
    greyText: {
    fontWeight: '400',
  fontSize: 12,
  lineHeight: 20,
  color: 'rgba(158, 158, 158, 1)',
},
  button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
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
});
