/* eslint-disable quotes */

import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../constants';
import Fav from "../assets/icons/Frame_658375.png";
import NotFav from "../assets/icons/favorite.png";

export const FavoriteItem = ({ text, icon, type, isFavorite }) => {
    const [favorite, setFavorite] = useState(isFavorite)

    return (
    <TouchableOpacity style={styles.container} >
          <View style={styles.row} >
          <Image style={styles.image} source={icon} />
                <View style={styles.content} >
                <Text style={styles.boldText}>{text}</Text>
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
