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

const InchargeDropdown = memo(props => {
  const {
    open_incharge_modal,
    value_incharge_modal,
    item_incharge_modal,
    onSelectincharge,
    setopen_incharge_modal,
    setvalue_incharge_modal,
    setitem_incharge_modal,
    onOpen,
    onPress,
  } = props;

  const [items, setItems] = useState([]);
  return (
    <View style={styles.container}>
      <DropDownPicker
        placeholder="Please Select Incharge"
        onPress={() => onPress(open_incharge_modal)}
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
        open={open_incharge_modal}
        value={value_incharge_modal}
        items={item_incharge_modal.map(i => {
          return {
            label: i.member_name,
            value: i.member_name,
            id: i.member_u_id,
          };
        })}
        onOpen={() => onOpen(open_incharge_modal)}
        setOpen={setopen_incharge_modal}
        setValue={setvalue_incharge_modal}
        setItems={setitem_incharge_modal}
        listMode="SCROLLVIEW"
        // zIndex={3000}
        // zIndexInverse={2000}
        onSelectItem={i => [
          onSelectincharge(i.id),
          setvalue_incharge_modal(i.value),

          console.log(i),
        ]}
        // onSelectItem={i => console.log('i>>', i)}
        textStyle={styles.valuetext}
        style={styles.inchargedropdown}
        dropDownContainerStyle={styles.inchargedropcontainer}
      />
    </View>
  );
});

export default InchargeDropdown;

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
  inchargedropdown: {
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
  inchargedropcontainer: {
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
