import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants'

export const Quantity = () => {
  return (
    <View style={styles.container} >
          <TouchableOpacity>
          <Text style={styles.mainText} >-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.number} >
          <Text style={styles.mainText} >1</Text>
          </TouchableOpacity>
          <TouchableOpacity>
              <TouchableOpacity>
              <Text style={styles.mainText} >+</Text>
          </TouchableOpacity>
          </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH * 0.2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: SCREEN_HEIGHT * 0.01,
        padding: 10,
        borderWidth: 1,
        borderColor: "rgba(235, 235, 235, 1)",
        borderRadius: 8,
    },
    mainText: {
        fontSize: SCREEN_WIDTH * 0.05,
        lineHeight: SCREEN_WIDTH * 0.05,
        fontWeight: "400",
    },
    number: {
        paddingHorizontal: 20,
    },
})