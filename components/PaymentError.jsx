import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SCREEN_WIDTH } from '../constants'
import warning from "../assets/icons/warning.png"
import { ConfirmButton } from './ConfirmButton'
import { useNavigation } from '@react-navigation/native'
import { CancelButton } from './CancelButton'

export default function PaymentError() {

    const navigation = useNavigation()
  return (
      <View style={styles.container}>
          <Image style={styles.icon} source={warning}/>
          <Text style={styles.title} >
          Платеж не прошел
          </Text>
          <View style={styles.row}>
          <Text style={styles.text} >
          Пожалуйста проверьте лимит на Вашей карте, либо попробуйте воспроизвести оплату снова.
          </Text>
          </View>
          <ConfirmButton text={"Попробовать снова"} onPress={() => navigation.goBack()} />
          <CancelButton text={"Вернуться на главную"} onPress={() => navigation.navigate("Home")}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: SCREEN_WIDTH * 0.07,
        height: SCREEN_WIDTH * 0.07,
        marginBottom: SCREEN_WIDTH * 0.05,
    },
    row: {
        flexDirection: "row",
        marginTop: SCREEN_WIDTH * 0.05,
    },
    title: {
        fontSize: SCREEN_WIDTH * 0.05,
        lineHeight: SCREEN_WIDTH * 0.06,
        fontWeight: "600",
    },
    text: {
        fontSize: SCREEN_WIDTH * 0.04,
        lineHeight: SCREEN_WIDTH * 0.05,
        color: "rgba(136, 136, 136, 1)",
    },
    boldText: {
        fontSize: SCREEN_WIDTH * 0.04,
        lineHeight: SCREEN_WIDTH * 0.05,
        fontWeight: "500",
        color: "rgba(136, 136, 136, 1)",
    }
})