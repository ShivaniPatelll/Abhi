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
  useWindowDimensions,
} from 'react-native';
import {font_family} from '../../fonts/fonts';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function CreatePollCommittee() {
  const data = [
    {id: 0, title: 'Poll Title 1', electionType: 'State- Parliament'},
    {id: 1, title: 'Poll Title 2', electionType: 'State- Assembly'},
    {id: 2, title: 'Poll Title 3', electionType: 'Central- Parliament'},
  ];
  const renderData = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.mainConatainer}>
        <View style={{flexDirection: 'column'}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('../../Images/title.png')}
              style={styles.img}
            />
            <View style={{flexDirection: 'column', marginHorizontal: 10}}>
              <Text style={styles.title}>Title</Text>
              <Text style={styles.titleTxt}>{item.title}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 8}}>
            <Image
              source={require('../../Images/election.png')}
              style={styles.img}
            />
            <View style={{flexDirection: 'column', marginHorizontal: 10}}>
              <Text style={styles.title}>Election Type</Text>
              <Text style={styles.titleTxt}>{item.electionType}</Text>
            </View>
          </View>
        </View>
        <AntDesign name="right" size={20} style={{alignSelf: 'center'}} />
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={styles.container}>
          <FlatList data={data} renderItem={renderData} />
        </View>
      </ScrollView>
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
    paddingVertical: 10,
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
    height: 18,
    width: 21,
    alignSelf: 'center',
    resizeMode: 'contain',
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
