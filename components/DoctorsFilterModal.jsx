import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import close from '../assets/icons/close.png';
import filter from '../assets/icons/control.png';
import { SearchInputContainer } from './SearchInputContainer';
import { ConfirmButton } from './ConfirmButton';

const specialisations = [
    "Дерматолог",
    "Гастроинтеролог",
    "Инфекционист",
    "Кардиолог",
    "ЛОР",
    "Невропатолог",
    "Окулист",
    "Паразитолог",
    "Педиатр",
];

export const DoctorsFilterModal = ({ isModalVisible, hide }) => {
    const [selectedSpecialisation, setSelectedSpecialisation] = useState("");
    const [searchValue, setSearchValue] = useState('');
    const [filteredSpecialisations, setFilteredSpecialisations] = useState(specialisations);

    // Function to handle search input change and update filtered specialisations
    const handleSearchInputChange = (text) => {
        setSearchValue(text);
        const filtered = specialisations.filter(specialisation =>
            specialisation.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredSpecialisations(filtered);
    };

    return (
        <Modal
            isVisible={isModalVisible}
            onBackdropPress={hide}
            style={styles.modal}
        >
            <View style={styles.modalContent}>
                <View style={styles.row}>
                    <View style={{ flexDirection: 'row', alignItems: "center" }}>
                        <Image style={styles.filterIcon} source={filter} />
                        <Text style={styles.title}>Выбрать специализацию</Text>
                    </View>
                    <TouchableOpacity onPress={hide}>
                        <Image style={styles.closeIcon} source={close} />
                    </TouchableOpacity>
                </View>
                <View>
                    <SearchInputContainer
                        searchValue={searchValue}
                        setSearchValue={handleSearchInputChange}
                        placeholder={"Найти специализацию"}
                        containerStyle={{ marginBottom: SCREEN_HEIGHT * 0.03, backgroundColor: "rgba(245, 245, 245, 1)" }} />
                    <ScrollView>
                        {filteredSpecialisations.map((s, index) => (
                            <TouchableOpacity key={index} style={selectedSpecialisation === s ? styles.activeButton : styles.inActiveButton} onPress={() => setSelectedSpecialisation(s)}>
                                <Text style={styles.mainText}>{s} </Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
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
        backgroundColor: 'white',
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
    filterIcon: {
        width: SCREEN_WIDTH * 0.07,
        height: SCREEN_WIDTH * 0.07,
        marginRight: SCREEN_WIDTH * 0.02,
    },
    icon: {
        width: 25,
        height: 25,
    },
    closeIcon: {
        width: 20,
        height: 20,
    },
    mainText: {
        fontSize: 16,
        marginBottom: 10,
    },
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: SCREEN_HEIGHT * 0.03,
        paddingVertical: 20,
        backgroundColor: 'rgba(0, 137, 100, 1)',
        borderRadius: 8,
        zIndex: 100,
    },
    buttonText: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        textAlign: 'center',
        color: '#fff',
    },
    inActiveButton: {
        width: '100%',
        height: SCREEN_HEIGHT * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SCREEN_HEIGHT * 0.01,
        borderWidth: 1,
        borderColor: 'rgba(235, 235, 235, 1)',
        borderRadius: 8,
    },
    activeButton: {
        width: '100%',
        height: SCREEN_HEIGHT * 0.05,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: SCREEN_HEIGHT * 0.01,
        backgroundColor: 'rgba(0, 137, 100, 0.2)',
        borderWidth: 1,
        borderColor: 'rgba(235, 235, 235, 1)',
        borderRadius: 8,
    },
});
