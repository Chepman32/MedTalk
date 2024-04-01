/* eslint-disable quotes */
import React, { useCallback, useEffect, useState } from 'react';
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
import Accordion from './Accordion';
import geo from "../assets/icons/Frame_658503.png"
import { ConfirmButton } from './ConfirmButton';

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
  const [deliveryType, setDeliveryType] = useState("");
  const [isPickupModal, setIsPickupModal] = useState(false);
  const [mainInfo, setMainInfo] = useState(false);
  const [address, setAddress] = useState(false);
  const [delivery, setDelivery] = useState("");
  const [paymentMethod, setPaymentMethod] = useState(false);
  const [payment, setPayment] = useState(false);

  const verifyAddressFields = useCallback(() => {
    if (city.trim() && street.trim() && house.trim() && apt.trim() && driveway.trim() && interphone.trim() && stage.trim()) {
      setAddress(true);
    } else {
      setAddress(false);
    }
  }, [apt, city, driveway, house, interphone, stage, street]);

  const verifydeliveryType = useCallback(() => {
    if (deliveryType) {
      setDelivery(true);
    } else {
      setDelivery(false);
    }
  }, [deliveryType]);

  useEffect(() => {
    verifyAddressFields();
  }, [verifyAddressFields]);

  useEffect(() => {
    verifydeliveryType();
  }, [verifydeliveryType]);

  useEffect(() => {
    if (paymentMethod) {
      setPayment(true);
    } else {
      setPayment(false);
    }
  }, [paymentMethod]);

  return (
    <ScrollView bounces={false}>
          <SafeAreaView style={styles.container}>
        <Text style={styles.boldText}>
          Данные покупателя
        </Text>
        <InputContainer text="Имя" value={name} setValue={setName} isRequired placeholder={"Имя"} />
        <InputContainer text="Номер телефона" value={phone} setValue={setPhone} placeholder={"+000 000 0000 *"} />
        <InputContainer text="Дополнительный номер телефона *" value={secondPhone} setValue={setSecondPhone} placeholder={"+000 000 0000 *"} style={{marginBottom: SCREEN_WIDTH * 0.04}} />
        <Accordion index={1} title="Адрес покупателя" isCompleted={address} >
        <InputContainer text="Город" value={city} setValue={setCity} placeholder={"Алматы"} />
          <InputContainer text="Улица" value={street} setValue={setStreet} placeholder={"Байзакова"} />
          <View style={styles.row}>
            <InputContainer text="Дом" value={house} setValue={setHouse} placeholder={"Дом"} style={{ width: SCREEN_WIDTH * 0.4 }} />
            <InputContainer text="Квартира/Офис" value={apt} setValue={setApt} placeholder={"Квартира/Офис"} style={{ width: SCREEN_WIDTH * 0.4 }} />
          </View>
          <View style={styles.row}>
            <InputContainer text="Домофон" value={interphone} setValue={setInterphone} placeholder={"Домофон"} style={{ width: SCREEN_WIDTH * 0.25 }} />
            <InputContainer text="Подъезд" value={driveway} setValue={setDriveway} placeholder={"Подъезд"} style={{ width: SCREEN_WIDTH * 0.25 }} />
            <InputContainer text="Этаж" value={stage} setValue={setStage} placeholder={"Этаж"} style={{ width: SCREEN_WIDTH * 0.25 }} />
          </View>
          <View style={styles.comment}>
            <InputContainer text="Коментарий" value={comment} setValue={setComment} placeholder={"Коментарий"} multiline />
          </View>
          <View style={styles.checkbox}>
            <CustomCheckBox />
          </View>
        </Accordion>
        <Accordion index={2} title="Способ доставки" isCompleted={delivery} >
          <View style={styles.delivery}>
                      <DeliveryTypeItem title={"Экспресс доставка"} deliveryProviderIcon={Yandex} time={"Время от 30-90 мин"} active={deliveryType} setActive={setDeliveryType} />
            <DeliveryTypeItem title={"Курьером аптеки"} time={"Время от 30-90 мин"} active={deliveryType} setActive={setDeliveryType} />
            <DeliveryTypeItem title={"Самовывоз"} time={"Выбрать пункт выдачи"} active={deliveryType} setActive={setDeliveryType} link onLink={() => setIsPickupModal(true)} />
          </View>
          <View style={styles.mapRow}>
            <Image style={styles.mapRowIcon} source={geo} />
            <Text style={styles.mapRowText}>
              На карте
            </Text>
          </View>
          <MapComponent />
        </Accordion>
        <Accordion index={3} title="Способ оплаты" isCompleted={payment} >
          <View style={styles.delivery}>
            <DeliveryTypeItem title={"Онлайн банковской картой"} time={"Visa / Mastercard"} active={paymentMethod} setActive={setPaymentMethod}/>
          </View>
          <View style={styles.mapRow}>
            <Image style={styles.mapRowIcon} source={geo} />
            <Text style={styles.mapRowText}>
              На карте
            </Text>
          </View>
          <MapComponent />
              </Accordion>
              <View style={styles.order} >
              <Text style={styles.orderTitle}>Ваш заказ</Text>
                  <View style={styles.orderRow}>
                      <Text style={styles.orderText}>Кол-во товаров в корзине</Text>
                      <Text style={styles.orderNum}>4</Text>
                  </View>
                  <View style={styles.orderRow}>
                      <Text style={styles.orderText}>Сумма</Text>
                      <Text style={styles.orderNum}>58 053 ₸</Text>
                  </View>
              </View>
              <View style={styles.row}>
              <Text style={styles.orderThinTitle}>Сумма к оплате</Text>
                      <Text style={styles.orderThinTitle}>58 053 ₸</Text>
        </View>
        <ConfirmButton text={"Отправить заявку"}/>
      </SafeAreaView>
      <PickupModal isModalVisible={isPickupModal} hide={() => setIsPickupModal(false)} />
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
    lineHeight: SCREEN_WIDTH * 0.05,
    color: 'rgba(21, 21, 21, 1)',
  },
  comment: {
    marginBottom: SCREEN_HEIGHT * 0.05
  },
  row: {
    flexDirection: "row",
    width: "100%",
      justifyContent: "space-between",
    alignItems: "center"
  },
  checkbox: {
    marginBottom: SCREEN_WIDTH * 0.05,
  },
  mapRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  mapRowIcon: {
    width: SCREEN_WIDTH * 0.05,
    height: SCREEN_WIDTH * 0.05,
    marginRight: SCREEN_WIDTH * 0.01,
  },
  mapRowText: {
    fontWeight: '400',
    fontSize: SCREEN_WIDTH * 0.04,
    lineHeight: SCREEN_WIDTH * 0.04,
    color: 'rgba(0, 137, 100, 1)',
  },
  delivery: {
    width: "100%",
    marginTop: SCREEN_WIDTH * 0.05,
    },
    order: {
        width: "100%",
        marginVertical: SCREEN_WIDTH * 0.02,
        borderTopWidth: 1,
        borderTopColor: "rgba(219, 219, 219, 1)",
        borderBottomWidth: 1,
        borderBottomColor: "rgba(219, 219, 219, 1)"
  },
    orderRow: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: SCREEN_WIDTH * 0.05,
    },
    orderTitle: {
        marginBottom: SCREEN_WIDTH * 0.03,
        fontWeight: '500',
        fontSize: SCREEN_WIDTH * 0.05,
        lineHeight: SCREEN_WIDTH * 0.06,
        color: 'rgba(21, 21, 21, 1)',
    },
    orderText: {
        fontWeight: '400',
        fontSize: SCREEN_WIDTH * 0.04,
        lineHeight: SCREEN_WIDTH * 0.05,
        color: 'rgba(136, 136, 136, 1)',
    },
    orderNum: {
        fontWeight: '300',
        fontSize: SCREEN_WIDTH * 0.05,
        lineHeight: SCREEN_WIDTH * 0.05,
        color: 'rgba(21, 21, 21, 1)',
    },
    orderThinTitle: {
        marginBottom: SCREEN_WIDTH * 0.03,
        fontWeight: '400',
        fontSize: SCREEN_WIDTH * 0.05,
        lineHeight: SCREEN_WIDTH * 0.06,
        color: 'rgba(21, 21, 21, 1)',
    },
});
