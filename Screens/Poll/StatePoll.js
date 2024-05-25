import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  Alert,
  Modal,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {font_family} from '../../fonts/fonts';
import {PollIncharges} from '../../Components/PollIncharges';
import CommonModal from '../../Components/CommonModal';

export default function StatePoll() {
  const [modalVisible, setModalVisible] = useState(false);
  const data = [
    {name: 'abc'},
    {name: 'allbc'},
    {name: 'abcbhv'},
    {name: 'ygfabc'},
  ];

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  // const modalView = () => {
  //   return (
  //     <CommonModal
  //       visible={modalVisible}
  //       onClose={() => {
  //         Alert.alert('Modal has been closed.');
  //         setModalVisible(!modalVisible);
  //       }}
  //       title={'State*'}
  //       message={'State*'}
  //       buttonText={'Add'}
  //     />
  //   );
  // };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.titleTxt}>State Incharges</Text>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <View style={styles.IconView}>
              <Entypo
                name={'plus'}
                size={18}
                color={'#fff'}
                style={{alignSelf: 'center'}}
              />
            </View>
            <Text style={styles.addTxt}>Add State</Text>
          </TouchableOpacity>
          {/* <View style={{flex: 1}}>
            <FlatList data={data} renderItem={renderData} />
          </View> */}
          <PollIncharges
            data={data}
            countryname={'Uttar Pradesh'}
            inchargename={'Danniloo'}
            election={'State'}
            onPressElection={() => {}}
            onPressEdit={openModal}
            onPressDelete={() => {}}
          />
        </View>
      </ScrollView>
      <CommonModal
        visible={modalVisible}
        onClose={closeModal}
        title="State*"
        message="This is an example modal message."
        buttonText="Close"
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingVertical: 10,
  },
  titleTxt: {
    color: '#494949',
    fontSize: 16,
    fontFamily: font_family.OpenSans_600.fontFamily,
    fontWeight: '600',
  },
  IconView: {
    backgroundColor: '#0068E5',
    borderRadius: 12,
    height: 24,
    width: 24,
    marginVertical: 10,
    justifyContent: 'center',
  },
  addTxt: {
    alignSelf: 'center',
    fontSize: 13,
    color: '#171717',
    fontWeight: '400',
    fontFamily: font_family.Inter_400.fontFamily,
    marginHorizontal: 8,
  },
  mainContainer: {
    backgroundColor: 'white',
    padding: 10,
    margin: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  stateTxt: {
    fontSize: 15,
    fontFamily: font_family.OpenSans_600.fontFamily,
    fontWeight: '700',
    color: '#000000',
  },
  inchargeTxt: {
    fontSize: 13,
    fontFamily: font_family.Inter_500.fontFamily,
    fontWeight: '500',
    color: '#9D9D9D',
  },
  inchargenameTxt: {
    fontSize: 14,
    fontFamily: font_family.Inter_500.fontFamily,
    fontWeight: '500',
    color: '#494949',
  },
  circle: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#9D9D9D80',
    justifyContent: 'center',
  },
  activitiesView: {
    height: 28,
    width: 106,
    backgroundColor: '#E560001A',
    borderRadius: 4,
    justifyContent: 'center',
    flexDirection: 'row',
    marginRight: 5,
  },
  activitiesTxt: {
    color: '#F45800',
    fontSize: 11,
    fontWeight: '500',
    fontFamily: font_family.Inter_500.fontFamily,
    alignSelf: 'center',
  },
});
