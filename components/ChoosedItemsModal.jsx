import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import close from '../assets/icons/close.png';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import cart_black from '../assets/icons/cart_black.png';
import MockImage1 from '../assets/images/medication1.png';
import { Quantity } from './Quantity';

export const ChoosedItemsModal = ({ isModalVisible, hide }) => {

  return (
    <Modal isVisible={isModalVisible} onBackdropPress={hide} style={styles.modal}>
      <View style={styles.modalContent}>
      <View style={styles.row}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image style={styles.cartIcon} source={cart_black} />
                      <Text style={styles.title}>Вы выбрали</Text>
          </View>
          <TouchableOpacity onPress={hide}>
            <Image style={styles.closeIcon} source={close} />
          </TouchableOpacity>
              </View>
              <View style={styles.row}>
                  <Image style={styles.image} source={MockImage1} />
                  <View>
                      <Text style={styles.title}>Парацетамол</Text>
                      <Quantity/>
                      <Text style={styles.text}>200мг/500мг</Text>
                  </View>
                  <Text style={styles.price}>1200 ₸</Text>
              </View>
              <TouchableOpacity style={styles.goToCartButton}>
                  <Text style={styles.goToCartText}>Перейти в корзину</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.continueButton} onPress={hide} >
                  <Text style={styles.continueText}>Продолжить покупки</Text>
              </TouchableOpacity>
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
      width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SCREEN_HEIGHT * 0.07,
    },
    text: {
        fontSize: SCREEN_HEIGHT * 0.02,
        lineHeight: SCREEN_HEIGHT * 0.02,
        fontWeight: '200',
        color: 'rgba(136, 136, 136, 1)',
    },
    image: {
        width: SCREEN_WIDTH * 0.1,
        height: SCREEN_WIDTH * 0.1,
        marginRight: SCREEN_WIDTH * 0.02,
        borderWidth: 1,
        borderColor: 'rgba(235, 235, 235, 1)',
        borderRadius: 8,
      },
    title: {
        fontSize: 18,
        fontWeight: '600',
    },
    price: {
        fontSize: 16,
        lineHeight: 16,
        fontWeight: '600',
        color: 'rgba(0, 137, 100, 1)',
      },
  closeIcon: {
    width: 15,
    height: 15,
    },
    cartIcon: {
        width: SCREEN_WIDTH / 9,
        height: SCREEN_WIDTH  / 9,
        marginRight: SCREEN_WIDTH * 0.02,
    },
    contact: {
        width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: SCREEN_HEIGHT * 0.02,
    },
    goToCartButton: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SCREEN_HEIGHT * 0.04,
        paddingVertical: 20,
        backgroundColor: 'rgba(0, 137, 100, 1)',
        borderRadius: 8,
    },
    goToCartText: {
        fontSize: 18,
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 1)',
    },
    continueButton: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SCREEN_HEIGHT * 0.04,
        paddingVertical: 20,
        backgroundColor: 'rgba(245, 245, 245, 1)',
        borderRadius: 8,
    },
    continueText: {
        fontSize: 18,
        fontWeight: '400',
        color: 'rgba(21, 21, 21, 1)',
    },
});
