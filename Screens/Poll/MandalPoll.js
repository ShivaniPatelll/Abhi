import React, {useCallback, useEffect, useState} from 'react';
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
import {AddAreaModal} from './Components/AddAreaModal';
// import {useStateListData} from '../../../Redux/slice/state';
// import {useStateListDataApiCallBack} from '../../../hooks/useStateListData';
// import {useMyTeamListDataApiCallBack} from '../../../hooks/useMyTeamListData';
// import {useMyTeamListData} from '../../../Redux/slice/myteam';
// import {useDistrictListData} from '../../../Redux/slice/district';
// import {useDistrictListDataApiCallBack} from '../../../hooks/useDistrictListData';
// import {EditInchargeModal} from './Components/EditInchargeModal';
// import {useNavigation} from '@react-navigation/native';
// import {useProfileData} from '../../../Redux/slice/profileDetail';
// import Api from '../../../Api/Api';
// import {RemoveInchargeModal} from './Components/RemoveIncharge';

export default function MandalPoll({route}) {
  console.log('====================================');
  //   console.log('MandalPoll', route.params);
  console.log('====================================');
  //   const navigation = useNavigation();
  //   const profile = useProfileData();
  //   const {d_data} = useDistrictListData();
  //   const fetchMandalData = useDistrictListDataApiCallBack();
  const [addMandalModalVisible, setAddMandalModalVisible] = useState(false);
  const [editInchargeModalVisible, setEditInchargeModalVisible] =
    useState(false);
  const [removeInchargeModalVisible, setRemoveInchargeModalVisible] =
    useState(false);

  //   const fetchMyteamList = useMyTeamListDataApiCallBack();
  //   const {data} = useMyTeamListData();

  const [selectedInchargeId, setSelectedInchargeId] = useState('');
  const [selectedInchargeName, setSelectedInchargeName] = useState('');

  const [removeInchargeId, setRemoveInchargeId] = useState('');
  const [removeInchargeName, setRemoveInchargeName] = useState('');
  const [removeInchargeCardId, setRemoveInchargeCardId] = useState('');

  const [loader, setLoader] = useState(false);
  const [MandalCommitteeList, setMandalCommitteeList] = useState([]);

  // const dataaaa = [
  //   {
  //     pc_id: 1,
  //     d_title:
  //       'khfgflkgdlfgjkdfdjglfjjgldjgl;dfjl;jfdljfdjlkgjlfsjgjdfsjfjsflkjdsflkjs;dklfjdkl;sfjsl;kdfjslk;fdjlkfj',
  //     incharge_name: 'Jigar Vyas',
  //   },
  //   {d_title: 'gff', incharge_name: 'Jigar Vyas'},
  //   {
  //     pc_id: 2,
  //     d_title: 'gf',
  //     incharge_name:
  //       'Sanjeev Krishna Uppalapatidifguiodfguiodfguigudoidfuioufiusoifuoifsuoiu',
  //   },
  //   {pc_id: 3, d_title: 'ghfd', incharge_name: 'Jigar Vyas'},
  // ];
  const dataaaa = [
    {
      pc_id: 1,
      d_title:
        'khfgflkgdlfgjkdfdjglfjjgldjgl;dfjl;jfdljfdjlkgjlfsjgjdfsjfjsflkjdsflkjs;dklfjdkl;sfjsl;kdfjslk;fdjlkfj',
      d_id: 1,
      incharge_id: 109,
      incharge_name: 'venkata phani Sai krishna sanjeev uppalapati',
    },
    {
      pc_id: 2,
      d_id: 2,
      incharge_id: 174,
      d_title: 'gff',
      incharge_name: 'Ravi Vyas',
    },
    {
      pc_id: 3,
      d_id: 3,
      incharge_id: 187,
      d_title: 'gf',
      incharge_name: 'Nirali ',
    },
  ];

  useEffect(() => {
    // fetchMandalData();
    // fetchMyteamList();
    getMandalInchargeList();
  }, []);

  function getMandalInchargeList(params) {
    // var formData = {
    //   poll_committees_id: `${route.params.pc_id}`,
    //   user_id: `${profile.u_id}`,
    //   state_id: `${route.params.state_id}`,
    // };

    // console.log('getMandalInchargeList formData', formData);

    try {
      //   Api.DistrictCommitteeInchargeList(formData).then(res => {
      //     if (res.data.status == 1) {
      //       console.log('====================================');
      //       console.log('MandalCommitteeInchargeList res', res.data);
      //       setMandalCommitteeList(res.data.data);
      //       console.log('====================================');
      //     }
      //   });
    } catch (error) {}
  }

  //   const renderMandalncharge = useCallback(
  //     ({item}) => {
  //       return (
  //         <PollIncharges
  //           countryname={item.d_name}
  //           inchargename={item.incharge_name}
  //           data={item}
  //           Mandal_id={item.c_Mandal_id}
  //           election={'City'}
  //           profile={'profile'}
  //           onPressLocation={item => handleAreaIncharge(item)}
  //           onPressEdit={state => handleEditIncahrge(state)}
  //           onPressDelete={item => handleRemoveIncharge(item)}
  //           onPressActivity={item => console.log(item)}
  //         />
  //       );
  //     },
  //     // [handleAreaIncharge, handleEditIncahrge, handleRemoveIncharge, profile],
  //   );

  //   const RenderRemove = useCallback(
  //     ({}) => {
  //       //   return (
  //       // <RemoveInchargeModal
  //       //   visible={removeInchargeModalVisible}
  //       //   incharge={data}
  //       //   selectedInchargeId={removeInchargeId}
  //       //   selectedInchargeName={removeInchargeName}
  //       //   filterType={'Mandal'}
  //       //   EditIncharge={value => handleUpdateIncharge(value)}
  //       //   removeIncharge={value => handleConfirmRemoveIncharge(value)}
  //       //   close={value => setRemoveInchargeModalVisible(value)}
  //       // />
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

  //   const RenderEdit = useCallback(
  //     ({}) => {
  //       //   return (
  //       //     <EditInchargeModal
  //       //       visible={editInchargeModalVisible}
  //       //       incharge={data}
  //       //       selectedInchargeId={selectedInchargeId}
  //       //       selectedInchargeName={selectedInchargeName}
  //       //       EditIncharge={value => handleUpdateIncharge(value)}
  //       //       filterType={'Mandal'}
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

  var s = '';

  const handleRemoveIncharge = useCallback(
    item => {
      console.log('====================================');
      console.log('handleRemoveIncharge', item);
      setRemoveInchargeId(item.incharge_id);
      setRemoveInchargeName(item.incharge_name);
      setRemoveInchargeCardId(item.c_id);
      //   s = item.c_id;
      setRemoveInchargeModalVisible(true);
      console.log('====================================');
      // {
      //   item?.location == 'Mandal'
      //     ? navigation.navigate('MandalPoll', {
      //         state_id: '1',
      //         pc_id: route?.params?.pc_id,
      //       })
      //     : item?.location == 'City'
      //     ? navigation.navigate('CityPoll', {
      //         Mandal_id: '2',
      //         pc_id: route?.params?.pc_id,
      //       })
      //     : item?.location == 'Ward'
      //     ? navigation.navigate('WardPoll', {
      //         city_id: '3',
      //         pc_id: route?.params?.pc_id,
      //       })
      //     : null;
      // }
    },
    [setRemoveInchargeCardId],
  );

  const handleConfirmRemoveIncharge = useCallback(item => {
    console.log(s, 'removeInchargeName');
    var formData = {
      // user_token: profile.u_token,
      // pc_id: '1',
      // pc_state_id: '1',
      // pc_incharge_id: `${item.incharge_id}`,
      id: `${s}`,
    };

    console.log('====================================');
    console.log('handleConfirmRemoveIncharge item', formData);
    console.log('====================================');

    try {
      //   Api.RemoveCommitteeIncharge(formData).then(res => {
      //     if (res.data.status == 1) {
      //       console.log('RemoveCommitteeIncharge', res.data);
      //       s = '';
      //       getMandalInchargeList();
      //     }
      //   });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleAreaIncharge = useCallback(item => {
    console.log('====================================');
    console.log('sjhjk', item);
    console.log('====================================');
    // {
    //   item?.location == 'District'
    //     ? navigation.navigate('DistrictPoll', {state_id: '1'})
    // item?.location == 'District'
    //     ? navigation.navigate('DistrictPoll', {district_id: '1'})
    //     : item?.location == 'City'
    //     ? navigation.navigate('CityPoll', {
    //         // District_id: '2',
    //         pc_id: route?.params?.pc_id,
    //         pc_name: route?.params?.pc_name,
    //         Mandal_id: `${item.Mandal_id}`,
    //       })
    //     : item?.location == 'Ward'
    //     ? navigation.navigate('WardPoll', {city_id: '3'})
    //     : null;
    // }
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

  const handleUpdateIncharge = useCallback(item => {
    // var formData = {
    //   user_token: profile.u_token,
    //   pc_id: '1',
    //   pc_Mandal_id: '1',
    //   pc_incharge_id: `${item.incharge_id}`,
    // };

    setEditInchargeModalVisible(false);
    console.log('====================================');
    // console.log('handleUpdateIncharge formData', formData);
    console.log('====================================');
  }, []);

  const handleAddMandalIncharge = useCallback(item => {
    setLoader(true);
    // var formData = {
    //   poll_committees_id: `${route.params.pc_id}`,
    //   user_token: profile.u_token,
    //   Mandal_id: `${item.Mandal_id}`,
    //   incharge_id: `${item.incharge_id}`,
    //   user_id: `${profile.u_id}`,
    // };
    console.log('====================================');
    // console.log('handleAddMandalIncharge formData', formData);
    console.log('====================================');

    try {
      //   Api.AddDistrictCommitteeIncharge(formData).then(res => {
      //     if (res.data.status == 1) {
      //       console.log('AddMandalCommitteeIncharge res', res.data);
      //       getMandalInchargeList();
      //     }
      //   });
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
      {/* <Header title={`${route.params.pc_name}`} /> */}
      <AddAreaModal
        visible={addMandalModalVisible}
        // closeModal={closeOtherAreaModal}
        state_id={route?.params?.state_id}
        mandal={d_data}
        incharge={data}
        // Mandal={item_Mandal_modal}
        // city={item_cons_modal}
        close={value => {
          setAddMandalModalVisible(value);
        }}
        addIncharge={value => handleAddMandalIncharge(value)}
        // filterArea={value => {
        //   setfilter_type(value);
        // }}
        filterType={'Mandal'}
      />
      {/* Edit Incharge Modal */}
      {/* <RenderEdit /> */}
      {/* Remove Incharge Modal */}
      {/* <RenderRemove /> */}
      {/* <EditInchargeModal
        visible={editInchargeModalVisible}
        incharge={data}
        selectedInchargeId={selectedInchargeId}
        selectedInchargeName={selectedInchargeName}
        EditIncharge={value => handleUpdateIncharge(value)}
        filterType={'Mandal'}
        close={value => setEditInchargeModalVisible(value)}
      /> */}
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
            <Text style={styles.titleTxt}>Mandal Incharges</Text>

            {/* {MandalCommitteeList
              .map(i => i.c_incharge_id)
              .includes(profile.u_id) ? null : ( */}
            <TouchableOpacity
              onPress={() => setAddMandalModalVisible(true)}
              style={{flexDirection: 'row'}}>
              <View style={styles.IconView}>
                <Entypo
                  name={'plus'}
                  size={18}
                  color={'#fff'}
                  style={{alignSelf: 'center'}}
                />
              </View>
              <Text style={styles.addTxt}>Add Mandal</Text>
            </TouchableOpacity>
            {/* )} */}
            <View style={{flex: 1}}>
              {/* <FlatList
                data={MandalCommitteeList}
                renderItem={renderMandalncharge}
              /> */}
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
