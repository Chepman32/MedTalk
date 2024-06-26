import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { SearchInputContainer } from '../components/SearchInputContainer';
import filter from '../assets/icons/filter.png';
import drugStoreIcon from '../assets/icons/drugStore.png';
import pillIcon from '../assets/icons/Home_icons/pill.png';
import { MedicationsItem } from '../components/MedicationsItem';
import { PharmacyItem } from '../components/PharmacyItem';
import banner from '../assets/images/banner.png';
import { MedicationsFilterModal } from '../components/MedicationsFilterModal';
import { stores } from '../mockData';
import { ChoosedItemsModal } from '../components/ChoosedItemsModal';

export const Medications = () => {
    const [searchValue, setSearchValue] = useState('');
    const [activeTab, setActiveTab] = useState('left');
    const [isModalVisible, setModalVisible] = useState(false);
    const [choosedModal, setChoosedModal] = useState(false);

    const filteredData = stores.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));

    const rightButtonStyle = {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        color: "#000"
    };

    const leftButtonStyle = {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        color: "#000"
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image source={filter} style={styles.filterIcon} />
            </TouchableOpacity>
            <View style={styles.tabs}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'left' ? styles.activeTab : styles.inActiveTab, leftButtonStyle]}
                    onPress={() => setActiveTab('left')}
                >
                    <Image source={pillIcon} style={styles.tabIcon} />
                    <Text style={activeTab === 'left' ? styles.activeTabText : styles.inActiveTabText}>
                        Медикаменты
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === 'right' ? styles.activeTab : styles.inActiveTab, rightButtonStyle]}
                    onPress={() => setActiveTab('right')}
                >
                    <Image source={drugStoreIcon} style={styles.tabIcon} />
                    <Text style={activeTab === 'right' ? styles.activeTabText : styles.inActiveTabText}>
                        Аптеки
                    </Text>
                </TouchableOpacity>
            </View>
            <SearchInputContainer searchValue={searchValue} setSearchValue={setSearchValue} placeholder={'Поиск медикаментов'} />

            {activeTab === 'left' ? (
                <ScrollView>
                    <MedicationsItem showChoosedModal={() => setChoosedModal(true)} />
                    <MedicationsItem showChoosedModal={() => setChoosedModal(true)} />
                </ScrollView>
            ) : (
                <ScrollView>
                    {stores.length ? filteredData.map((s, index) => (
                        <PharmacyItem
                            key={s.title + index}
                            title={s.text}
                            image={s.image}
                            address={s.address}
                            rating={s.rating}
                            isFavorite={s.isFavorite}
                            contacts={s.contacts}
                        />
                    )) : null}
                </ScrollView>
            )}
            <Image style={styles.banner} source={banner} resizeMode="contain" />
            <MedicationsFilterModal isModalVisible={isModalVisible} hide={() => setModalVisible(false)} />
            <ChoosedItemsModal isModalVisible={choosedModal} hide={() => setChoosedModal(false)} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: SCREEN_WIDTH,
        paddingVertical: SCREEN_HEIGHT * 0.02,
        paddingHorizontal: SCREEN_WIDTH * 0.05,
    },
    filterIcon: {
        width: SCREEN_WIDTH * 0.1,
        height: SCREEN_WIDTH * 0.1,
        marginBottom: SCREEN_WIDTH * 0.05,
    },
    tabs: {
        flexDirection: "row",
        marginBottom: SCREEN_HEIGHT * 0.005,
    },
    tab: {
        flex: 1,
        flexDirection: "row",
        height: SCREEN_HEIGHT * 0.05,
        justifyContent: "center",
        alignItems: "center",
    },
    activeTab: {
        backgroundColor: "rgba(0, 137, 100, 1)",
    },
    inActiveTab: {
        backgroundColor: "#fff",
        color: "#000"
    },
    tabIcon: {
        width: SCREEN_WIDTH * 0.05,
        height: SCREEN_WIDTH * 0.05,
        marginRight: SCREEN_WIDTH * 0.02,
    },
    activeTabText: {
        fontSize: 14,
        lineHeight: 17,
        fontWeight: "400",
        color: "#fff",
    },
    inActiveTabText: {
        fontSize: 14,
        lineHeight: 17,
        fontWeight: "400",
        color: "#000",
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
