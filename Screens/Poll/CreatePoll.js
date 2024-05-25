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
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {font_family} from '../../fonts/fonts';

export default function CreatePoll() {
  const [selectedTab, setSelectedTab] = useState('');
  const [selected, setSelected] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState('');
  const [pollTitleErr, setPollTitleErr] = useState('');
  const [pollelectionErr, setPollElectionErr] = useState('');
  const [pollelectionsubTypeErr, setPollElectionsubTypeErr] = useState('');
  const data = [
    {
      id: 1,
      title: 'Parliament',
      image: require('../../Images/Parliament.png'),
    },
    {id: 2, title: 'Assembly', image: require('../../Images/Assembly.png')},
    {
      id: 3,
      title: 'Zilla PArishad',
      image: require('../../Images/ZillaParishad.png'),
    },
    {id: 4, title: 'Municipal', image: require('../../Images/Municipal.png')},
    {
      id: 5,
      title: 'Gram Panchayat',
      image: require('../../Images/PanchayatRaj.png'),
    },
    {
      id: 6,
      title: 'Mandal/Taluka',
      image: require('../../Images/PanchayatRaj.png'),
    },
  ];
  const renderData = ({item}) => {
    return (
      <TouchableOpacity
        style={[
          styles.flatListView,
          {backgroundColor: selected === item.title ? '#D7D7D769' : '#FFFFFF'},
        ]}
        onPress={() => {
          [setSelected(item.title), setPollElectionsubTypeErr('')];
        }}>
        <Image
          source={item.image}
          style={{height: 70, width: 70}}
          resizeMode="contain"
        />
        <Text style={styles.flatListTxt}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const handleButtonPress = () => {
    console.log('selected', selected);
    var validate_poll = true;
    if (inputValue.trim() === '') {
      setIsValid(false);
      setPollTitleErr('Please Enter Title');
      validate_poll = false;
    }
    if (selectedTab.trim() === '') {
      setPollElectionErr('Please Enter Election Type');
      validate_poll = false;
    }
    if (selected.trim() === '') {
      setPollElectionsubTypeErr('Please Enter Election SubType');
      validate_poll = false;
    }
    if (validate_poll == true) {
      console.log('Success');
    } else {
      console.log('Failed');
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.titleTxt}>Title</Text>
          <View style={styles.titleView}>
            <TextInput
              placeholder="Type your title"
              placeholderTextColor={'#9D9D9D'}
              value={inputValue}
              onChangeText={text => [setInputValue(text), setPollTitleErr('')]}
            />
          </View>

          {pollTitleErr != '' && (
            <Text style={styles.errorText}>{pollTitleErr}</Text>
          )}

          <Text style={styles.titleTxt}>Select Election Type</Text>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={[
                styles.tabView,
                {
                  backgroundColor:
                    selectedTab === 'Central' ? '#D7D7D769' : '#FFFFFF',
                },
              ]}
              onPress={() => [
                setSelectedTab('Central'),
                setPollElectionErr(''),
              ]}>
              <Text style={styles.tabTxt}>Central</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabView,
                {
                  backgroundColor:
                    selectedTab === 'State' ? '#D7D7D769' : '#FFFFFF',
                },
              ]}
              onPress={() => [setSelectedTab('State'), setPollElectionErr('')]}>
              <Text style={styles.tabTxt}>State</Text>
            </TouchableOpacity>
          </View>
          {pollelectionErr != '' && (
            <Text style={styles.errorText}>{pollelectionErr}</Text>
          )}
          <FlatList
            data={
              selectedTab === 'Central' ? data.slice(0, 2) : data.slice(0, 6)
            }
            renderItem={renderData}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.flatListContainer}
          />
          {pollelectionsubTypeErr != '' && (
            <Text style={styles.errorText}>{pollelectionsubTypeErr}</Text>
          )}

          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonTxt}>Next</Text>
            <AntDesign name="right" size={20} style={{alignSelf: 'center'}} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
const containerHeight = 150;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  titleTxt: {
    fontSize: 12,
    fontWeight: '500',
    fontFamily: font_family.Inter_400.fontFamily,
    color: '#000000',
  },
  titleView: {
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    borderRadius: 7,
    paddingHorizontal: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  tabView: {
    height: 40,
    width: 90,
    // backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    marginVertical: 12,
    marginRight: 8,
    justifyContent: 'center',
  },
  tabTxt: {
    color: 'black',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: font_family.Inter_500.fontFamily,
    alignSelf: 'center',
  },
  flatListContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  flatListView: {
    backgroundColor: 'white',
    padding: 20,
    margin: 8,
    width: Dimensions.get('window').width / 2 - 35, // Set the width of each container
    height: containerHeight,
    shadowColor: '#000000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    borderRadius: 5,
    alignItems: 'center',
  },
  flatListTxt: {
    fontSize: 14,
    color: 'black',
    fontFamily: font_family.OpenSans_600.fontFamily,
    fontWeight: '600',
    marginVertical: 16,
  },
  button: {
    height: 33,
    width: 82,
    borderRadius: 5,
    backgroundColor: '#0068E5',
    marginVertical: 20,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  buttonTxt: {
    fontSize: 13,
    fontWeight: '500',
    fontFamily: font_family.Inter_500.fontFamily,
    color: 'white',
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  errorText: {
    fontSize: 13,
    color: 'red',
    marginBottom: 5,
  },
});
