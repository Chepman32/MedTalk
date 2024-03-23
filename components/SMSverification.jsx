import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';

export const SMSverification = () => {
  const [digit1, setDigit1] = useState("");
  const [digit2, setDigit2] = useState("");
  const [digit3, setDigit3] = useState("");
  const [digit4, setDigit4] = useState("");
  const [digit5, setDigit5] = useState("");
  const [digit6, setDigit6] = useState("");
  const [countdown, setCountdown] = useState(59);

  const digit1Ref = useRef(null);
  const digit2Ref = useRef(null);
  const digit3Ref = useRef(null);
  const digit4Ref = useRef(null);
  const digit5Ref = useRef(null);
  const digit6Ref = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [countdown]);

  const handleDigit1Change = (text) => {
    setDigit1(text);
    if (text.length === 1) {
      digit2Ref.current.focus();
    }
  };

  const handleDigit2Change = (text) => {
    setDigit2(text);
    if (text.length === 1) {
      digit3Ref.current.focus();
    } else if (text.length === 0) {
      digit1Ref.current.focus();
    }
  };

  const handleDigit3Change = (text) => {
    setDigit3(text);
    if (text.length === 1) {
      digit4Ref.current.focus();
    } else if (text.length === 0) {
      digit2Ref.current.focus();
    }
  };

  const handleDigit4Change = (text) => {
    setDigit4(text);
    if (text.length === 1) {
      digit5Ref.current.focus();
    } else if (text.length === 0) {
      digit3Ref.current.focus();
    }
  };

  const handleDigit5Change = (text) => {
    setDigit5(text);
    if (text.length === 1) {
      digit6Ref.current.focus();
    } else if (text.length === 0) {
      digit4Ref.current.focus();
    }
  };

  const handleDigit6Change = (text) => {
    setDigit6(text);
    if (text.length === 0) {
      digit5Ref.current.focus();
    }
  };

  const handleBackspace = (ref) => {
    const input = ref.current;
    if (input && input.isFocused()) {
      const prevInput = getPreviousInput(ref);
      if (prevInput) {
        prevInput.current.clear();
        prevInput.current.focus();
      }
    }
  };

  const getPreviousInput = (currentRef) => {
    if (currentRef === digit6Ref) return digit5Ref;
    if (currentRef === digit5Ref) return digit4Ref;
    if (currentRef === digit4Ref) return digit3Ref;
    if (currentRef === digit3Ref) return digit2Ref;
    if (currentRef === digit2Ref) return digit1Ref;
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={styles.digitInput}
          onChangeText={handleDigit1Change}
          value={digit1}
          maxLength={1}
          ref={digit1Ref}
          keyboardType="number-pad"
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              handleBackspace(digit1Ref);
            }
          }}
        />
        <TextInput
          style={styles.digitInput}
          onChangeText={handleDigit2Change}
          value={digit2}
          maxLength={1}
          ref={digit2Ref}
          keyboardType="number-pad"
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              handleBackspace(digit2Ref);
            }
          }}
        />
        <TextInput
          style={styles.digitInput}
          onChangeText={handleDigit3Change}
          value={digit3}
          maxLength={1}
          ref={digit3Ref}
          keyboardType="number-pad"
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              handleBackspace(digit3Ref);
            }
          }}
        />
        <TextInput
          style={styles.digitInput}
          onChangeText={handleDigit4Change}
          value={digit4}
          maxLength={1}
          ref={digit4Ref}
          keyboardType="number-pad"
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              handleBackspace(digit4Ref);
            }
          }}
        />
        <TextInput
          style={styles.digitInput}
          onChangeText={handleDigit5Change}
          value={digit5}
          maxLength={1}
          ref={digit5Ref}
          keyboardType="number-pad"
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              handleBackspace(digit5Ref);
            }
          }}
        />
        <TextInput
          style={styles.digitInput}
          onChangeText={handleDigit6Change}
          value={digit6}
          maxLength={1}
          ref={digit6Ref}
          keyboardType="number-pad"
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace') {
              handleBackspace(digit6Ref);
            }
          }}
        />
      </View>
      <Text style={styles.text}>
        На указанный номер отправлено смс сообщение с кодом подтверждения - {countdown} сек
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SCREEN_WIDTH * 0.03,
    backgroundColor: "rgba(245, 245, 245, 1)"
  },
  row: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    marginVertical: SCREEN_HEIGHT * 0.005,
    fontSize: 12,
    lineHeight: 15,
    fontWeight: "400",
    color: "rgba(158, 158, 158, 1)"
  },
  digitInput: {
    width: SCREEN_WIDTH * 0.12,
    height: SCREEN_WIDTH * 0.12,
    marginVertical: SCREEN_HEIGHT * 0.005,
    paddingLeft: SCREEN_WIDTH * 0.04,
    backgroundColor: 'rgba(235, 235, 235, 1)',
    borderWidth: 1,
    borderColor: "rgba(219, 219, 219, 1)",
    borderRadius: 8,
  },
});