import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';

export const DeliveryTypeItem = ({ title, deliveryProviderIcon, time, setActive, active, link, onLink }) => {
  return (
    <TouchableOpacity style={active === title ? styles.activeDeliveryType : styles.deliveryType} onPress={() => setActive(title)}>
      <View style={styles.deliveryRow}>
        <Text style={styles.deliveryText}>
          {title}
        </Text>
        {deliveryProviderIcon && <Image style={styles.deliveryProviderIcon} source={deliveryProviderIcon} />}
      </View>
      <TouchableOpacity onPress={onLink}>
        <Text style={link ? styles.linkText : styles.deliveryGreyText}>
          {time}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  deliveryType: {
    width: "100%",
    justifyContent: 'center',
    marginBottom: SCREEN_WIDTH * 0.02,
    padding: 20,
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderWidth: 1,
    borderColor: "rgba(116, 116, 116, 1)",
    borderRadius: SCREEN_WIDTH / 150,
  },
  activeDeliveryType: {
    width: "100%",
    justifyContent: 'center',
    marginBottom: SCREEN_WIDTH * 0.02,
    padding: 20,
    backgroundColor: 'rgba(0, 137, 100, 0.2)',
    borderWidth: 1,
    borderColor: "rgba(116, 116, 116, 1)",
    borderRadius: SCREEN_WIDTH / 150,
  },
  deliveryRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  deliveryText: {
    fontWeight: '400',
    fontSize: SCREEN_WIDTH * 0.035,
    lineHeight: SCREEN_WIDTH * 0.05,
    color: 'rgba(21, 21, 21, 1)',
  },
  deliveryGreyText: {
    marginTop: SCREEN_HEIGHT * 0.01,
    fontWeight: '400',
    fontSize: SCREEN_WIDTH * 0.03,
    lineHeight: SCREEN_WIDTH * 0.05,
    color: 'rgba(136, 136, 136, 1)',
  },
  linkText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 17,
    color: "rgba(0, 118, 255, 1)",
    textDecorationLine: "underline",
  },
  deliveryProviderIcon: {
    width: SCREEN_WIDTH * 0.05,
    height: SCREEN_WIDTH * 0.05,
    marginLeft: SCREEN_WIDTH * 0.02,
  }
});
