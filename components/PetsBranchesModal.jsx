import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import attention from '../assets/icons/attention.png';
import close from '../assets/icons/close.png';
import { useNavigation } from '@react-navigation/native';
import filter from '../assets/icons/filter.png';
import { stores } from '../mockData';
import { PharmacyItem } from './PharmacyItem';
import { DentistsItem } from './DentistsItem';
import itemImage from "../assets/images/Frame_57916.png"
import { Item } from './Item';

export const PetsBranchesModal = ({ isModalVisible, hide }) => {
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={hide}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <View style={styles.row}>
                  <View style={{ flexDirection: 'row', alignItems: "center" }}>
                      <Text style={styles.title}>Наши филиалы</Text>
          </View>
          <TouchableOpacity onPress={hide}>
            <Image style={styles.closeIcon} source={close} />
          </TouchableOpacity>
              </View>
              <ScrollView>
              <Item
                        image={itemImage}
                        title={"Ветеринарная клиника “Cats and Dogs”"}
                        schedule={"Пн: Круглосуточно"}
                        phone={"+7 707 666 44 22"}
                        address={"г. Алматы, ул. Аль-Фар..."}
                        services={"Педиатрия, Неврология, Лабораторат..."}
                  />
                  <Item
                        image={itemImage}
                        title={"Ветеринарная клиника “Cats and Dogs”"}
                        schedule={"Пн: Круглосуточно"}
                        phone={"+7 707 666 44 22"}
                        address={"г. Алматы, ул. Аль-Фар..."}
                        services={"Педиатрия, Неврология, Лабораторат..."}
                  />
                  <Item
                        image={itemImage}
                        title={"Ветеринарная клиника “Cats and Dogs”"}
                        schedule={"Пн: Круглосуточно"}
                        phone={"+7 707 666 44 22"}
                        address={"г. Алматы, ул. Аль-Фар..."}
                        services={"Педиатрия, Неврология, Лабораторат..."}
                    />
              </ScrollView>
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
      height: SCREEN_HEIGHT * 0.8,
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
  closeIcon: {
    width: 10,
    height: 10,
  },
  mainText: {
    fontSize: 16,
    marginBottom: 10,
    }
});
