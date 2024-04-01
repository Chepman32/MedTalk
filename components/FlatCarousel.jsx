import React, { useState } from 'react';
import { FlatList, StyleSheet, Image, View, Dimensions } from 'react-native';
import { SCREEN_HEIGHT } from '../constants';

const { width } = Dimensions.get('window');

const images = [
  require('../assets/images/medication1.png'),
  require('../assets/images/medication2.jpeg'),
];

export const FlatCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item, index }) => (
    <Image
      source={item}
      style={{
        width: width,
        height: SCREEN_HEIGHT * 0.3,
        resizeMode: "contain"
      }}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
          setActiveIndex(newIndex);
        }}
      />

      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              index === activeIndex ? styles.activeIndicator : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginHorizontal: 4,
  },
  activeIndicator: {
    backgroundColor: 'black',
  },
});
