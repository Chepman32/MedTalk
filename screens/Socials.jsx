/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { MoreScreenItem } from '../components/MoreScreenItem';
import facebook from "../assets/icons/Facebook.png"
import instagram from "../assets/icons/Instagram.png"
import vkontakte from "../assets/icons/Vkontakte.png"
import mail from "../assets/icons/mail.png"
import { SocialsItem } from '../components/SocialsItem';

export const Socials = () => {
  return (
    <SafeAreaView style={styles.container}>
          <SocialsItem text={"Facebook"} icon={facebook} path={"Franchise"} />
          <SocialsItem text={"Instagram"} icon={instagram} path={"Franchise"} />
          <SocialsItem text={"Вконтакте"} icon={vkontakte} path={"Franchise"} />
          <SocialsItem text={"hobbsand@gmail.com"} icon={mail} path={"Franchise"}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
        flex: 1,
    alignItems: "center",
    paddingVertical: SCREEN_HEIGHT * 0.05,
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
