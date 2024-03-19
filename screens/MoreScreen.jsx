
/* eslint-disable quotes */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { MoreScreenItem } from '../components/MoreScreenItem';
import about from "../assets/icons/about.png";
import franchise from "../assets/icons/franchise.png";
import socials from "../assets/icons/socials.png";
import support from "../assets/icons/support.png";
import agreement from "../assets/icons/agreement.png";
import privacy from "../assets/icons/privacy.png";
import connect from "../assets/icons/connect.png";

export const MoreScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
          <MoreScreenItem text={"O нас"} icon={about} path={"About"} />
      <MoreScreenItem text={"Франчайзинг"} icon={franchise} path={"Franchise"} />
      <MoreScreenItem text={"Мы в социальных сетях"} icon={socials} path={"Socials"} />
      <MoreScreenItem text={"Служба поддержки"} icon={support} path={"Support"} />
      <MoreScreenItem text={"Пользовательское соглашение"} icon={agreement} path={"UserAgreement"} />
      <MoreScreenItem text={"Политика конфиденциальности"} icon={privacy} path={"PrivacyPolicy"} />
      <MoreScreenItem text={"Подключиться к порталу"} icon={connect} path={"ConnectToPortal"} />
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
