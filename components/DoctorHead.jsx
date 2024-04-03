/* eslint-disable quotes */

import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import { SCREEN_WIDTH } from '../constants';
import Fav from "../assets/icons/Frame_658375.png";
import NotFav from "../assets/icons/favorite.png";
import star from "../assets/icons/star.png"
import empty_star from "../assets/icons/empty_star.png"
import docImage from "../assets/images/image_151.png"


export const DoctorHead = ({ title, isFavorite, showModal }) => {
    const [favorite, setFavorite] = useState(isFavorite)

    return (
    <View style={styles.container} >
          <View style={styles.row} >
          <Image style={styles.image} source={docImage} />
                <View style={styles.content} >
            <View>
              <Text style={styles.title}>{title} </Text>
              <TouchableOpacity style={styles.row} onPress={showModal}>
                <Image style={styles.icon} source={star} />
                <Image style={styles.icon} source={star} />
                <Image style={styles.icon} source={star} />
                <Image style={styles.icon} source={star} />
                <Image style={styles.icon} source={empty_star}/>
              </TouchableOpacity>
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
    fontSize: SCREEN_WIDTH * 0.05,
    lineHeight: SCREEN_WIDTH * 0.06,
    fontWeight: "500",
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
    fontSize: SCREEN_WIDTH * 0.04,
    lineHeight: SCREEN_WIDTH * 0.05,
    color: 'rgba(21, 21, 21, 1)',
  },
    icon: {
        width: 20,
        height: 20,
        marginTop: SCREEN_WIDTH * 0.03,
  },
});
