import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, PanResponder, Animated, Image } from 'react-native';
import { SCREEN_WIDTH } from '../constants';
import left_arrow from "../assets/icons/left_arrow.png"
import right_arrow from "../assets/icons/right_arrow.png"

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const pan = useRef(new Animated.ValueXY()).current;

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderDates = () => {
    const currentDate = new Date();
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentMonth);
    const dates = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(currentDate.getFullYear(), currentMonth, i);
      dates.push(
        <TouchableOpacity
          key={i}
          style={[
            styles.dateContainer,
            selectedDate?.getDate() === date.getDate() && styles.selectedDate,
          ]}
          onPress={() => setSelectedDate(date)}
        >
          <Text
            style={[
              styles.dateText,
              selectedDate?.getDate() === date.getDate() && styles.selectedDateText,
            ]}
          >
            {i}
          </Text>
        </TouchableOpacity>
      );
    }

    return dates;
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(prevMonth => prevMonth - 1);
    Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
  };

  const goToNextMonth = () => {
    setCurrentMonth(prevMonth => prevMonth + 1);
    Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
  };

  const monthName = new Date(new Date().getFullYear(), currentMonth, 1).toLocaleString('ru', {
    month: 'long',
  });

  const onPanResponderMove = (evt, gestureState) => {
    if (currentMonth === new Date().getMonth() && gestureState.dx > 0) {
        return;
    }

    if (gestureState.dx > 0) {
        const threshold = SCREEN_WIDTH * 0.3; 
        if (gestureState.dx > threshold) {
            const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
            setCurrentMonth(prevMonth);
        }
    } else {
        const threshold = -SCREEN_WIDTH * 0.3; 
        if (gestureState.dx < threshold) {
            const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
            setCurrentMonth(nextMonth);
        }
    }
    pan.setValue({ x: gestureState.dx, y: gestureState.dy });
  };

  const onPanResponderRelease = (evt, gestureState) => {
    Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove,
    onPanResponderRelease,
  });

  const animatedStyle = {
    transform: [{ translateX: pan.x }, { translateY: pan.y }],
  };

  const prevMonthButtonOpacity = currentMonth === new Date().getMonth() ? 0.5 : 1;

  return (
    <Animated.View style={[styles.container, animatedStyle]} {...panResponder.panHandlers}>
      <View style={styles.header}>
        <Text style={styles.monthName}>{monthName}</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={goToPreviousMonth} disabled={currentMonth === new Date().getMonth()} style={{opacity: prevMonthButtonOpacity}}>
            <Image style={styles.navigationButton} source={left_arrow}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={goToNextMonth}>
            <Image style={styles.navigationButton} source={right_arrow}/>
          </TouchableOpacity>
        </View>
      </View>
      <Animated.View style={[styles.datesContainer, animatedStyle]}>
        {renderDates()}
      </Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    padding: SCREEN_WIDTH * 0.03,
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  monthName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  navigationButton: {
    width: SCREEN_WIDTH * 0.06,
    height: SCREEN_WIDTH * 0.06,
    marginHorizontal: SCREEN_WIDTH * 0.01
  },
  datesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  dateContainer: {
    width: SCREEN_WIDTH / 9,
    height: SCREEN_WIDTH / 9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
  },
  dateText: {
    fontSize: 16,
  },
  selectedDate: {
    backgroundColor: 'rgba(0, 137, 100, 1)',
    borderRadius: SCREEN_WIDTH * 0.04,
  },
  selectedDateText: {
    color: 'white',
  },
});

export default Calendar;
