import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import close from '../assets/icons/close.png';
import bigPhone from '../assets/icons/bigPhone.png';
import phone from '../assets/icons/phone.png';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';

export const ContactsModal = ({ isModalVisible, hide }) => {
    
  return (
    <Modal isVisible={isModalVisible} onBackdropPress={hide} style={styles.modal}>
      <View style={styles.modalContent}>
      <View style={styles.row}>
                  <View style={{ flexDirection: 'row', alignItems: "center" }}>
                  <Image style={styles.phoneIcon} source={bigPhone} />
                      <Text style={styles.title}>Контакты</Text>
          </View>
          <TouchableOpacity onPress={hide}>
            <Image style={styles.closeIcon} source={close} />
          </TouchableOpacity>
              </View>
              <View style={styles.contact}>
                  <Image style={styles.phone} source={phone} />
                  <Text style={styles.text} >
                  +7 701 234 56 78
                  </Text>
              </View>
              <View style={styles.contact}>
                  <Image style={styles.phone} source={phone} />
                  <Text style={styles.text} >
                  +7 701 234 56 78
                  </Text>
              </View>
              <View style={styles.contact}>
                  <Image style={styles.phone} source={phone} />
                  <Text style={styles.text} >
                  +7 701 234 56 78
                  </Text>
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
        fontSize: SCREEN_HEIGHT * 0.03,
        lineHeight: SCREEN_HEIGHT * 0.03,
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
