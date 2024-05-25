import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {font_family} from '../CSS/fonts';

const Leaderlistcard = props => {
  // console.log('Leaderlistcard props', props);

  const {data, navigation} = props;

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Leaderdetailshared', {leader_id: data?.u_token})
      }
      style={styles.container}>
      <View
        style={{
          marginTop: '4%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: '2%',
          width: '100%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View
            style={{
              padding: '0.5%',
              borderWidth: 1,
              borderColor: '#0068E5',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="cover"
              borderRadius={50}
              style={{height: 30, width: 30}}
              source={{
                uri:
                  data?.full_path_user_profile?.includes('/') == true
                    ? data?.full_path_user_profile
                    : 'https://appapi.abhinavbharath.in/upload/default/activity/event_type/profile_icon.png',
              }}
            />
          </View>

          <View style={{width: '80%'}}>
            <Text style={styles.leadernamestyle}>{data?.u_full_name}</Text>

            <View
              style={{
                width: '60%',
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  // backgroundColor:
                  //   data?.party_name == 'Aam Aadmi Party'
                  //     ? 'rgba(0, 113, 174, 0.07)'
                  //     : data?.party_name == 'Bhartiya Janta Party'
                  //     ? 'rgba(255, 103, 31, 0.08)'
                  //     : data?.party_name == 'Bahujan Samaj Party'
                  //     ? 'rgba(0, 113, 174, 0.07)'
                  //     : data?.party_name == 'Communist Party of India'
                  //     ? 'rgba(222, 0, 0, 0.06)'
                  //     : data?.party_name == 'Indian National Congress'
                  //     ? 'rgba(17, 123, 61, 0.08)'
                  //     : '#fff',
                  // borderRadius: 50,
                  paddingHorizontal: 2,
                  padding: '1%',
                  marginLeft: 4,
                  color:
                    data?.party_name == 'Aam Aadmi Party'
                      ? '#0071AE'
                      : data?.party_name == 'Bhartiya Janta Party'
                      ? '#FF671F'
                      : data?.party_name == 'Bahujan Samaj Party'
                      ? '#0071AE'
                      : data?.party_name == 'Communist Party of India'
                      ? '#DE0000'
                      : data?.party_name == 'Indian National Congress'
                      ? '#117B3D'
                      : '#FF671F',
                }}>
                {data?.party_name}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 1,
          }}>
          <Image
            resizeMode="contain"
            borderRadius={50}
            style={{height: 30, width: 30}}
            source={{uri: data?.party_logo}}
          />
        </View>
      </View>

      <View
        style={{
          marginTop: '3%',
          alignItems: 'flex-start',
          flexDirection: 'row',
          paddingLeft: 2,
        }}>
        <View
          style={{
            marginHorizontal: '2.5%',
            padding: '0.5%',
            borderWidth: 1,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'rgba(65, 65, 65, 0.12)',
          }}>
          <Image
            style={{height: 22, width: 22}}
            source={require('../../../Shared/Assets/Images/leader_designation_icon.png')}
          />
        </View>

        <Text style={styles.designationtext}>
          {data.leader_position_status == 0
            ? 'Current'
            : data.leader_position_status == 1
            ? 'Ex'
            : data.leader_position_status == 2
            ? 'Aspirant'
            : ''}
        </Text>

        <Text style={[styles.designationtext, {paddingLeft: 4}]}>
          {data?.party_designation}
        </Text>
      </View>

      <TouchableOpacity
        // onPress={() => navigation.navigate('LeaderDetail', { leader_id: data?.u_token })}
        onPress={() =>
          navigation.navigate('Leaderdetailshared', {leader_id: data?.u_token})
        }
        style={{
          alignSelf: 'flex-end',
          backgroundColor: '#0068E5',
          borderBottomRightRadius: 10,
          paddingHorizontal: '6%',
          padding: '0.5%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: '#fff'}}>View</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default Leaderlistcard;

const styles = StyleSheet.create({
  container: {
    elevation: 3,
    borderRadius: 10,
    backgroundColor: '#fff',
    // marginHorizontal: '3%',
    width: '95%',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    alignSelf: 'center',
  },
  leadernamestyle: {
    // paddingHorizontal: 5,
    // fontWeight: '500',
    // color: '#000',
    paddingLeft: 6,
    fontFamily: font_family.OpenSans_600.fontFamily,
    color: '#000',
    fontSize: 15,
  },
  designationtext: {
    fontFamily: font_family.OpenSans_600.fontFamily,
    alignSelf: 'center',
    color: '#414141',
    fontSize: 13,
    // paddingLeft: 2,
  },
});
