import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import Fav from '../assets/icons/Frame_658375.png';
import NotFav from '../assets/icons/favorite.png';
import star from '../assets/icons/star.png';
import empty_star from '../assets/icons/empty_star.png';
import emergency from '../assets/images/Rectangle_329.png';
import { useNavigation } from '@react-navigation/native';

export const HomeVisitsItem = ({ text, icon, type, isFavorite, onPress }) => {
  const [favorite, setFavorite] = useState(isFavorite);

  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate("HomeVisitDetails")} >
      <Text style={styles.title}>Скорая на дом “HealthCity”</Text>
      <View style={styles.row} >
        <Image style={styles.image} source={emergency} />
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
                <Text style={styles.text}>Пн: Круглосуточно</Text>
              </View>
              <View style={styles.row} >
                <Text style={styles.boldText}>Услуги:</Text>
                <Text style={styles.text}>Капельница на дом, Укол...</Text>
              </View>
              <View style={styles.row} >
                <Text style={styles.boldText}>Цена:</Text>
                <Text style={styles.text}>Капельница 2000₸, Укол ...</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => setFavorite(!favorite)}>
            <Image style={styles.icon} source={favorite ? Fav : NotFav} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingVertical: SCREEN_WIDTH * 0.02,
    paddingHorizontal: SCREEN_WIDTH * 0.04,
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
    fontWeight: '400',
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
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: SCREEN_HEIGHT * 0.005,
    paddingTop: SCREEN_HEIGHT * 0.005,
    borderTopWidth: 1,
    borderTopColor: 'rgba(219, 219, 219, 1)',
  },
});
