import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SCREEN_WIDTH } from '../constants'
import ok_empty from "../assets/icons/ok_empty.png"
import { ConfirmButton } from './ConfirmButton'
import { useNavigation } from '@react-navigation/native'

export default function SuccessfulPayment() {

    const navigation = useNavigation()
  return (
      <View style={styles.container}>
          <Image style={styles.icon} source={ok_empty}/>
          <Text style={styles.title} >
          Платеж принят!
          </Text>
          <View style={styles.row}>
          <Text style={styles.text} >
          Чек отправлен на Ваш email: &nbsp;
          </Text>
          <Text style={styles.boldText} >
email@example.com
          </Text>
          </View>
          <ConfirmButton text={"Вернуться на главную"} onPress={() => navigation.navigate("Home")}/>
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
    },
    boldText: {
        fontSize: SCREEN_WIDTH * 0.04,
        lineHeight: SCREEN_WIDTH * 0.05,
        fontWeight: "500"
    }
})