import React, { useState, useRef } from 'react';
import { Text, View, SafeAreaView, Image, Dimensions } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const CustomCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const renderItem = ({ item, index }) => (
    <View
      style={{
        width: SCREEN_WIDTH * 0.3, // 30% of screen width
        height: SCREEN_HEIGHT * 0.2, // 20% of screen height
        backgroundColor: 'rgba(245, 245, 245, 1)',
        borderRadius: 5,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
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
      <Carousel
        layout="default"
        ref={carouselRef}
        data={items}
        sliderWidth={SCREEN_WIDTH}
        itemWidth={SCREEN_WIDTH * 0.3}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
    </View>
  );
};