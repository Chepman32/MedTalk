import React, { useState, useEffect, useCallback } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Image } from 'react-native';

import down from "../assets/icons/down.png"

import up from "../assets/icons/up.png"

import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';

import select from "../assets/icons/Frame978798987987.png"

const options = [
 "Антитела к дц-ДНК",
 "17-ОНКС",
 "a-тромбин III",
 "ANCA",
 "Anti-Jo-1",
 "Anti-Scl-70",
 "C-пептид",
 "CYFRA",
 "d-dimer",
 "HLA – B27",
 "LE- клетки",
];

export const CustomDropdown = ({ selected, handleSelect }) => {
 const [isOpen, setIsOpen] = useState(false);
 const [searchText, setSearchText] = useState('');
 const [filteredOptions, setFilteredOptions] = useState(options);

 useEffect(() => {
   filterOptions();
 }, [filterOptions, searchText]);

 const toggleDropdown = () => {
   setIsOpen(!isOpen);
 };

 const filterOptions = useCallback(() => {
   const filtered = options.filter(option =>
     option.toLowerCase().includes(searchText.toLowerCase())
   );
   setFilteredOptions(filtered);
 }, [searchText])

 const renderItem = ({ item }) => (
   <TouchableOpacity style={styles.option} onPress={() => {
     handleSelect(item)
     setIsOpen(false)
   }}>
     <Text style={[styles.optionText, item === selected && styles.selectedOption]}>{item}</Text>
   </TouchableOpacity>
 );

 return (
   <View style={styles.container}>
     <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
       <View style={styles.row}>
         <Image style={styles.selectIcon} source={select} />
         <Text style={styles.selectedText}>{selected || "Выбрать услугу."}</Text>
       </View>
       <Image style={styles.arrowIcon} source={isOpen ? up : down} />
     </TouchableOpacity>
     {isOpen && (
       <View style={styles.dropdownListContainer}>
         <TextInput
           style={styles.searchInput}
           placeholder="Найти услугу"
           placeholderTextColor={"rgba(158, 158, 158, 1)"}
           onChangeText={text => setSearchText(text)}
           value={searchText}
         />
         <FlatList
           data={filteredOptions}
           renderItem={renderItem}
           keyExtractor={(item) => item}
           style={styles.optionList}
         />
       </View>
     )}
   </View>
 );
};

const styles = StyleSheet.create({
 container: {
   width: '100%',
   position: 'relative',
 },
 dropdown: {
   backgroundColor: '#fff',
   borderWidth: 1,
   borderColor: '#ccc',
   borderRadius: 4,
   padding: 10,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
   paddingRight: 30,
 },
 row: {
   flexDirection: "row",
   alignItems: "center",
 },
 selectIcon: {
   width: SCREEN_WIDTH * 0.05,
   height: SCREEN_WIDTH * 0.05,
   marginRight: SCREEN_WIDTH * 0.03,
 },
 selectedText: {
   fontSize: 16,
   flex: 1,
 },
 arrowIcon: {
   width: 20,
   height: 20,
   position: 'absolute',
   right: 10,
 },
 dropdownListContainer: {
   backgroundColor: '#fff',
   borderWidth: 1,
   borderColor: '#ccc',
   borderRadius: 4,
   maxHeight: SCREEN_HEIGHT * 0.3,
   zIndex: 200,
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
   backgroundColor: 'rgba(0, 137, 100, 0.2)',
 },
});