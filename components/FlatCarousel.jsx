import React, { useState, useRef } from 'react';
import { Text, View, SafeAreaView, Image } from 'react-native';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import MockImage from '../assets/images/Rectangle__330.png';
import { SCREEN_WIDTH } from '../constants';

export const FlatCarousel = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselScrolling, setCarouselScrolling] = useState(false);
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
          source={MockImage} resizeMode="contain" />
        <Text>{item.text}</Text>
      </View>
    );
  
    const handleScrollBegin = () => {
      setCarouselScrolling(true);
    };
  
    const handleScrollEnd = () => {
      setCarouselScrolling(false);
    };
  
    return (
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Carousel
          layout="default"
          ref={carouselRef}
          data={items}
          sliderWidth={SCREEN_WIDTH}
          itemWidth={SCREEN_WIDTH * 0.8}
          renderItem={renderItem}
          onSnapToItem={(index) => setActiveIndex(index)}
          onScrollBeginDrag={handleScrollBegin}
          onScrollEndDrag={handleScrollEnd}
          scrollEnabled={!carouselScrolling}
        />
      </View>
    );
  };