import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import attention from '../assets/icons/attention.png';
import close from '../assets/icons/close.png';
import { useNavigation } from '@react-navigation/native';
import filter from '../assets/icons/filter.png';
import { DoctorHead } from './DoctorHead';
import { ConfirmButton } from './ConfirmButton';

export const DoctorModal = ({ isModalVisible, hide }) => {
  const [selected, setSelected] = useState("open")
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={hide}
      style={styles.modal}
    >
          <View style={styles.modalContent}>
        <View style={styles.row}>
                  <View style={{ flexDirection: 'row', alignItems: "center" }}>
                      <Text style={styles.title}>Онлайн-запись</Text>
          </View>
          <TouchableOpacity onPress={hide}>
            <Image style={styles.closeIcon} source={close} />
                  </TouchableOpacity>
              </View>
              <DoctorHead title={"Соловьев Александр Викторович"}/>
              <Text style={styles.greyText}>
              Место работы
        </Text>
              <Text style={styles.mainText}>
              “HealthCity of heaven medical”
              </Text>
              <Text style={styles.greyText}>
              Специализация
        </Text>
              <Text style={styles.mainText}>
              Терапевт, Кардиолог, Хирург, Окулист
              </Text>
              <Text style={styles.greyText}>
              Стаж работы
        </Text>
              <Text style={styles.mainText}>
              27 лет
              </Text>
              <Text style={styles.greyText}>
              Цена на первичный прием
        </Text>
              <Text style={styles.mainText}>
              7 000 ₸
              </Text>
              <Text style={styles.greyText}>
              Цена на повторный прием
        </Text>
              <Text style={styles.mainText}>
              5 000 ₸
              </Text>
              <ConfirmButton text={"Записаться"} onPress={hide}/>
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
      height: SCREEN_HEIGHT * 0.67,
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
  closeIcon: {
    width: SCREEN_WIDTH * 0.04,
    height: SCREEN_WIDTH * 0.04,
    },
    greyText: {
        fontSize: 16,
        marginBottom: 10,
        color: "rgba(158, 158, 158, 1)"
        },
  mainText: {
    fontSize: SCREEN_WIDTH * 0.05,
    marginBottom: 10,
    },
});
