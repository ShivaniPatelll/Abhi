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
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {font_family} from '../../../Shared/Assets/CSS/fonts';
import {useNavigation} from '@react-navigation/native';

const PollIncharges = props => {
  const navigation = useNavigation();
  const {
    countryname,
    inchargename,
    election,
    onPressLocation,
    onPressEdit,
    onPressDelete,
    onPressActivity,
    data,
    state_id,
    profile,
    district_id,
  } = props;

  return (
    <View style={{flex: 1}}>
      <View style={{flexDirection: 'row'}}>
        <View style={{justifyContent: 'center', alignItems: 'center', top: 10}}>
          <View style={styles.leftView} />
          <View style={styles.line} />
        </View>
        <View style={{padding: 8}}>
          <View style={styles.mainContainer}>
            <View style={{flexDirection: 'column', width: '75%'}}>
              <View style={{}}>
                <Text style={styles.stateTxt}>{countryname}</Text>
              </View>
              <Text style={styles.inchargeTxt}>
                Incharge-
                <Text style={styles.inchargenameTxt}>{inchargename}</Text>
              </Text>

              <View style={{flexDirection: 'row', marginTop: 6}}>
                <TouchableOpacity
                  onPress={() => [
                    onPressActivity({
                      pc_id: data.pc_id,
                      incharge_id: data?.incharge_id,
                      incharge_name: data?.incharge_name,
                      location: election,
                    }),
                    navigation.navigate('PollActivitycard'),
                  ]}
                  style={styles.activitiesView}>
                  <Text style={styles.activitiesTxt}>View Activities</Text>
                </TouchableOpacity>

                {election && (
                  <TouchableOpacity
                    style={styles.activitiesView}
                    onPress={() =>
                      onPressLocation({
                        location: election,
                        state_id: state_id,
                        district_id: district_id,
                      })
                    }
                    // onPress={handleAreaIncharge}
                  >
                    <Text style={styles.activitiesTxt}>{election}</Text>
                    <AntDesign
                      name="right"
                      size={12}
                      color={'#F45800'}
                      style={{alignSelf: 'center', marginStart: 6}}
                    />
                  </TouchableOpacity>
                )}
              </View>
            </View>

            {/* {data.c_user_token != profile.u_token ? null : ( */}
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={[styles.circle, {marginRight: 5}]}
                onPress={() =>
                  onPressEdit({
                    pc_id: data.pc_id,
                    incharge_id: data?.c_incharge_id,
                    incharge_name: data?.incharge_name,
                  })
                }>
                <MaterialIcons
                  name={'edit'}
                  size={15}
                  color="#000000"
                  style={{alignSelf: 'center'}}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.circle}
                onPress={() =>
                  onPressDelete({
                    pc_id: data.pc_id,
                    incharge_id: data?.c_incharge_id,
                    incharge_name: data?.incharge_name,
                    c_id: data.c_id,
                  })
                }
                // onPress={onPressDelete}
              >
                <MaterialIcons
                  name={'delete'}
                  size={15}
                  color="#000000"
                  style={{alignSelf: 'center'}}
                />
              </TouchableOpacity>
            </View>
            {/* )} */}
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // paddingHorizontal: 5,
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
    paddingHorizontal: 10,
    paddingVertical: 10,
    // margin: 8,
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
    // flex: 1,
  },
  stateTxt: {
    fontSize: 15,
    fontFamily: font_family.OpenSans_600.fontFamily,
    fontWeight: '700',
    color: '#000000',
    // width: '20%',
  },
  inchargeTxt: {
    fontSize: 13,
    fontFamily: font_family.Inter_500.fontFamily,
    fontWeight: '500',
    color: '#9D9D9D',
    marginVertical: 3,
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
  leftView: {
    height: 18,
    width: 18,

    borderRadius: 9,
    borderWidth: 1.5,
    borderColor: '#0068E5',
    marginTop: 0,
    backgroundColor: '#fff',
  },
  line: {
    //   width: 1,
    flex: 1,
    borderWidth: 0.5,
    width: 1,
    borderStyle: 'dashed',
    borderColor: '#0068E5',
  },
});

export {PollIncharges};
