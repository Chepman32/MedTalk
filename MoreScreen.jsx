/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { SCREEN_WIDTH } from './constants';
import { MoreScreenItem } from './MoreScreenItem';
import about from "./assets/icons/about.png"
import franchise from "./assets/icons/franchise.png"

export const MoreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
          <MoreScreenItem text={"O нас"} icon={about} path={"About"} />
          <MoreScreenItem text={"Франчайзинг"} icon={franchise} path={"Franchise"} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
        flex: 1,
      paddingHorizontal: SCREEN_WIDTH * 0.025,
  },
  mainText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 15,
    color: 'rgba(21, 21, 21, 1)',
    },
    boldText: {
        marginVertical: 10,
        fontSize: 12,
        fontWeight: "600",
        lineHeight: 16,
  },
});
