/* eslint-disable quotes */
import React, { useState } from 'react';
import {View, SafeAreaView, Text, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import product from "../assets/images/Rectangle__329.png"
import star from "../assets/icons/star.png"
import empty_star from "../assets/icons/empty_star.png"
import message_black from "../assets/icons/message_black.png"
import cart_white from "../assets/icons/cart_white.png"
import { FlatCarousel } from '../components/FlatCarousel';
import Accordion from '../components/Accordion';
import { ChoosedItemsModal } from '../components/ChoosedItemsModal';
import Fav from "../assets/icons/Frame_658375.png";
import NotFav from "../assets/icons/favorite.png";

export const MedicationScreen = () => {
  const [choosedModal, setChoosedModal] = useState(false);
  const [favorite, setFavorite] = useState(false)

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
      <FlatCarousel/>
      <View style={styles.row}>
      <Text style={styles.title}>
      Парацетамол
        </Text>
        <View>
          <Text style={styles.price}>1 200т</Text>
          <Text style={styles.oldPrice}>1 500т</Text>
        </View>
        </View>
        <View style={styles.row}>
        <View >
          <Text style={styles.greyText}>Аптек</Text>
          <Text style={styles.mainText}>1000+</Text>
          </View>
          <View >
          <Text style={styles.greyText}>Форма</Text>
          <Text style={styles.mainText}>Таблетки</Text>
          </View>
          <View >
          <Text style={styles.greyText}>Доза</Text>
          <Text style={styles.mainText}>200 мг / 500 мг</Text>
        </View>
        </View>
        <View style={styles.row}>
        <Accordion title={"Описание"} />
        </View>
        <View style={styles.row}>
        <Accordion title={"Фармакокинетика"} />
        </View>
        <View style={styles.row}>
        <Accordion title={"Режим дозирования"}/>
        </View>
        <View style={styles.row}>
        <Accordion title={"Состав"} />
        </View>
        <View style={styles.row}>
        <Accordion title={"Условия хранения"}/>
        </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.greyButton}>
          <Image style={styles.buttonIcon} source={message_black}/>
          <Text style={styles.greyButtonText} >Есть вопрос?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.greenButton} onPress={() => setChoosedModal(true)}>
        <Image style={styles.buttonIcon} source={cart_white}/>
          <Text style={styles.greenButtonText} >Купить</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => setFavorite(!favorite)} style={styles.favButton} >
                <Image style={styles.icon} source={favorite ? Fav : NotFav} />
              </TouchableOpacity>
        <ChoosedItemsModal isModalVisible={choosedModal} hide={() => setChoosedModal(false)} />
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SCREEN_HEIGHT * 0.01,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    backgroundColor: "#fff",
      position: "relative",
  },
  title: {
    fontSize: SCREEN_WIDTH * 0.05,
    lineHeight: SCREEN_WIDTH * 0.06,
    fontWeight: "600"
  },
  favButton: {
    position: "absolute",
    top: SCREEN_WIDTH * 0.1,
    right: SCREEN_WIDTH * 0.1,
    paddingVertical: SCREEN_WIDTH * 0.015,
    paddingHorizontal: SCREEN_WIDTH * 0.03,
    backgroundColor: "rgba(245, 245, 245, 1)",
    overflow: "hidden",
    borderRadius: SCREEN_WIDTH * 0.03,
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: SCREEN_WIDTH * 0.03,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: SCREEN_WIDTH * 0.03,
    borderTopWidth: 1,
    borderColor: "rgba(245, 245, 245, 1)"
  },
  greyText: {
    fontSize: SCREEN_WIDTH * 0.03,
    lineHeight: SCREEN_WIDTH * 0.04,
    fontWeight: "600",
    color: "rgba(136, 136, 136, 1)"
},
  mainText: {
    marginTop: SCREEN_WIDTH * 0.03,
    fontWeight: '400',
    fontSize: SCREEN_WIDTH * 0.04,
    lineHeight: SCREEN_WIDTH * 0.04,
    color: 'rgba(21, 21, 21, 1)',
  },
  price: {
    fontWeight: '500',
    fontSize: SCREEN_WIDTH * 0.05,
    lineHeight: SCREEN_WIDTH * 0.05,
    color: 'rgba(0, 137, 100, 1)',
  },
  oldPrice: {
    fontWeight: '400',
    fontSize: SCREEN_WIDTH * 0.04,
    lineHeight: SCREEN_WIDTH * 0.06,
    textDecorationLine: "line-through",
    color: 'rgba(136, 136, 136, 1)',
    
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  greyButton: {
    width: SCREEN_WIDTH * 0.43,
    height: SCREEN_HEIGHT * 0.05,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  greyButtonText: {
    marginRight: SCREEN_WIDTH * 0.02,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 14,
  },
  greenButton: {
    width: SCREEN_WIDTH * 0.43,
    height: SCREEN_HEIGHT * 0.05,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    backgroundColor: "rgba(0, 137, 100, 1)",
    color: "#fff"
  },
  greenButtonText: {
    marginRight: SCREEN_WIDTH * 0.02,
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 14,
    color: "rgba(255, 255, 255, 1)"
  },
  buttonIcon: {
    width: SCREEN_WIDTH * 0.05,
    height: SCREEN_WIDTH * 0.05,
    marginRight: SCREEN_WIDTH * 0.02,
  }
  
});
