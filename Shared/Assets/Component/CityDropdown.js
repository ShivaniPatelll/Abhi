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

const CityDropdown = memo(props => {
  const {
    open_cons_modal,
    value_cons_modal,
    item_cons_modal,
    onSelectcity,
    setopen_cons_modal,
    setvalue_cons_modal,
    setitem_cons_modal,
    value_district_id_modal,
    onOpen,
  } = props;

  // console.log('CityDropdown',props);

  return (
    <View style={styles.container}>
      <DropDownPicker
        placeholder="Please Select City"
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
        open={open_cons_modal}
        value={value_cons_modal}
        // items={item_cons_modal.map((i) => { return { label: i.state_title, value: i.state_title, id: i.id } })}
        items={item_cons_modal
          .filter(i => i.c_district_id == value_district_id_modal)
          .map(i => {
            return {label: i.c_name, value: i.c_name, c_id: i.c_id};
          })}
        setOpen={setopen_cons_modal}
        setValue={setvalue_cons_modal}
        setItems={setitem_cons_modal}
        onOpen={() => onOpen(open_cons_modal)}
        listMode="SCROLLVIEW"
        // zIndex={3000}
        // zIndexInverse={2000}
        onSelectItem={i => [onSelectcity(i.c_id)]}
        placeholderStyle={styles.placeholder_font}
        textStyle={styles.valuetext}
        style={styles.citydropdown}
        dropDownContainerStyle={styles.citydropcontainer}
      />
    </View>
  );
});

export default CityDropdown;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // paddingBottom: 10,
    // elevation: 10
    backgroundColor: 'transparent',
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
  citydropdown: {
    minHeight: 35,
    alignSelf: 'center',
    marginTop: '2%',
    borderRadius: 5,
    borderColor: 'rgba(215, 215, 215, 0.41)',
    borderWidth: 0.7,
    elevation: 4,
    shadowColor: '#000',
    backgroundColor: '#fff',
    alignItem: 'center',
    marginHorizontal: '5%',
    width: '90%',
    zIndex: -1,
  },
  citydropcontainer: {
    marginHorizontal: '5%',
    width: '90%',
    borderWidth: 0.7,
    elevation: 4,
    borderColor: '#D7D7D769',
    shadowColor: '#000',
    position: 'relative',
    top: 1,
  },
});
