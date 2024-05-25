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
import {font_family} from '../../fonts/fonts';
import moment from 'moment';
import ReadMore from '@fawazahmed/react-native-read-more';

const NotificationCard = props => {
  const {title, time} = props;

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        {/* <Text style={styles.titleTxt}>{title}</Text> */}
        <ReadMore
          seeMoreStyle={styles.seetext}
          seeLessStyle={styles.seetext}
          numberOfLines={2}
          style={styles.notificationtitle}>
          {title}
        </ReadMore>
        <Text style={styles.timeTxt}>{time}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    // paddingHorizontal: 5,
    // paddingVertical: 5,
  },
  titleTxt: {
    color: '#000',
    fontSize: 16,
    fontFamily: font_family.OpenSans_600.fontFamily,
    fontWeight: '600',
  },
  timeTxt: {
    fontSize: 12,
    color: 'grey',
    fontWeight: '400',
    fontFamily: font_family.Inter_400.fontFamily,
  },
  notificationtitle: {
    // color: '#1D1D1D',
    // fontFamily: font_family.Inter_400.fontFamily,
    // fontSize: 12,
    color: '#494949',
    fontFamily: font_family.OpenSans_400.fontFamily,
    fontSize: 16,
  },
  seetext: {
    color: '#0068E5',
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: font_family.OpenSans_600.fontFamily,
  },
  mainContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
    // borderBottomStartRadius: 10,
    // shadowColor: '#000000',
    // shadowOffset: {
    //   width: 1,
    //   height: 1,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 4,
    // elevation: 2,
    // borderRadius: 5,
    // flex: 1,
  },
});

export {NotificationCard};
