import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import close from '../assets/icons/close.png';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import bigClock from '../assets/icons/bigClock.png';

export const ScheduleModal = ({ isModalVisible, hide }) => {
    
  return (
    <Modal isVisible={isModalVisible} onBackdropPress={hide} style={styles.modal}>
      <View style={styles.modalContent}>
      <View style={styles.row}>
                  <View style={{ flexDirection: 'row', alignItems: "center" }}>
                  <Image style={styles.phoneIcon} source={bigClock} />
                      <Text style={styles.title}>График работы</Text>
          </View>
          <TouchableOpacity onPress={hide}>
            <Image style={styles.closeIcon} source={close} />
          </TouchableOpacity>
              </View>
              <View style={styles.row}>
                  <Text style={styles.text}>Понедельник</Text>
                  <Text style={styles.text}>9:00 - 21:00</Text>
              </View>
              <View style={styles.row}>
                  <Text style={styles.text}>Вторник</Text>
                  <Text style={styles.text}>9:00 - 20:00</Text>
              </View>
              <View style={styles.row}>
                  <Text style={styles.text}>Среда</Text>
                  <Text style={styles.text}>8:00 - 16:00</Text>
              </View>
              <View style={styles.row}>
                  <Text style={styles.text}>Четверг</Text>
                  <Text style={styles.text}>Круглосуточно</Text>
              </View>
              <View style={styles.row}>
                  <Text style={styles.text}>Пятница</Text>
                  <Text style={styles.text}>Круглосуточно</Text>
              </View>
              <View style={styles.row}>
                  <Text style={styles.text}>Суббота</Text>
                  <Text style={styles.text}>Круглосуточно</Text>
              </View>
              <View style={styles.row}>
                  <Text style={styles.text}>Воскресенье</Text>
                  <Text style={styles.text}>Круглосуточно</Text>
              </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 0,
  },
  modalContent: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 8,
  },
    row: {
      width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SCREEN_HEIGHT * 0.07,
    },
    text: {
        fontSize: SCREEN_HEIGHT * 0.02,
        lineHeight: SCREEN_HEIGHT * 0.02,
        fontWeight: "400"
    },
    phone: {
        width: 20,
        height: 20,
        marginRight: SCREEN_WIDTH * 0.02,
      },
    title: {
        fontSize: 18,
        fontWeight: '600',
      },
  closeIcon: {
    width: 15,
    height: 15,
    },
    phoneIcon: {
        width: SCREEN_WIDTH / 9,
        height: SCREEN_WIDTH  / 9,
        marginRight: SCREEN_WIDTH * 0.02,
    },
    contact: {
        width: "100%",
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: SCREEN_HEIGHT * 0.02,
    },
});
