import React, { useEffect, useState, useCallback } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput, FlatList } from 'react-native';
import Modal from 'react-native-modal';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import attention from '../assets/icons/attention.png';
import close from '../assets/icons/close.png';
import { useNavigation } from '@react-navigation/native';
import filter from '../assets/icons/filter.png';
import { SearchInputContainer } from './SearchInputContainer';
import { ConfirmButton } from './ConfirmButton';
import Calendar from './Calendar';
import TimeSlots from './TimeSlots';
import { DoctorHead } from './DoctorHead';
import { RadioButtons } from './RadioButtons';

const options = [
    "Диагностика",
    "Хирургия",
    "Ортопедия",
    "Лаборатория",
    "Стоматология",
    "Вакцинация",
    "Офтальмология",
    "Паразитолог",
    "Эндоскопия",
    "Онкология",
    "Чипирование",
    "Кастрация",
    "Ревматолог",
    "Специализация:",
    "Рентген",
    "Уролог",
    "Стационар",
];

export const AppointmentModal = ({ text, isModalVisible, hide }) => {
    const [searchText, setSearchText] = useState('');
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [selectedService, setSelectedService] = useState("");

    const filterOptions = useCallback(() => {
        const filtered = options.filter(option =>
            option.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredOptions(filtered);
    }, [searchText]);

    useEffect(() => {
        filterOptions();
    }, [filterOptions, searchText]);

    return (
        <Modal
            isVisible={isModalVisible}
            onBackdropPress={hide}
            style={styles.modal}
        >
            <View style={styles.modalContent}>
                <View style={styles.row}>
                  <View style={{ flexDirection: 'row', alignItems: "center" }}>
                      <Text style={styles.title}>О нас</Text>
          </View>
          <TouchableOpacity onPress={hide}>
            <Image style={styles.closeIcon} source={close} />
          </TouchableOpacity>
              </View>
                <ScrollView bounces={false}>
                    <DoctorHead />
                    <View style={styles.row}>
                        <View style={styles.info}>
                            <Text style={styles.greyText}>
                            Пациент
                            </Text>
                            <Text style={styles.mainText}>
                            Иванов Иван
                            </Text>
                        </View>
                        <View style={styles.info}>
                        <Text style={styles.greyText}>
                        Почта
                            </Text>
                            <Text style={styles.mainText}>
                            ivan@example.com
                            </Text>
                        </View>
                    </View>
                    <View style={styles.row}>
                        <View style={styles.info}>
                            <Text style={styles.greyText}>
                            ИИН
                            </Text>
                            <Text style={styles.mainText}>
                            0000 0000 0000
                            </Text>
                        </View>
                        <View style={styles.info}>
                        <Text style={styles.greyText}>
                        Контактный номер
                            </Text>
                            <Text style={styles.mainText}>
                            +7 777 777 77 77
                            </Text>
                        </View>
                    </View>
                <View style={styles.main}>
                    <Text style={styles.title}>Выберите дату</Text>
                <Calendar />
                    </View>
                    <Text style={styles.title}>Выберите время</Text>
                    <TimeSlots />
                    <Text style={styles.title}>Выберите прием</Text>
                    <RadioButtons />
                    <ConfirmButton text={"Записаться"} onPress={hide}/>
            </ScrollView>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: 0
    },
    modalContent: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT * 0.95,
        backgroundColor: "rgba(255, 255, 255, 1)",
        padding: 20,
        borderRadius: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
    },
    closeIcon: {
        width: 20,
        height: 20,
    },
    main: {
        width: "100%",
        padding: SCREEN_WIDTH * 0.05,
    },
    info: {
        flexBasis: "50%",
    },
    greyText: {
        fontSize: SCREEN_WIDTH * 0.04,
        lineHeight: SCREEN_WIDTH * 0.04,
        fontWeight: "400",
        color: "rgba(136, 136, 136, 1)",
        marginBottom: SCREEN_HEIGHT * 0.005,
    },
    mainText: {
        fontSize: SCREEN_WIDTH * 0.05,
        lineHeight: SCREEN_WIDTH * 0.05,
        fontWeight: "400",
        marginBottom: SCREEN_HEIGHT * 0.005,
    }
});
