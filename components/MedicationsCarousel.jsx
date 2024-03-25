import React, { useState, useRef } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import MockImage1 from '../assets/images/Rectangle_330.png';
import MockImage2 from '../assets/images/Rectangle_329.png';
import MockImage3 from '../assets/images/Rectangle_472.png';

const data = [
  {
      text: 'Специальное техническое обслуживание'
      , icon: MockImage1,
      type: 'Медицинское оборудование / Сервис и ремонт',
      isFavorite: true,
  },
  {
      text: 'Скорая на дом “HealthCity”'
      , icon: MockImage2,
      type: '',
      isFavorite: false,
  },
  {
      text: 'МРТ оборудование с последним обновлением'
      , icon: MockImage3,
      type: 'Медицинское оборудование / Медицинская мебель',
      isFavorite: true,
  },
];

const { width } = Dimensions.get('window');

const MedicationsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={{ uri: item.imageUrl }} style={{ width: '100%', height: 200 }} resizeMode="contain" />
      <Text style={{ marginTop: 10, fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
      <Text style={{ marginTop: 5 }}>{item.description}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width * 0.8}
        onSnapToItem={(index) => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeIndex}
        containerStyle={{ marginVertical: 10 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(0, 0, 0, 0.92)',
        }}
        inactiveDotStyle={{
          backgroundColor: 'gray',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

export default MedicationsCarousel;