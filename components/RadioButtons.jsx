import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState('primary');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.option} onPress={() => setSelectedOption('primary')}>
        <View style={selectedOption === 'primary' ? styles.selected : styles.circle}>
          {selectedOption === 'primary' && (
            <>
              <View style={styles.selectedOuter} />
              <View style={styles.selectedInner} />
            </>
          )}
        </View>
        <Text style={styles.optionText}>Первичный прием</Text>
        <Text style={styles.price}>5000₮</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.option} onPress={() => setSelectedOption('repeat')}>
        <View style={selectedOption === 'repeat' ? styles.selected : styles.circle}>
          {selectedOption === 'repeat' && (
            <>
              <View style={styles.selectedOuter} />
              <View style={styles.selectedInner} />
            </>
          )}
        </View>
        <Text style={styles.optionText}>Повторный прием</Text>
        <Text style={styles.price}>3000₮</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#000',
    marginRight: 10,
  },
  selected: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  selectedInner: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 137, 100, 1)',
    borderWidth: 2,
    borderColor: '#C8E6C9',
  },
  selectedOuter: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#C8E6C9',
    position: 'absolute',
    top: -2,
    left: -2,
  },
  optionText: {
    fontSize: 18,
    flex: 1,
  },
  price: {
    fontSize: 18,
    color: 'rgba(0, 137, 100, 1)',
  },
});
