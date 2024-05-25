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

const DistrictDropdown = memo(props => {
  // const DistrictDropdown = memo((props) => {

  // console.log('Props', props?.value_state_id_modal);
  // console.log('item_district_modal', props);

  const {
    open_district_modal,
    value_district_modal,
    item_district_modal,
    setopen_district_modal,
    setvalue_district_modal,
    setitem_district_modal,
    value_state_id_modal,
    onSelectdistrict,
    onOpen,
  } = props;

  //     // console.log('DistrictDropdown', onSelectdistrict);

  const [items, setItems] = useState([]);

  // return (
  //     <View style ={styles.container}>
  //         </View>
  // )

  return (
    <View style={styles.container}>
      <DropDownPicker
        placeholder="Please Select District"
        // disabled={opacity_boolean}
        searchable
        searchContainerStyle={{
          backgroundColor: '#fff',
          borderBottomWidth: 1,
          borderColor: 'rgba(0, 0, 0, 0.4)',
        }}
        searchTextInputStyle={{
          maxHeight: 30,
          // borderColor: 'grey',
          borderWidth: 1,
          borderColor: 'rgba(0, 0, 0, 0.4)',
        }}
        open={open_district_modal}
        value={value_district_modal}
        items={item_district_modal
          .filter(i => i.d_state_id == value_state_id_modal)
          .map(i => {
            return {label: i.d_name, value: i.d_name, d_id: i.d_id};
          })}
        setOpen={setopen_district_modal}
        setValue={setvalue_district_modal}
        setItems={setitem_district_modal}
        onOpen={() => onOpen(open_district_modal)}
        listMode="SCROLLVIEW"
        // zIndex={3000}
        // zIndexInverse={2000}
        onSelectItem={i => [
          console.log('d_id', i.d_id),
          onSelectdistrict(i.d_id),
        ]}
        placeholderStyle={styles.placeholder_font}
        textStyle={styles.valuetext}
        style={styles.statedropdown}
        dropDownContainerStyle={styles.statedropcontainer}
      />
    </View>
  );
  // // });

  // );
});

export default DistrictDropdown;
// export default DistrictDropdown;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
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
    elevation: 4,
    shadowColor: '#000',
    backgroundColor: '#fff',
    alignItem: 'center',
    marginHorizontal: '5%',
    width: '90%',
    zIndex: -1,
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

// const DistrictDropdown = React.memo((props) => {
//     // Your component code here
//     return (
//         <View style={styles.container}>
//             {/* Render your component content */}
//         </View>
//     );
// });

// export default DistrictDropdown;
