import React, {useCallback, useState} from 'react';
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
  ActivityIndicator,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {PollIncharges} from './PollIncharges';
// import {font_family} from '../../../Shared/Assets/CSS/fonts';
import {font_family} from '../../fonts/fonts';
// import Header from '../../../Shared/Assets/Component/Header';
// import {useMyTeamListData} from '../../../Redux/slice/myteam';
// import {AddAreaModal} from './Components/AddAreaModal';
// import {useProfileData} from '../../../Redux/slice/profileDetail';
// import {EditInchargeModal} from './Components/EditInchargeModal';
// import Api from '../../../Api/Api';
// import {RemoveInchargeModal} from './Components/RemoveIncharge';

export default function VillagePoll({route}) {
  //   const profile = useProfileData();

  const dataaa = [
    {
      pc_id: 1,
      w_title:
        'khfgflkgdlfgjkdfdjglfjjgldjgl;dfjl;jfdljfdjlkgjlfsjgjdfsjfjsflkjdsflkjs;dklfjdkl;sfjsl;kdfjslk;fdjlkfj',
      w_id: 1,
      incharge_id: 109,
      incharge_name: 'venkata phani Sai krishna sanjeev uppalapati',
    },
    {
      pc_id: 2,
      w_id: 2,
      incharge_id: 174,
      w_title: 'gff',
      incharge_name: 'Ravi Vyas',
    },
    {
      pc_id: 3,
      w_id: 3,
      incharge_id: 187,
      w_title: 'gf',
      incharge_name: 'Nirali ',
    },
  ];

  const [addVillageModalVisible, setAddVillageModalVisible] = useState(false);
  const [editInchargeModalVisible, setEditInchargeModalVisible] =
    useState(false);
  const [removeInchargeModalVisible, setRemoveInchargeModalVisible] =
    useState(false);
  //   const {data} = useMyTeamListData();

  const [selectedInchargeId, setSelectedInchargeId] = useState('');
  const [selectedInchargeName, setSelectedInchargeName] = useState('');

  const [removeInchargeId, setRemoveInchargeId] = useState('');
  const [removeInchargeName, setRemoveInchargeName] = useState('');
  const [loader, setLoader] = useState(false);

  // const renderVillagencharge = ({item}) => {
  //   console.log('====================================');
  //   console.log(item);
  //   console.log('====================================');
  //   return (
  //     <PollIncharges
  //       countryname={item.w_title}
  //       inchargename={item.incharge_name}
  //       // election={'City'}
  //       onPressElection={() => {}}
  //       onPressEdit={() => {}}
  //       onPressDelete={() => {}}
  //     />
  //   );
  // };

  const renderVillagencharge = useCallback(({item}) => {
    return (
      <PollIncharges
        countryname={item.w_title}
        inchargename={item.incharge_name}
        data={item}
        // election={'Village'}
        // onPressLocation={item => handleAreaIncharge(item)}
        onPressEdit={state => handleEditIncahrge(state)}
        onPressDelete={item => handleRemoveIncharge(item)}
        onPressActivity={item => console.log(item)}
      />
    );
  }, []);

  const handleRemoveIncharge = useCallback(item => {
    console.log('====================================');
    console.log('handleRemoveIncharge', item);
    setRemoveInchargeId(item.incharge_id);
    setRemoveInchargeName(item.incharge_name);

    setRemoveInchargeModalVisible(true);
    console.log('====================================');
    // {
    //   item?.location == 'District'
    //     ? navigation.navigate('DistrictPoll', {
    //         state_id: '1',
    //         pc_id: route?.params?.pc_id,
    //       })
    //     : item?.location == 'City'
    //     ? navigation.navigate('CityPoll', {
    //         district_id: '2',
    //         pc_id: route?.params?.pc_id,
    //       })
    //     : item?.location == 'Ward'
    //     ? navigation.navigate('WardPoll', {
    //         city_id: '3',
    //         pc_id: route?.params?.pc_id,
    //       })
    //     : null;
    // }
  }, []);

  //   const RenderRemove = useCallback(
  //     ({}) => {
  //       //   return (
  //       //     <RemoveInchargeModal
  //       //       visible={removeInchargeModalVisible}
  //       //       incharge={data}
  //       //       selectedInchargeId={removeInchargeId}
  //       //       selectedInchargeName={removeInchargeName}
  //       //       filterType={'City'}
  //       //       EditIncharge={value => handleUpdateIncharge(value)}
  //       //       removeIncharge={value => handleConfirmRemoveIncharge(value)}
  //       //       close={value => setRemoveInchargeModalVisible(value)}
  //       //     />
  //       //   );
  //     },
  //     // [
  //     //   removeInchargeId,
  //     //   removeInchargeName,
  //     //   data,
  //     //   removeInchargeModalVisible,
  //     //   handleUpdateIncharge,
  //     //   handleConfirmRemoveIncharge,
  //     // ],
  //   );

  const handleConfirmRemoveIncharge = useCallback(item => {
    // var formData = {
    //   user_token: profile.u_token,
    //   pc_id: '1',
    //   pc_state_id: '1',
    //   pc_incharge_id: `${item.incharge_id}`,
    // };

    console.log('====================================');
    console.log('handleConfirmRemoveIncharge item', item);
    console.log('====================================');
  }, []);

  const handleEditIncahrge = useCallback(
    item => {
      console.log('====================================');
      console.log('sjhjk', item);
      setSelectedInchargeId(item.incharge_id);
      setSelectedInchargeName(item.incharge_name);
      setEditInchargeModalVisible(true);
      console.log('====================================');
    },
    [setSelectedInchargeName, setSelectedInchargeId],
  );

  //   const RenderEditIncharge = useCallback(
  //     ({}) => {
  //       //   return (
  //       //     <EditInchargeModal
  //       //       visible={editInchargeModalVisible}
  //       //       incharge={data}
  //       //       selectedInchargeId={selectedInchargeId}
  //       //       selectedInchargeName={selectedInchargeName}
  //       //       EditIncharge={value => handleUpdateIncharge(value)}
  //       //       filterType={'Village'}
  //       //       close={value => setEditInchargeModalVisible(value)}
  //       //     />
  //       //   );
  //     },
  //     // [
  //     //   selectedInchargeId,
  //     //   selectedInchargeName,
  //     //   data,
  //     //   editInchargeModalVisible,
  //     //   handleUpdateIncharge,
  //     // ],
  //   );

  const handleUpdateIncharge = useCallback(item => {
    // var formData = {
    //   user_token: profile.u_token,
    //   pc_id: '1',
    //   pc_Village_id: '1',
    //   pc_incharge_id: `${item.incharge_id}`,
    // };

    console.log('====================================');
    // console.log('handleUpdateIncharge formData', formData);
    console.log('====================================');

    try {
      // Api.AddWardCommitteeIncharge(formData).then(res => {
      //   if (res.data.status == 1) {
      //     console.log(res.data.data);
      //   }
      // });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    }
  }, []);

  const handleAddVillageIncharge = useCallback(item => {
    setLoader(true);
    // var formData = {
    //   poll_committees_id: `${route.params.pc_id}`,
    //   user_token: profile.u_token,
    //   ward_id: `${item.ward_id}`,
    //   incharge_id: `${item.incharge_id}`,
    //   user_id: `${profile.u_id}`,
    // };
    console.log('====================================');
    // console.log('handleAddCityIncharge formData', formData);
    console.log('====================================');
    try {
      // Api.AddWardCommitteeIncharge(formData).then(res => {
      //   if (res.data.status == 1) {
      //     console.log(res.data.data);
      //   }
      // });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    }
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Header title={`${route.params.pc_name}`} />

      <AddAreaModal
        visible={addVillageModalVisible}
        // closeModal={closeOtherAreaModal}
        // city={c_data}
        incharge={data}
        // district={item_district_modal}
        // city={item_cons_modal}
        close={value => {
          setAddVillageModalVisible(value);
        }}
        addIncharge={value => handleAddVillageIncharge(value)}
        // filterArea={value => {
        //   setfilter_type(value);
        // }}
        filterType={'Village'}
      /> */}

      {/* Edit Incharge Modal */}
      {/* <RenderEditIncharge /> */}

      {/* Remove Incharge Modal */}

      {/* <RenderRemove /> */}

      {loader == true ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
          }}>
          <ActivityIndicator size={'small'} color={'#0068E5'} />
        </View>
      ) : (
        <ScrollView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleTxt}>Village Incharges</Text>
            <TouchableOpacity
              onPress={() => setAddVillageModalVisible(true)}
              style={{flexDirection: 'row'}}>
              <View style={styles.IconView}>
                <Entypo
                  name={'plus'}
                  size={18}
                  color={'#fff'}
                  style={{alignSelf: 'center'}}
                />
              </View>
              <Text style={styles.addTxt}>Add Village</Text>
            </TouchableOpacity>
            <View style={{flex: 1}}>
              <FlatList data={dataaa} renderItem={renderVillagencharge} />
            </View>
            {/* <PollIncharges
            data={data}
            countryname={'Uttar Pradesh'}
            inchargename={'Danniloo'}
            election={'State'}
            onPressElection={() => {}}
            onPressEdit={() => {}}
            onPressDelete={() => {}}
          /> */}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 8,
    paddingBottom: 10,
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
