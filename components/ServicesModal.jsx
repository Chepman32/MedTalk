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

const options = [
    "Диагностика",
"Хирургия",
"Ортопедия",
"О нас",
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
]

export const ServicesModal = ({ text, isModalVisible, hide }) => {
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

    const renderItem = ({ item }) => (
        <TouchableOpacity 
            style={[styles.option, item === selectedService && styles.selectedOption]} 
            onPress={() => setSelectedService(item)}
        >
            <Text style={{...styles.optionText, color: item === selectedService ? "rgba(0, 137, 100, 1)" : "#000"}}>{item}</Text>
        </TouchableOpacity>
    );
    
    return (
        <Modal
            isVisible={isModalVisible}
            onBackdropPress={hide}
            style={styles.modal}
        >
            <View style={styles.modalContent}>
                <View style={styles.row}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Text style={styles.title}>Выбрать услуги</Text>
                    </View>
                    <TouchableOpacity onPress={hide}>
                        <Image style={styles.closeIcon} source={close} />
                    </TouchableOpacity>
                </View>
                <View>
                    <SearchInputContainer searchValue={searchText} setSearchValue={setSearchText} placeholder={"Найти клинику"} containerStyle={{backgroundColor: "rgba(245, 245, 245, 1)"}}/>
                    <FlatList
                        data={filteredOptions}
                        renderItem={renderItem}
                        keyExtractor={(item) => item}
                        style={styles.optionList}
                    />
                    <ConfirmButton text={"Применить"} onPress={hide}/>
                </View>
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
    mainText: {
        fontSize: 16,
        marginBottom: 10,
    },
    searchInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    optionList: {
        marginTop: 4,
        height: SCREEN_HEIGHT * 0.5,
    },
    option: {
        padding: 10,
    },
    optionText: {
        fontSize: 16,
    },
    selectedOption: {
        backgroundColor: 'rgba(245, 245, 245, 1)',
        paddingVertical: SCREEN_HEIGHT * 0.01,
        overflow: "hidden",
        borderRadius: SCREEN_WIDTH * 0.04,
        color: "rgba(0, 137, 100, 1)"
    },
});
