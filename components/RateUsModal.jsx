import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import bigStar_filled from '../assets/icons/bigStar_filled.png';
import bigStar_empty from '../assets/icons/bigStar_empty.png';
import close from '../assets/icons/close.png';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';

export const RateUsModal = ({ isModalVisible, hide }) => {
  const [rating, setRating] = useState(4);

  const handleRating = (value) => {
    setRating(value);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const star = i <= rating ? bigStar_filled : bigStar_empty;
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRating(i)}>
          <Image style={styles.star} source={star} />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <Modal isVisible={isModalVisible} onBackdropPress={hide} style={styles.modal}>
      <View style={styles.modalContent}>
      <View style={styles.row}>
                  <View style={{ flexDirection: 'row', alignItems: "center" }}>
                  <Image style={styles.starIcon} source={bigStar_empty} />
                      <Text style={styles.title}>Оцените нас</Text>
          </View>
          <TouchableOpacity onPress={hide}>
            <Image style={styles.closeIcon} source={close} />
          </TouchableOpacity>
              </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          {renderStars()}
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Применить</Text>
        </TouchableOpacity>
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
    starIcon: {
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
    star: {
        width: SCREEN_WIDTH / 7,
        height: SCREEN_WIDTH  / 7,
        marginRight: SCREEN_WIDTH * 0.02,
      },
    buttonContainer: {
        width: '95%',
    backgroundColor: 'rgba(0, 137, 100, 1)',
    paddingVertical: SCREEN_HEIGHT * 0.02,
    borderRadius: 8,
        justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
