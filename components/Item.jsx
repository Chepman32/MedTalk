import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import Fav from '../assets/icons/Frame_658375.png';
import NotFav from '../assets/icons/favorite.png';
import MockImage from '../assets/images/Frame_657916.png';
import star from '../assets/icons/star.png';
import empty_star from '../assets/icons/empty_star.png';
import { useNavigation } from '@react-navigation/native';

export const Item = ({ title, image, schedule, phone, address, services, isFavorite, onPress }) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress} >
      <Text style={styles.title}>{title} </Text>
      <View style={styles.row} >
        <Image style={styles.image} source={image} />
        <View style={styles.content} >
          <View>
            <View style={styles.row}>
              <Image style={styles.icon} source={star} />
              <Image style={styles.icon} source={star} />
              <Image style={styles.icon} source={star} />
              <Image style={styles.icon} source={star} />
              <Image style={styles.icon} source={empty_star} />
            </View>
            <View>
              <View style={styles.row} >
                <Text style={styles.boldText}>График:</Text>
                <Text style={styles.text}>{schedule} </Text>
              </View>
              <View style={styles.row} >
                <Text style={styles.boldText}>Телефон:</Text>
                <Text style={styles.text}>{phone} </Text>
              </View>
              <View style={styles.row} >
                <Text style={styles.boldText}>Адрес:</Text>
                <Text style={styles.text}>{address} </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => setFavorite(!favorite)}>
            <Image style={styles.icon} source={favorite ? Fav : NotFav} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer} >
        <Text style={styles.boldText}>Специализация:</Text>
        <Text style={styles.text}>{services} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH * 0.95,
    paddingVertical: SCREEN_WIDTH * 0.02, // Adjusted padding
    paddingHorizontal: SCREEN_WIDTH * 0.04,
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    overflow: 'hidden',
    borderRadius: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(219, 219, 219, 1)',
    shadowOpacity: 0.05,
    shadowRadius: 16,
    elevation: 6,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    lineHeight: 17,
    fontWeight: '600',
    color: 'rgba(0, 137, 100, 1)',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
    color: 'rgba(21, 21, 21, 1)',
    marginVertical: SCREEN_WIDTH * 0.005,
  },
  boldText: {
    marginRight: SCREEN_WIDTH * 0.01,
    fontSize: 12,
    fontWeight: '800',
    lineHeight: 12,
    marginVertical: SCREEN_WIDTH * 0.005,
  },
  icon: {
    width: 20,
    height: 20,
    marginTop: SCREEN_WIDTH * 0.03,
  },
    footer: {
      width: "95%",
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SCREEN_HEIGHT * 0.005,
    paddingTop: SCREEN_HEIGHT * 0.005,
    borderTopWidth: 1,
    borderTopColor: 'rgba(219, 219, 219, 1)',
  },
});
