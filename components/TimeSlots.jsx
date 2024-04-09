import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const TimeSlots = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const timeSlots = [
    { start: '10:00', end: '11:00' },
    { start: '11:00', end: '12:00' },
    { start: '13:00', end: '14:00' },
  ];

  const handleSlotPress = (index) => {
    setSelectedSlot(index);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.slide,
        selectedSlot === index ? styles.selectedSlide : null,
      ]}
      onPress={() => handleSlotPress(index)}
    >
      <Text style={styles.time}>{item.start} - {item.end}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={timeSlots}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth * 0.6}
        onSnapToItem={(index) => setActiveSlide(index)}
        loop
        activeSlideAlignment="center"
        inactiveSlideScale={1} // Remove parallax effect
        inactiveSlideOpacity={1} // Remove parallax effect
      />
      <Pagination
        dotsLength={timeSlots.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        inactiveDotStyle={styles.paginationInactiveDot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide: {
      backgroundColor: '#fff',
        borderRadius: 8,
      marginHorizontal: 5,
      padding: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    selectedSlide: {
      backgroundColor: 'rgba(0, 137, 100, 1)',
    },
    time: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    paginationContainer: {
      paddingVertical: 8,
    },
    paginationDot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 8,
      backgroundColor: '#333',
    },
    paginationInactiveDot: {
      backgroundColor: '#ccc',
    },
  });

export default TimeSlots;