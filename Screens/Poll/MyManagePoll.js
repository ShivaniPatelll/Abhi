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
  useWindowDimensions,
  Platform,
  ActivityIndicator,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {font_family} from '../../fonts/fonts';
import axios from 'axios';
import {TabView, SceneMap} from 'react-native-tab-view';
// import Header from '../../../Shared/Assets/Component/Header';
// import {useFocusEffect, useNavigation} from '@react-navigation/native';
// import {useProfileData} from '../../../Redux/slice/profileDetail';

export default function MyManagePoll({route}) {
  //   const navigation = useNavigation();
  //   const profile = useProfileData();
  const layout = useWindowDimensions();
  const [committeeList, setCommitteeList] = useState([]);
  const data = [
    {
      pc_id: 1,
      pc_token: 'Ze6gHpHpce7dnsDiTM01709295579149',
      pc_user_token: 'mbnhxQIyroXCKcqHLCk1705821123739',
      pc_title: 'Poll title 1',
      pc_status: 1,
      pc_created_at: '2024-03-01T17:49:39.000Z',
      e_name: 'central',
      es_name: 'parliament',
      logo: 'parliament.png',
      full_path_logo:
        'https://abhinavbharath.org//upload/images/election_sub_type/parliament.png',
    },
    {
      pc_id: 2,
      pc_token: 'yrWugRKtIITVEi4rq2U1709296125716',
      pc_user_token: 'mbnhxQIyroXCKcqHLCk1705821123739',
      pc_title: 'Poll title 2',
      pc_status: 1,
      pc_created_at: '2024-03-01T17:58:45.000Z',
      e_name: 'central',
      es_name: 'Assembly',
      logo: 'assembly.png',
      full_path_logo:
        'https://abhinavbharath.org//upload/images/election_sub_type/assembly.png',
    },
    {
      pc_id: 3,
      pc_token: 'yrWugRKtIITVEi4rq2U1709296125716',
      pc_user_token: 'mbnhxQIyroXCKcqHLCk1705821123739',
      pc_title: 'Poll title 3',
      pc_status: 1,
      pc_created_at: '2024-03-01T17:58:45.000Z',
      e_name: 'state',
      es_name: 'Assembly',
      logo: 'assembly.png',
      full_path_logo:
        'https://abhinavbharath.org//upload/images/election_sub_type/assembly.png',
    },
  ];
  const [loader, setLoader] = useState(true);
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'poll', title: 'My Poll Committee'},
    {key: 'associate', title: 'Associate Poll'},
  ]);
  useEffect(() => {
    getPollCommittees();
  }, []);
  const pollRoute = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={committeeList}
          renderItem={renderData}
          keyExtractor={id => id.pc_id}
        />
      </View>
    );
  };

  const associateRoute = () => {
    return (
      <View style={styles.container}>
        <FlatList
          data={committeeList}
          renderItem={renderData}
          keyExtractor={id => id.pc_id}
        />
      </View>
    );
  };

  const renderScene = SceneMap({
    poll: pollRoute,
    associate: associateRoute,
  });
  function getPollCommittees(params) {
    var formData = {
      user_token: 'z7XCXFwU2I73RFo1lwh1704385063729',
      user_id: '129',
      //   user_token: profile.u_token,
      //   user_id: `${profile.u_id}`,
    };

    try {
      var config = {
        method: 'post',
        url: 'https://abhinavbharath.org:3536/manage_poll/poll_commitee_list',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: formData,
      };
      axios(config)
        //   Api.PollCommiteeList(formData)
        .then(res => {
          if (res.data.status == 1) {
            console.log('====================================');
            console.log('PollCommiteeList', res.data.data);
            console.log('====================================');
            setCommitteeList(res.data.data);
          }
        });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setLoader(false);
      }, 2000);
    }
  }

  const handlePollManagement = item => {
    console.log('====================================');
    console.log();
    console.log('====================================');
    if (item.e_name == 'central') {
      //   navigation.navigate('StatePoll', {
      //     pc_id: item.pc_id,
      //     pc_name: item.pc_name,
      //   });
    } else if (item.e_name == 'state') {
      //   navigation.navigate('DistrictPoll', {
      //     pc_id: item.pc_id,
      //     state_id: item.state_id,
      //     pc_name: item.pc_name,
      //   });
    }
  };

  const renderData = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          handlePollManagement({
            e_name: item.e_name,
            pc_id: item.pc_id,
            state_id: item.pc_state_id,
            pc_name: item.pc_title,
          })
        }
        style={styles.mainConatainer}>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../Images/title.png')}
              style={styles.img}
            />
            <View style={{flexDirection: 'column', marginHorizontal: 10}}>
              <Text style={styles.title}>Title</Text>
              <Text style={styles.titleTxt}>{item.pc_title}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 8}}>
            <Image source={{uri: item.full_path_logo}} style={styles.img} />
            <View style={{flexDirection: 'column', marginHorizontal: 10}}>
              <Text style={styles.title}>Election Type</Text>
              <Text style={styles.titleTxt}>
                {item.e_name + ' - '}
                {item.es_name}
              </Text>
            </View>
          </View>
        </View>
        <AntDesign
          name="right"
          size={20}
          color={'#000'}
          style={{alignSelf: 'center'}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        top: Platform.OS == 'ios' ? -5 : 0,
        backgroundColor: '#000',
      }}>
      {/* <Header title={'Poll Committees'} /> */}
      {/* <Header title={'Poll Committees'} /> */}
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
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
        />
      )}
      {/* {loader == true ? (
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
        <View style={styles.container}>
          <FlatList
            data={committeeList}
            renderItem={renderData}
            keyExtractor={id => id.pc_id}
          />
        </View>
      )} */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // paddingVertical: 10,
  },
  mainConatainer: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 7,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    height: 20,
    width: 21,
    alignSelf: 'center',
    // resizeMode: 'contain',
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: font_family.Inter_500.fontFamily,
    color: '#666666',
  },
  titleTxt: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: font_family.OpenSans_600.fontFamily,
    color: '#000000',
  },
});
