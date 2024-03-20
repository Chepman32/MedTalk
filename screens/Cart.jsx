import { View, Text, SafeAreaView, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { FavoriteItem } from './FavoriteItem';
import emptyCart from '../assets/icons/shop.png';

const data = [

];

export const Cart = () => {


    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <View style={styles.main} >
                {
                    data.length ? data.map((d, index) => <FavoriteItem key={d.text + index} text={d.text} icon={d.icon} type={d?.type} isFavorite={d.isFavorite} />)
                            : <View style={styles.main}>
                                <Image style={styles.image} source={emptyCart} />
                                <Text style={styles.mainText}>
                                Ваша корзина пуста
                                </Text>
                                <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Вернуться к покупкам</Text>
          </TouchableOpacity>
                        </View>
                }
            </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
        flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SCREEN_HEIGHT * 0.05,
    },
    main: {
        width: SCREEN_WIDTH,
        display: 'flex',
        flexDirection: 'column',
    justifyContent: 'center',
        alignItems: 'center',
        paddingVertical:SCREEN_WIDTH * 0.02,
        backgroundColor: 'rgba(255, 255, 255, 1)',
    },
  mainText: {
      marginTop: SCREEN_HEIGHT * 0.03,
      paddingBottom: SCREEN_HEIGHT * 0.035,
      textAlign: 'center',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 18,
    color: 'rgba(136, 136, 136, 1)',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_HEIGHT * 0.035,
    marginVertical: SCREEN_HEIGHT * 0.005,
  },
  icon: {
    marginLeft: SCREEN_WIDTH * 0.02,
    },
    button: {
        width: SCREEN_WIDTH * 0.92,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: 'rgba(245, 245, 245, 1)',
        borderRadius: 8,
      },
      buttonText: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        textAlign: 'center',
      },
});
