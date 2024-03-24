/* eslint-disable quotes */

import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants';
import Fav from "../assets/icons/Frame_658375.png";
import NotFav from "../assets/icons/favorite.png";
import MockImage from "../assets/images/Rectangle__330.png"
import star from "../assets/icons/star.png"
import empty_star from "../assets/icons/empty_star.png"
import time from "../assets/icons/Frame_658501.png"
import phone from "../assets/icons/Frame_658502.png"
import geo from "../assets/icons/Frame_658503.png"

export const InsuranceHead = ({ text, icon, type, isFavorite }) => {
    const [favorite, setFavorite] = useState(isFavorite)

    return (
    <TouchableOpacity style={styles.container} >
          <View style={styles.row} >
          <Image style={styles.image} source={MockImage} />
                <View style={styles.content} >
            <View>
              <Text style={styles.title}>Interteach</Text>
              <View style={styles.row}>
                <Image style={styles.icon} source={star} />
                <Image style={styles.icon} source={star} />
                <Image style={styles.icon} source={star} />
                <Image style={styles.icon} source={star} />
                <Image style={styles.icon} source={empty_star}/>
              </View>
              <View style={styles.row}>
                <Image style={styles.icon} source={time} />
                <Image style={styles.icon} source={phone} />
                <Image style={styles.icon} source={geo} />
              </View>
                </View>
                <TouchableOpacity onPress={() => setFavorite(!favorite)}>
                <Image style={styles.icon} source={favorite ? Fav : NotFav} />
              </TouchableOpacity>
          </View>
          </View>
          <Text style={styles.text}>{type}</Text>
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
        justifyContent: "space-between"
  },
  title: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: "600",
    },
    row: {
        flexDirection: "row",
    },
  image: {
    width: SCREEN_WIDTH * 0.2,
    height: SCREEN_WIDTH * 0.2,
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
    color: "rgba(0, 137, 100, 1)",
    width: SCREEN_WIDTH * 0.6, // Set a fixed width
  },
    icon: {
        width: 20,
        height: 20,
        marginTop: SCREEN_WIDTH * 0.03,
      },
});
