/* eslint-disable quotes */

import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants';
import Fav from "../assets/icons/Frame_658375.png";
import NotFav from "../assets/icons/favorite.png";
import cart_white from "../assets/icons/cart_white.png";
import MockImage1 from '../assets/images/medication1.png';
import { FlatCarousel } from './FlatCarousel';

export const MedicationsItem = ({ text, icon, type, isFavorite }) => {
    const [favorite, setFavorite] = useState(isFavorite)

    return (
    <TouchableOpacity style={styles.container} >
        <View style={styles.row} >
          <FlatCarousel/>
          <View style={styles.content} >
            <View >
            <Text style={styles.title}>Парацетамол</Text>
            <Text style={styles.greyText}>200мг/500мг</Text>
            <Text style={styles.price}>1200 ₸</Text>
          </View>
            <View style={styles.buttons} >
              <TouchableOpacity onPress={() => setFavorite(!favorite)}>
                <Image style={styles.icon} source={favorite ? Fav : NotFav} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyButton} >
                <Image style={styles.buyButtonIcon} source={cart_white} />
                <Text style={styles.buyButtonText}>В корзину</Text>
              </TouchableOpacity>
          </View>
          </View>
          </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.95,
        paddingVertical: SCREEN_WIDTH * 0.01,
    paddingHorizontal: SCREEN_WIDTH * 0.04,
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    overflow: 'hidden',
    borderRadius: 8,
        borderWidth: 1,
    borderColor: "rgba(219, 219, 219, 1)",
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 6,
    },
    content: {
        flex: 1,
        flexDirection: "row",
      justifyContent: "space-between",
        alignItems: "center"
    },
    row: {
        flexDirection: "row",
    },
  image: {
    width: SCREEN_WIDTH * 0.2,
    height: SCREEN_WIDTH * 0.2,
    resizeMode: "stretch",
    marginRight: SCREEN_WIDTH * 0.01,
  },
    text: {
        maxWidth: SCREEN_WIDTH * 0.8,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: 'rgba(21, 21, 21, 1)',
  },
  boldText: {
    marginVertical: 10,
    fontSize: 12,
    fontWeight: '800',
    lineHeight: 18,
    width: SCREEN_WIDTH * 0.6,
  },
  greyText: {
    marginBottom: SCREEN_HEIGHT * 0.02,
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: 'rgba(21, 21, 21, 1)',
  },
  price: {
    maxWidth: SCREEN_WIDTH * 0.8,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    color: 'rgba(0, 137, 100, 1)',
  },
  buttons: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingRight: SCREEN_WIDTH * 0.05,
  },
  buyButton: {
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_HEIGHT * 0.04,
    justifyContent: "center",
    alignItems: "center",
    marginTop: SCREEN_WIDTH * 0.15,
    backgroundColor: "rgba(0, 137, 100, 1)",
    borderRadius: 8,
  },
  buyButtonIcon: {
    width: SCREEN_WIDTH * 0.01,
    height: SCREEN_WIDTH * 0.01,
  },
  buyButtonText: {
    maxWidth: SCREEN_WIDTH * 0.8,
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 16,
    color: 'rgba(255, 255, 255, 1)',
  },
    icon: {
        width: 20,
        height: 20,
        marginTop: SCREEN_WIDTH * 0.03,
      },
});
