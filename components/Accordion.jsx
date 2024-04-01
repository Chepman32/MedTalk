import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Collapsible from 'react-native-collapsible';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { SCREEN_WIDTH } from '../constants';
import down from "../assets/icons/down.png"
import up from "../assets/icons/up.png"

const Accordion = ({ index, title, children, isCompleted }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity
        style={styles.accordionHeader}
        onPress={() => setIsCollapsed(!isCollapsed)}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
              {
                index && <Text style={isCompleted ? styles.filledNumber : styles.number}>{index}</Text>
              }
              <Text style={styles.boldText}>{title}</Text>
              </View>
              <Image style={styles.icon} source={isCollapsed ? down : up}/>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.accordionContent}>{children}</View>
      </Collapsible>
    </View>
  );
};

const styles = StyleSheet.create({
  accordionContainer: {
    width: '100%',
    },
    accordionContent: {
        width: '100%',
    },
  accordionHeader: {
      flexDirection: 'row',
      justifyContent: "space-between"
    },
    icon: {
        width: SCREEN_WIDTH * 0.05,
        height: SCREEN_WIDTH * 0.05,
    },
    number: {
        marginRight: SCREEN_WIDTH * 0.05,
        padding: SCREEN_WIDTH * 0.01,
        fontWeight: '300',
        fontSize: SCREEN_WIDTH * 0.05,
        lineHeight: SCREEN_WIDTH * 0.05,
        color: 'rgba(21, 21, 21, 1)',
        borderWidth: 1,
        borderRadius: (SCREEN_WIDTH * 0.05 + 2 * SCREEN_WIDTH * 0.01) / 2,
        textAlign: 'center',
        width: SCREEN_WIDTH * 0.05 + 2 * SCREEN_WIDTH * 0.01,
        height: SCREEN_WIDTH * 0.05 + 2 * SCREEN_WIDTH * 0.01,
    },
    filledNumber: {
        marginRight: SCREEN_WIDTH * 0.05,
        padding: SCREEN_WIDTH * 0.01,
        backgroundColor: "rgba(0, 137, 100, 1)",
        fontWeight: '300',
        fontSize: SCREEN_WIDTH * 0.05,
        lineHeight: SCREEN_WIDTH * 0.05,
        color: '#fff',
        borderWidth: 1,
        overflow: "hidden",
        borderColor: "transparent",
        borderRadius: (SCREEN_WIDTH * 0.05 + 2 * SCREEN_WIDTH * 0.01) / 2,
        textAlign: 'center',
        width: SCREEN_WIDTH * 0.05 + 2 * SCREEN_WIDTH * 0.01,
        height: SCREEN_WIDTH * 0.05 + 2 * SCREEN_WIDTH * 0.01,
    },
    
  boldText: {
    fontWeight: '400',
    fontSize: SCREEN_WIDTH * 0.05,
    lineHeight: SCREEN_WIDTH * 0.05,
    color: 'rgba(21, 21, 21, 1)',
  },
});

export default Accordion;
