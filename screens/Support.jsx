import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SuccessfulSupport} from '../components/SuccessfulSupport';
import { SCREEN_WIDTH } from '../constants';

export const Support = () => {
  const [value, setValue] = useState('');
  const [sent, setSent] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {sent ? (
        <SuccessfulSupport />
      ) : (
        <View>
          <Text style={styles.mainText}>
            Если у Вас возникли вопросы или сложности в работе на платформе Med
            Talk, сообщите нам:
          </Text>
          <TextInput
            value={value}
            onChangeText={setValue}
            style={styles.input}
            placeholder="Расскажите нам о своей проблеме"
            multiline={true}
            textAlignVertical="top"
          />
          <TouchableOpacity style={styles.button} onPress={() => setSent(true)}>
            <Text style={styles.buttonText}>Отправить</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  mainText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: 'rgba(21, 21, 21, 1)',
  },
  input: {
    width: SCREEN_WIDTH * 0.95,
    height: 200,
    marginVertical: 20,
    padding: 12,
    paddingTop: 12,
    backgroundColor: 'rgba(235, 235, 235, 1)',
    borderRadius: 8,
  },
  button: {
    width: SCREEN_WIDTH * 0.95,
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
