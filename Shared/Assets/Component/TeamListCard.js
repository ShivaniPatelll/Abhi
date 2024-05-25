import React, {useState, useEffect, useCallback, memo} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {font_family} from '../CSS/fonts';

export const TeamListCard = memo(item => {
  const {data} = item;

  console.log('Render_leader_list', item);

  const handlle_send_request = items => {
    console.log('handlle_send_request', items);
  };

  return (
    <View
      key={data.u_id}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
      }}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            // flex: 0.13,
            padding: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 40,
            borderColor: 'rgba(102, 102, 102, 0.50)',
          }}>
          <Image
            resizeMode="center"
            borderRadius={50}
            source={{
              uri:
                data.full_path_profile_pic != ''
                  ? data.full_path_profile_pic
                  : 'https://appapi.abhinavbharath.in/upload/default/activity/event_type/profile_icon.png',
            }}
            style={{height: 45, width: 45, alignSelf: 'center'}}
          />
        </View>

        <View style={{marginLeft: '3%', justifyContent: 'space-evenly'}}>
          <Text style={styles.u_name_font}>{data.u_full_name}</Text>

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.u_designation_font}>
              {data.designation_title}
            </Text>

            <Image
              style={{marginLeft: '2%'}}
              borderRadius={50}
              resizeMode="center"
              height={17}
              width={17}
              source={{uri: data?.full_path_party_logo}}
            />
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{
          justifyContent: 'center',
          paddingHorizontal: 3,
        }}
        onPress={() => handlle_send_request({item: data.u_token})}>
        <View
          style={[
            styles.request_btn,
            {borderColor: data.status == 'added' ? '#9D9D9D' : '#0068E5'},
          ]}>
          <Text style={styles.request_btn_font}>
            {/* {data.status == 'added' ? 'Pending' : 'Send Request'} */}
            Accepted
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  u_name_font: {
    fontFamily: font_family.Inter_600.fontFamily,
    color: '#000',
    fontSize: 15,
  },
  u_designation_font: {
    fontFamily: font_family.Inter_400.fontFamily,
    color: '#666',
    fontSize: 12,
  },
  request_btn_font: {
    fontFamily: font_family.Inter_500.fontFamily,
    color: '#0068E5',
    fontSize: 11,
  },
  request_btn: {
    borderRadius: 50,

    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
