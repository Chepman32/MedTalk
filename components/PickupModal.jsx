import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import attention from '../assets/icons/attention.png';
import close from '../assets/icons/close.png';
import { useNavigation } from '@react-navigation/native';
import filter from '../assets/icons/filter.png';
import { pickupPoints } from '../mockData';

export const PickupModal = ({ isModalVisible, hide, addressess }) => {
  const [selected, setSelected] = useState('');
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={hide}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <View style={styles.row}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image style={styles.filterIcon} source={filter} />
                      <Text style={styles.title}>Фильтр</Text>
          </View>
          <TouchableOpacity onPress={hide}>
            <Image style={styles.closeIcon} source={close} />
          </TouchableOpacity>
        </View>
              <View>
                  <ScrollView bounces={false}>
                  {
                      pickupPoints.map((pp, index) => (
                        <TouchableOpacity key={pp} style={selected === pp ? styles.activeButton : styles.inActiveButton} onPress={() => setSelected(pp)}>
                        <Text style={styles.mainText}>{pp} </Text>
                    </TouchableOpacity>
                      ))
                  }
                  </ScrollView>
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
