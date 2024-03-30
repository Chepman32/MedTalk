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

export const PharmacyBranchesModal = ({ isModalVisible, hide }) => {
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
                      <Text style={styles.title}>О нас</Text>
          </View>
          <TouchableOpacity onPress={hide}>
            <Image style={styles.closeIcon} source={close} />
          </TouchableOpacity>
              </View>
              <ScrollView>
              {
                            stores.length ? stores.map((s, index) => <PharmacyItem
                                key={s.title + index} title={s.text}
                                image={s.image}
                                address={s.address}
                                rating={s.rating}
                                isFavorite={s.isFavorite} contacts={s.contacts}
                            />)
                            : null
                        }
              </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    alignItems: 'center',
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
