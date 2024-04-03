/* eslint-disable quotes */

import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants';
import Fav from "../assets/icons/Frame_658375.png";
import NotFav from "../assets/icons/favorite.png";
import MockImage from "../assets/images/Rectangle_329.png"
import star from "../assets/icons/star.png"
import empty_star from "../assets/icons/empty_star.png"
import time from "../assets/icons/Frame_658501.png"
import phone from "../assets/icons/Frame_658502.png"
import geo from "../assets/icons/Frame_658503.png"
import preview1 from "../assets/images/Pharmacy/image_557.png"
import preview2 from "../assets/images/Pharmacy/image_457.png"
import preview3 from "../assets/images/Pharmacy/image_357.png"
import preview4 from "../assets/images/Pharmacy/image_257.png"
import preview5 from "../assets/images/Pharmacy/image_157.png"


export const HomeVisitHead = ({ isFavorite, showModal, showContactsModal, showScheduleModal }) => {
    const [favorite, setFavorite] = useState(isFavorite)

    return (
    <View style={styles.container} >
          <View style={styles.row} >
          <Image style={styles.image} source={MockImage} />
                <View style={styles.content} >
            <View>
              <Text style={styles.title}>Скорая на дом “HealthCity”</Text>
              <TouchableOpacity style={styles.row} onPress={showModal}>
                <Image style={styles.icon} source={star} />
                <Image style={styles.icon} source={star} />
                <Image style={styles.icon} source={star} />
                <Image style={styles.icon} source={star} />
                <Image style={styles.icon} source={empty_star}/>
              </TouchableOpacity>
              <View style={styles.row}>
                <TouchableOpacity onPress={showScheduleModal}>
                <Image style={styles.icon} source={time} />
              </TouchableOpacity>
                <TouchableOpacity onPress={showContactsModal}>
                <Image style={styles.icon} source={phone} />
              </TouchableOpacity>
                <Image style={styles.icon} source={geo} />
              </View>
                </View>
                <TouchableOpacity onPress={() => setFavorite(!favorite)}>
                <Image style={styles.icon} source={favorite ? Fav : NotFav} />
              </TouchableOpacity>
          </View>
          </View>
    </View>
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
    icon: {
        width: 20,
        height: 20,
        marginTop: SCREEN_WIDTH * 0.03,
  },
  previews: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
},
  preview: {
    width: SCREEN_WIDTH * 0.12,
    height: SCREEN_WIDTH * 0.12,
    marginTop: SCREEN_WIDTH * 0.03,
    borderRadius: SCREEN_WIDTH * 0.015,
  },
});
