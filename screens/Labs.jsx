import { View, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import MockImage1 from '../assets/images/medication1.png';
import MockImage2 from '../assets/images/Rectangle_329.png';
import MockImage3 from '../assets/images/Rectangle_472.png';
import MockImage4 from '../assets/images/image_150.png';
import { SearchInputContainer } from '../components/SearchInputContainer';
import { LabsItem } from '../components/LabsItem';
import filter from '../assets/icons/filter.png';
import { LabFilterModal } from '../components/LabFilterModal';
import banner from '../assets/images/banner.png';

export const data = [
    {
        text: 'Специальное техническое обслуживание'
        , icon: MockImage1,
        type: 'Медицинское оборудование / Сервис и ремонт',
        isFavorite: true,
    },
    {
        text: 'Скорая на дом “HealthCity”'
        , icon: MockImage2,
        type: '',
        isFavorite: false,
    },
    {
        text: 'МРТ оборудование с последним обновлением'
        , icon: MockImage3,
        type: 'Медицинское оборудование / Медицинская мебель',
        isFavorite: true,
    },
    {
        text: 'Соловьев Александр Викторович'
        , icon: MockImage4,
        type: '',
        isFavorite: true,
    },
];

export const Labs = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image source={filter} style={styles.filterIcon} />
            </TouchableOpacity>
            <SearchInputContainer searchValue={searchValue} setSearchValue={setSearchValue} placeholder={"Найти врача"} />
            <ScrollView >
                <View style={styles.main} >
                <LabsItem/>
            </View>
            </ScrollView>
            <Image style={styles.banner} source={banner} resizeMode="contain" />
            <LabFilterModal isModalVisible={isModalVisible} hide={() => setModalVisible(false)}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
        flex: 1,
    justifyContent: 'center',
    },
    filterIcon: {
        width: SCREEN_WIDTH * 0.1,
        height: SCREEN_WIDTH * 0.1,
        marginBottom: SCREEN_WIDTH * 0.05,
    },
    main: {
        width: SCREEN_WIDTH,
        display: 'flex',
        flexDirection: 'column',
    justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    banner: {
        width: "100%",
        height: SCREEN_HEIGHT * 0.12,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
});
