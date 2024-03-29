/* eslint-disable quotes */
import React, {useState} from 'react';
import {
    Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { InputContainer } from './InputContainer';
import { CustomCheckBox } from './CustomCheckBox';
import Yandex from "../assets/icons/Yandex.png"
import { DeliveryTypeItem } from './DeliveryTypeItem';
import { MapComponent } from './MapComponent';
import { PickupModal } from './PickupModal';

export const OrderConfirmation = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [secondPhone, setSecondPhone] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [house, setHouse] = useState('');
    const [apt, setApt] = useState('');
    const [interphone, setInterphone] = useState('');
    const [driveway, setDriveway] = useState('');
    const [stage, setStage] = useState('');
    const [comment, setComment] = useState('');
    const [deliveryType, setDeliveryType] = useState("")
    const [isPickupModal, setIsPickupModal] = useState(false)
  return (
      <ScrollView bounces={false}>
          <SafeAreaView style={styles.container}>
          <Text style={styles.boldText}>
          Данные покупателя
          </Text>
          <InputContainer text="Имя" value={name} setValue={setName} isRequired placeholder={"Имя"} />
          <InputContainer text="Номер телефона" value={phone} setValue={setPhone} placeholder={"+000 000 0000 *"} />
          <InputContainer text="Дополнительный номер телефона *" value={secondPhone} setValue={setSecondPhone} placeholder={"+000 000 0000 *"} />
          <Text style={styles.boldText}>
          Адрес покупателя
          </Text>
          <InputContainer text="Город" value={city} setValue={setCity} placeholder={"Алматы"} />
          <InputContainer text="Улица" value={street} setValue={setStreet} placeholder={"Байзакова"} />
              <View style={styles.row}>
              <InputContainer text="Дом" value={house} setValue={setHouse} placeholder={"Дом"} style={{width: SCREEN_WIDTH * 0.4}} />
              <InputContainer text="Квартира/Офис" value={apt} setValue={setApt} placeholder={"Квартира/Офис"} style={{width: SCREEN_WIDTH * 0.4}}/>
          </View>
              <View style={styles.row}>
              <InputContainer text="Домофон" value={interphone} setValue={setInterphone} placeholder={"Домофон"} style={{width: SCREEN_WIDTH * 0.25}} />
          <InputContainer text="Подъезд" value={driveway} setValue={setDriveway} placeholder={"Подъезд"} style={{width: SCREEN_WIDTH * 0.25}} />
          <InputContainer text="Этаж" value={stage} setValue={setStage} placeholder={"Этаж"} style={{width: SCREEN_WIDTH * 0.25}} />
          </View>
          <View style={styles.comment}>
          <InputContainer text="Коментарий" value={comment} setValue={setComment} placeholder={"Коментарий"} multiline />
          </View>
              <CustomCheckBox />
              <MapComponent/>
              <View style={styles.delivery}>
              <DeliveryTypeItem title={"Экспресс доставка"} deliveryProviderIcon={Yandex} time={"Время от 30-90 мин"} active={deliveryType} setActive={setDeliveryType} />
              <DeliveryTypeItem title={"Курьером аптеки"} time={"Время от 30-90 мин"} active={deliveryType} setActive={setDeliveryType} />
              <DeliveryTypeItem title={"Самовывоз"} time={"Выбрать пункт выдачи"} active={deliveryType} setActive={setDeliveryType} link onLink={() => setIsPickupModal(true)} />
              </View>
          </SafeAreaView>
          <PickupModal isModalVisible={isPickupModal} hide={() => setIsPickupModal(false)}/>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    flex: 1,
    alignItems: 'center',
    paddingVertical: 30,
        paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  boldText: {
    fontWeight: '600',
    fontSize: SCREEN_WIDTH * 0.05,
    lineHeight:  SCREEN_WIDTH * 0.05,
    color: 'rgba(21, 21, 21, 1)',
  },
    comment: {
      marginBottom: SCREEN_HEIGHT * 0.05
    },
    row: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    },
    checkbox: {
        marginBottom:  SCREEN_WIDTH * 0.05,
    },
    delivery: {
        width: "100%",
        marginTop:  SCREEN_WIDTH * 0.05,
    }
});
