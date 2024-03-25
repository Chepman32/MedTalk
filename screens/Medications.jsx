import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { SearchInputContainer } from '../components/SearchInputContainer';
import drugStoreIcon from "../assets/icons/drugStore.png";
import pillIcon from "../assets/icons/Home_icons/pill.png";
import { MedicationsItem } from './MedicationsItem';

export const Medications = () => {
    const [searchValue, setSearchValue] = useState('');
    const [activeTab, setActiveTab] = useState("left");

    const rightButtonStyle = {
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    };

    const leftButtonStyle = {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.tabs}>
                <TouchableOpacity
                    style={[styles.tab, activeTab === "left" ? styles.activeTab : styles.inActiveTab, leftButtonStyle]}
                    onPress={() => setActiveTab("left")}
                >
                    <Image source={pillIcon} style={styles.tabIcon} />
                    <Text style={activeTab === "left" ? styles.activeTabText : styles.inActiveTabText}>
                        Медикаменты
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tab, activeTab === "right" ? styles.activeTab : styles.inActiveTab, rightButtonStyle]}
                    onPress={() => setActiveTab("right")}
                >
                    <Image source={drugStoreIcon} style={styles.tabIcon} />
                    <Text style={activeTab === "right" ? styles.activeTabText : styles.inActiveTabText}>
                        Аптеки
                    </Text>
                </TouchableOpacity>
            </View>
            <SearchInputContainer searchValue={searchValue} setSearchValue={setSearchValue} placeholder={"Поиск медикаментов"} />
            <MedicationsItem />
            <MedicationsItem/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: SCREEN_HEIGHT * 0.02,
        paddingHorizontal: SCREEN_WIDTH * 0.05,
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
        color: "#fff",
    },
});
