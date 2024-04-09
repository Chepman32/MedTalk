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
                <View style={styles.main}>
                <Calendar />
            </View>
                <TimeSlots/>
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
        height: SCREEN_HEIGHT * 0.8,
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
    }
});
