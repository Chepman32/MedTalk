import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import attention from '../assets/icons/attention.png';
import close from '../assets/icons/close.png';

export const AuthWarningModal = ({ isModalVisible, setModalVisible, hide }) => {
  return (
    <Modal 
      isVisible={isModalVisible} 
      onBackdropPress={hide} 
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <View style={styles.row}>
          <Image style={styles.icon} source={attention} />
          <TouchableOpacity onPress={hide}>
            <Image style={styles.closeIcon} source={close} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Внимание!</Text>
        <Text style={styles.mainText}>Услуга “Выезд на дом” доступна только для авторизованных пользователей.</Text>
        <Text style={styles.mainText}>Пожалуйста авторизуйтесь</Text>
        <TouchableOpacity style={styles.button} onPress={hide}>
          <Text style={styles.buttonText}>Отправить</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    alignItems: 'center',
  },
  modalContent: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT * 0.5,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  icon: {
    width: 25,
    height: 25,
  },
  closeIcon: {
    width: 10,
    height: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  mainText: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    width: '100%',
    justifyContent: 'center',
      alignItems: 'center',
    marginTop: SCREEN_HEIGHT * 0.03,
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
