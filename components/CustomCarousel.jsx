import React, { useState } from 'react';
import { Text, View, Image, Dimensions, FlatList } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const CustomCarousel = ({ items }) => {
  const renderItem = ({ item }) => (
    <View
      style={{
        width: SCREEN_WIDTH * 0.3, // 30% of screen width
        height: SCREEN_HEIGHT * 0.2, // 20% of screen height
        backgroundColor: 'rgba(245, 245, 245, 1)',
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image
        style={{
          width: '100%',
          height: '80%',
          resizeMode: 'cover',
        }}
        source={item.image}
      />
      <Text style={{ marginTop: 5 }}>{item.text}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};