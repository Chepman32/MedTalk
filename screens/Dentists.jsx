import { View, SafeAreaView, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { SearchInputContainer } from '../components/SearchInputContainer';
import { LabsItem } from '../components/LabsItem';
import filter from '../assets/icons/control.png';
import { LabFilterModal } from '../components/LabFilterModal';
import banner from '../assets/images/banner.png';
import { DoctorsItem } from '../components/DoctorsItem';
import { DoctorsFilterModal } from '../components/DoctorsFilterModal';
import { DoctorModal } from '../components/DoctorModal';
import { DentistsItem } from '../components/DentistsItem';
import { DentistsFilterModal } from '../components/DentistsFilterModal';

export const Dentists = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [modal, setModal] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.filterRow}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image source={filter} style={styles.filterIcon} />
            </TouchableOpacity>
            <SearchInputContainer searchValue={searchValue} setSearchValue={setSearchValue} placeholder={"Найти врача"} containerStyle={{width: "90%"}} />
            </View>
            <ScrollView >
                <View style={styles.main} >
                <DentistsItem  onPress={() => setModal(true)}/>
            </View>
            </ScrollView>
            <Image style={styles.banner} source={banner} resizeMode="contain" />
            <DentistsFilterModal isModalVisible={isModalVisible} hide={() => setModalVisible(false)} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
        flex: 1,
        justifyContent: 'center',
    },
    filterRow: {
        width: "95%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: SCREEN_WIDTH * 0.04
    },
    filterIcon: {
        width: SCREEN_WIDTH * 0.07,
        height: SCREEN_WIDTH * 0.07,
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
