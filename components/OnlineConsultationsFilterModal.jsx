import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import attention from '../assets/icons/attention.png';
import close from '../assets/icons/close.png';
import { useNavigation } from '@react-navigation/native';
import filter from '../assets/icons/filter.png';

export const OnlineConsultationsFilterModal = ({ isModalVisible, hide }) => {
  const [selected, setSelected] = useState("online")
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={hide}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <View style={styles.row}>
                  <View style={{ flexDirection: 'row', alignItems: "center" }}>
                      <Image style={styles.filterIcon} source={filter} />
                      <Text style={styles.title}>Фильтр</Text>
          </View>
          <TouchableOpacity onPress={hide}>
            <Image style={styles.closeIcon} source={close} />
          </TouchableOpacity>
        </View>
              <View>
              <TouchableOpacity style={selected === "online" ? styles.activeButton : styles.inActiveButton} onPress={() => setSelected("online")}>
                  <Text style={styles.mainText}>Сейчас онлайн</Text>
              </TouchableOpacity>
              <TouchableOpacity style={selected === "all" ? styles.activeButton : styles.inActiveButton} onPress={() => setSelected("all")}>
                  <Text style={styles.mainText}>Все</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={hide} >
                  <Text style={styles.buttonText}>Применить</Text>
        </TouchableOpacity>
              </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 0
  },
  modalContent: {
    width: SCREEN_WIDTH,
      height: SCREEN_HEIGHT * 0.4,
    justifyContent: 'space-between',
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
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
      },
    filterIcon: {
        width: SCREEN_WIDTH * 0.1,
        height: SCREEN_WIDTH * 0.1,
        marginRight: SCREEN_WIDTH * 0.02,
    },
  icon: {
    width: 25,
    height: 25,
  },
  closeIcon: {
    width: 10,
    height: 10,
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
    inActiveButton: {
        width: '100%',
        height: SCREEN_HEIGHT * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SCREEN_HEIGHT * 0.01,
        borderWidth: 1,
        borderColor: 'rgba(235, 235, 235, 1',
        borderRadius: 8,
    },
    activeButton: {
        width: '100%',
        height: SCREEN_HEIGHT * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SCREEN_HEIGHT * 0.01,
        backgroundColor: 'rgba(0, 137, 100, 0.2)',
      borderWidth: 1,
        borderColor: 'rgba(235, 235, 235, 1',
        borderRadius: 8,
  },
});
