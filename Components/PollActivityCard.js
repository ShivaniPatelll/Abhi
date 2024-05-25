import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
  ImageBackground,
  ToastAndroid,
  Platform,
  Pressable,
  Modal,
  FlatList,
} from 'react-native';
import {font_family} from '../fonts/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import ReadMore from '@fawazahmed/react-native-read-more';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
const Activitycard = props => {
  const [loading, setLoading] = useState(true);
  const data = [{}, {}, {}];

  const ActivtyData = ({item}) => {
    return (
      <View style={styles.FlatlistView}>
        <View style={styles.activityheader}>
          <TouchableOpacity
            //   onPress={() => navigation.navigate('Eventdetail', {data})}
            activeOpacity={0.8}
            style={{flexDirection: 'row', flex: 1}}>
            <View style={{paddingLeft: '1%'}}>
              <Text style={styles.eventtitletext}>Activity Title</Text>

              <View>
                <Text style={styles.placeholder_font}>
                  {/* {moment(data?.e_event_date).format('DD-MM-YYYY')} */}
                  10/10/2024
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          {/* Post Options Modal View */}
          <Menu>
            <MenuTrigger>
              <MaterialCommunityIcons
                name={'dots-vertical'}
                size={15}
                color={'#000'}
              />
            </MenuTrigger>
          </Menu>
        </View>

        <View style={styles.descview}>
          <ReadMore
            seeMoreStyle={styles.readmore}
            seeLessStyle={styles.readless}
            numberOfLines={3}
            style={styles.description_font}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur
            adip Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          </ReadMore>
        </View>
      </View>
    );
  };
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: '#fff',
        },
      ]}>
      <View style={styles.activityView}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <View style={styles.createdbyimgview}>
            <Image
              borderRadius={50}
              height={35}
              width={35}
              source={{
                uri: 'https://appapi.abhinavbharath.in/upload/default/activity/event_type/profile_icon.png',
              }}
            />
          </View>

          <View style={{paddingLeft: '2%'}}>
            <Text style={styles.eventtitletext}>James Charlie</Text>

            <View>
              <Text style={styles.placeholder_font}>Incharge- Gujarat</Text>
            </View>
          </View>
        </View>
      </View>

      <FlatList
        data={data}
        renderItem={ActivtyData}
        contentContainerStyle={{paddingVertical: 15}}
        ItemSeparatorComponent={() => <View style={{height: 5}} />}
      />
    </View>
  );
};

export default Activitycard;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 0.5 represents 50% transparency for black
    padding: 10,
    justifyContent: 'center', // Center the text vertically
    position: 'absolute',
    alignItems: 'center',
  },
  textview: {
    backgroundColor: '#000000c0',
    // height: '100%',
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    zIndex: 10,
    backgroundColor: '#000000c0',
    position: 'absolute',
    alignSelf: 'center',
    lineHeight: 15,
    fontSize: 20,
    color: '#fff',
    height: '100%',
    width: '100%',
  },
  container: {
    // width: '100%',
    // backgroundColor: '#fff',
    // elevation: 3,
    // paddingVertical: 5,
    // alignSelf: 'center',
    // borderBottomWidth: Platform.OS == 'ios' ? 0.5 : 0,
    // // paddingBottom: Platform.OS == 'ios' ? 7.5 : 0,
    // borderBottomColor: '#b3b8bc',
    // shadowOpacity: 0.1,

    flex: 1,
    // backgroundColor: '#fff',
    // borderBottomWidth: 0.2,
    // paddingBottom: 10,
    paddingTop: 15,
    elevation: 10,
    zIndex: -1,
    shadowOpacity: 0.2,
    shadowOffset: {height: 0, width: 1},
  },
  activityheader: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    paddingTop: 5,
  },
  FlatlistView: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0.5,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  activityView: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginHorizontal: 10,
    justifyContent: 'space-between',
    paddingVertical: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
    borderRadius: 5,
  },
  createdbyimgview: {
    padding: '0.5%',
    borderWidth: 1,
    borderColor: '#0068E5',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventtitletext: {
    // fontFamily: font_family.Calibrib.fontFamily,
    // color: '#000',
    // fontSize: 16,
    fontFamily: font_family.OpenSans_600.fontFamily,
    color: '#000',
    fontSize: 15,
  },
  description_font: {
    // color: '#1D1D1D',
    // fontFamily: font_family.Inter_400.fontFamily,
    // fontSize: 12,
    color: '#494949',
    fontFamily: font_family.OpenSans_400.fontFamily,
    fontSize: 14,
    marginStart: 2,
  },
  placeholder_font: {
    fontFamily: font_family.OpenSans_600.fontFamily,
    color: '#666',
    fontSize: 12,
  },
  eventimage: {
    width: '100%',
    height: '100%',
  },
  readmore: {
    color: '#0068E5',
    alignSelf: 'center',
  },
  readless: {
    color: '#0068E5',
  },
  descview: {
    zIndex: -1,
    paddingHorizontal: '2%',
    marginTop: '1%',
  },
  createdbynameview: {
    backgroundColor: '#f2f9ff',
    flexDirection: 'row',
    marginHorizontal: '4%',
    marginTop: '2%',
    alignSelf: 'flex-start',
    padding: '1%',
    borderRadius: 20,
    paddingHorizontal: '2%',
    alignItems: 'center',
  },
  creatednametext: {
    // alignSelf: 'flex-start',
    // fontSize: 10,
    // color: '#434343',
    // fontFamily: font_family.Inter_500.fontFamily,

    alignSelf: 'flex-start',
    fontSize: 11,
    fontFamily: font_family.Inter_600.fontFamily,
    color: '#434343',
  },
  createdbyimg: {
    height: 15,
    width: 15,
    marginLeft: '2%',
  },
  eventimgcontainer: {
    zIndex: -1,
    marginTop: '2%',
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  attendeventcontainer: {
    marginTop: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '3%',
    paddingBottom: 8,
  },
  attendbtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    padding: 2,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#0068E5',
  },
  eventattendtext: {
    marginLeft: 10,
    fontSize: 13,
    color: '#0068E5',
  },
  eventattendnumtext: {
    fontSize: 12,
    color: '#4A4A4A',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  // emptydatacontainer: {
  //   alignItems: 'center',
  //   height: Dimensions.get('screen').height / 1.2,
  //   justifyContent: 'center',
  // },
  modalContent: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: '#ECECEC',
  },
  messageText: {
    fontSize: 16,
    // marginBottom: 10,
    color: '#000',
    textAlign: 'center',
    fontFamily: font_family.OpenSans_600.fontFamily,
  },
  messageText_detail: {
    textAlign: 'center',
    fontFamily: font_family.OpenSans_400.fontFamily,
    marginVertical: 10,
    color: 'rgba(89, 89, 89, 0.75)',
    fontSize: 12,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },

  remove_btn_modal: {
    flex: 0.3,
    backgroundColor: '#0068E5',
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    paddingVertical: 4,
  },
});
