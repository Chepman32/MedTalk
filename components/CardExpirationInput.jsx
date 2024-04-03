import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { CreditCardInput } from "react-native-credit-card-input";

const CardExpirationInput = ({ valid, setValid }) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    if (card) {
      setValid(card.valid);
    }
  }, [card, setValid]);

  return (
    <View style={styles.container}>
      <CreditCardInput onChange={(card) => setCard(card)} placeholders={{
          expiry: 'Срок годности',
      }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CardExpirationInput;
