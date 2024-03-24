import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import attention from '../assets/icons/attention.png';
import close from '../assets/icons/close.png';
import { useNavigation } from '@react-navigation/native';
import locationCity from '../assets/icons/locationCity.png';

export const GeolocationModal = ({ isModalVisible, hide, city }) => {
    
    const navigation = useNavigation();
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={hide}
      style={styles.modal}
      >
          <View style={styles.container}>
      <Image source={locationCity} style={styles.icon} />
              <Text style={styles.question}>Ваш город {city}?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={hide} >
          <Text style={styles.buttonText}>Да</Text>
        </TouchableOpacity>
                  <TouchableOpacity style={[styles.button, styles.noButton]} onPress={() => {
                      hide()
                      navigation.navigate("ChooseCity")
        }} >
          <Text style={styles.noButtonText}>Нет</Text>
        </TouchableOpacity>
      </View>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    container: {
      width: SCREEN_WIDTH * 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
        padding: 20,
    borderRadius: 8,
  },
  icon: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: 'rgba(0, 137, 100, 1)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  noButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(219, 219, 219, 1)',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    },
    noButtonText: {
        color: 'rgba(21, 21, 21, 1)',
        fontWeight: 'bold',
      },
});
