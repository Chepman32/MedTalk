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
import { Item } from '../components/Item';
import itemImage from "../assets/images/Frame_57916.png"
import { ServicesModal } from '../components/ServicesModal';

export const Pets = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');
    const [modal, setModal] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.filterRow}>
            <TouchableOpacity onPress={() => console.log(true)}>
                <Image source={filter} style={styles.filterIcon} />
            </TouchableOpacity>
            <SearchInputContainer searchValue={searchValue} setSearchValue={setSearchValue} placeholder={"Найти клинику"} containerStyle={{width: "90%"}} />
            </View>
            <ScrollView >
                <View style={styles.main} >
                    <Item
                        image={itemImage}
                        title={"Ветеринарная клиника “Cats and Dogs”"}
                        schedule={"Пн: Круглосуточно"}
                        phone={"+7 707 666 44 22"}
                        address={"г. Алматы, ул. Аль-Фар..."}
                        services={"Педиатрия, Неврология, Лабораторат..."}
                    />
            </View>
            </ScrollView>
            <Image style={styles.banner} source={banner} resizeMode="contain" />
            <ServicesModal isModalVisible={true} hide={() => setIsModalVisible(false)} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: "#fff"
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
