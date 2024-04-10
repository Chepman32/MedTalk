import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';
import { CustomCarousel } from '../components/CustomCarousel';
import image1 from '../assets/images/Insurance/pic.png';
import image2 from '../assets/images/Insurance/2.png';
import image3 from '../assets/images/Insurance/im_01.jpg';
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
import { DentistsHead } from '../components/DentistsHead';
import { SearchInputContainer } from '../components/SearchInputContainer';
import { DoctorsItem } from '../components/DoctorsItem';
import { DoctorModal } from '../components/DoctorModal';
import { DentistsBranchesModal } from '../components/DentistsBranchesModal';
import { Head } from '../components/Head';
import MockImage from "../assets/images/lab1.png"
import filter from '../assets/icons/control.png';
import { PetsBranchesModal } from '../components/PetsBranchesModal';
import { ServicesModal } from '../components/ServicesModal';
import { AppointmentModal } from '../components/AppointmentModal';

export const PetsDetails = () => {
  const [aboutModal, setAboutModal] = useState(false);
  const [branchesModal, setBranchesModal] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [scheduleModal, setScheduleModal] = useState(false);
  const [isContactsModal, setIsContactsModal] = useState(false);
  const [rateModal, setRateModal] = useState(false);
    const [modal, setModal] = useState(false)
  const [servicesModalVisible, setServicesModalVisible] = useState(false);
  const [appointmentModalVisible, setAppointmentModalVisible] = useState(false);

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
              <Head
                  title={"Вет клиника “Cats and Dogs”"}
        showContactsModal={() => setIsContactsModal(true)}
                  showScheduleModal={() => setScheduleModal(true)}
                  showModal={() => setRateModal(true)}
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
      <View style={styles.filterRow}>
            <TouchableOpacity onPress={() => setServicesModalVisible(true)}>
                <Image source={filter} style={styles.filterIcon} />
            </TouchableOpacity>
            <SearchInputContainer searchValue={searchValue} setSearchValue={setSearchValue} placeholder={"Найти клинику"} containerStyle={{width: "90%"}} />
            </View>
      <View style={{ marginTop: SCREEN_HEIGHT * 0.02 }}>
      <DoctorsItem  onPress={() => setModal(true)}/>
      </View>
              <AboutModal
                  text={"««Cats and Dogs» – Современное лечение питомцев по международным протоколам с применением передового оборудования и импортных материалов. Персонал Центра не только старается внедрить современные способы исследований и разные новые технологии в медицинскую практику, но и пропагандирует здоровый образ жизни среди пациентов, в также бережное отношение к собственному здоровью и своевременное посещение врачей. Среди пациентов «Cats and Dogs» – публичные, влиятельные личности, которые беспокоятся об уровне приватности и репутации медицинского заведения. Персонал «Cats and Dogs» сформирован из квалифицированных специалистов, которые имеют большой опыт в различных медицинских сферах, практику ведения образовательных "} isModalVisible={aboutModal}
                  hide={() => setAboutModal(false)} />
      <PetsBranchesModal isModalVisible={branchesModal} hide={() => setBranchesModal(false)} />
      <RateUsModal isModalVisible={rateModal} hide={() => setRateModal(false)} />
      <ContactsModal isModalVisible={isContactsModal} hide={() => setIsContactsModal(false)} />
              <ScheduleModal isModalVisible={scheduleModal} hide={() => setScheduleModal(false)} />
              <ServicesModal isModalVisible={servicesModalVisible} hide={() => setServicesModalVisible(false)} />
        <DoctorModal isModalVisible={modal} hide={() => setModal(false)} onPress={() => {
          setModal(false)
          setAppointmentModalVisible(true)
        }} />
        <AppointmentModal isModalVisible={appointmentModalVisible} hide={() => setAppointmentModalVisible(false)} />
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
});