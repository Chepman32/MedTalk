import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { CustomCarousel } from '../components/CustomCarousel';
import image1 from '../assets/images/Insurance/pic.png';
import image2 from '../assets/images/Insurance/2.png';
import image3 from '../assets/images/Insurance/im_01.jpg';
import { PharmacyHead } from '../components/PharmacyHead';
import { MedicationsItem } from '../components/MedicationsItem';
import { AboutModal, PharmacyAboutModal } from '../components/AboutModal';
import { PharmacyBranchesModal } from '../components/PharmacyBranchesModal';
import search from '../assets/icons/search.png';
import { carouselData } from '../mockData';
import { carouselItems } from './InsuranceDetails';
import { RateUsModal } from '../components/RateUsModal';
import { ContactsModal } from '../components/ContactsModal';
import { ScheduleModal } from "../components/ScheduleModal"
import { ChoosedItemsModal } from '../components/ChoosedItemsModal';

export const PharmacyDetails = () => {
  const [aboutModal, setAboutModal] = useState(false);
  const [branchesModal, setBranchesModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [scheduleModal, setScheduleModal] = useState(false);
  const [isContactsModal, setIsContactsModal] = useState(false);
  const [rateModal, setRateModal] = useState(false);
  const [choosedModal, setChoosedModal] = useState(false)

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
      <PharmacyHead
        showModal={() => setRateModal(true)}
        showContactsModal={() => setIsContactsModal(true)}
        showScheduleModal={() => setScheduleModal(true)}
      />
      <View style={styles.tabs}>
                 <TouchableOpacity style={styles.tabsItem} onPress={() => setAboutModal(true)}>
                     <Text>О нас</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={styles.tabsItem} onPress={() => setBranchesModal(true)}>
                     <Text>Наши филиалы</Text>
             </TouchableOpacity>
             </View>
      <View style={{ height: 250 }}>
        <CustomCarousel items={carouselItems} />
      </View>
      <View style={styles.inputContainer}>
        <Image source={search} style={styles.icon} />
        <TextInput
          value={searchValue}
          onChangeText={setSearchValue}
          style={styles.input}
          placeholder="Поиск"
          textAlignVertical="top"
        />
      </View>
      <View style={{ marginTop: SCREEN_HEIGHT * 0.02 }}>
      <MedicationsItem showChoosedModal={() => setChoosedModal(true)} />
            <MedicationsItem showChoosedModal={() => setChoosedModal(true)}/>
      </View>
      <AboutModal isModalVisible={aboutModal} hide={() => setAboutModal(false)} text={"«Dental Center» – Современное лечение зубов по международным протоколам с применением передового оборудования и импортных материалов.  Персонал Центра не только старается внедрить современные способы исследований и разные новые технологии в медицинскую практику, но и пропагандирует здоровый образ жизни среди пациентов, в также бережное отношение к собственному здоровью и своевременное посещение врачей.  Среди пациентов «Dental Center» – публичные, влиятельные личности, которые беспокоятся об уровне приватности и репутации медицинского заведения.  Персонал «Dental Center» сформирован из квалифицированных специалистов, которые имеют большой опыт в различных медицинских сферах, практику ведения образовательных "} />
      <PharmacyBranchesModal isModalVisible={branchesModal} hide={() => setBranchesModal(false)} />
      <RateUsModal isModalVisible={rateModal} hide={() => setRateModal(false)} />
      <ContactsModal isModalVisible={isContactsModal} hide={() => setIsContactsModal(false)} />
      <ScheduleModal isModalVisible={scheduleModal} hide={() => setScheduleModal(false)} />
      <ChoosedItemsModal isModalVisible={choosedModal} hide={() => setChoosedModal(false)}/>
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    flex: 1,
    alignItems: "center",
    paddingVertical: SCREEN_HEIGHT * 0.05,
    backgroundColor: "#fff",
  },
  tabs: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: SCREEN_HEIGHT * 0.02,
  },
  tabsItem: {
    width: "48%",
    height: SCREEN_HEIGHT * 0.05,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(245, 245, 245, 1)",
    borderRadius: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_HEIGHT * 0.035,
    marginVertical: SCREEN_HEIGHT * 0.01,
    backgroundColor: "rgba(245, 245, 245, 1)",
  },
  icon: {
    marginLeft: SCREEN_WIDTH * 0.02,
  },
  input: {
    flex: 1,
    paddingLeft: SCREEN_WIDTH * 0.02,
  },
});