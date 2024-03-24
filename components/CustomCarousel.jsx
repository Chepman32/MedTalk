import React, { useState, useRef } from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { SCREEN_WIDTH } from '../constants';

export const CustomCarousel = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);


  const renderItem = ({ item, index }) => (
    <View style={{
      backgroundColor: 'rgba(245, 245, 245, 1)',
      borderRadius: 5,
      height: 250,
      padding: 50,
      marginLeft: 25,
      marginRight: 25,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Image
        style={{
          maxWidth: '100%',
          maxHeight: 150,
        }}
        source={item.image} resizeMode="contain" />
      <Text>{item.text}</Text>
    </View>
  );
  
  return (
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Carousel
          layout="default"
          ref={carouselRef}
          data={items}
          sliderWidth={300}
          itemWidth={300}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
        />
      </View>
  );
};

