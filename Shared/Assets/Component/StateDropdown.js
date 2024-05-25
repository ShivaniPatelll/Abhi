import React, {useRef, useState, useEffect, useCallback, memo} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Modal,
  FlatList,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {font_family} from '../CSS/fonts';

const StateDropdown = memo(props => {
  const {
    open_state_modal,
    value_state_modal,
    item_state_modal,
    onSelectstate,
    setopen_state_modal,
    setvalue_state_modal,
    setitem_state_modal,
    onOpen,
    onPress,
  } = props;
  const [items, setItems] = useState([]);
  return (
    <View style={styles.container}>
      <DropDownPicker
        placeholder="Please Select State"
        onPress={() => onPress(open_state_modal)}
        placeholderStyle={styles.placeholder_font}
        // disabled={opacity_boolean}
        searchable
        searchContainerStyle={{
          backgroundColor: '#fff',
          borderBottomWidth: 1,
          borderColor: 'rgba(0, 0, 0, 0.4)',
        }}
        searchTextInputStyle={{
          maxHeight: 30,
          borderWidth: 1,
          borderColor: 'rgba(0, 0, 0, 0.4)',
        }}
        open={open_state_modal}
        value={value_state_modal}
        items={item_state_modal.map(i => {
          return {label: i.state_title, value: i.state_title, id: i.id};
        })}
        onOpen={() => onOpen(open_state_modal)}
        setOpen={setopen_state_modal}
        setValue={setvalue_state_modal}
        setItems={setitem_state_modal}
        listMode="SCROLLVIEW"
        // zIndex={3000}
        // zIndexInverse={2000}
        onSelectItem={i => [onSelectstate(i.id)]}
        textStyle={styles.valuetext}
        style={styles.statedropdown}
        dropDownContainerStyle={styles.statedropcontainer}
      />
    </View>
  );
});

export default StateDropdown;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'transparent',
    // paddingBottom: 10,
    // elevation: 10
  },
  placeholder_font: {
    fontFamily: font_family.Inter_400.fontFamily,
    color: '#666',
    fontSize: 12,
  },
  valuetext: {
    fontFamily: font_family.Inter_400.fontFamily,
    color: '#000',
    fontSize: 12,
  },
  statedropdown: {
    minHeight: 35,
    alignSelf: 'center',
    marginTop: '2%',
    borderRadius: 5,
    borderColor: 'rgba(215, 215, 215, 0.41)',
    borderWidth: 0.7,
    elevation: 2,
    // shadowColor: '#000',
    backgroundColor: '#fff',
    alignItem: 'center',
    marginHorizontal: '5%',
    width: '90%',
    zIndex: -1,
    // marginVertical: 5,
  },
  statedropcontainer: {
    marginHorizontal: '5%',
    width: '90%',
    borderWidth: 0.7,
    elevation: 4,
    borderColor: '#D7D7D769',
    shadowColor: '#000',
    position: 'relative',
    top: -4,
    marginVertical: 5,
  },
});
