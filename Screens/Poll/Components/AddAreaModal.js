import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Pressable,
  ScrollView,
  ImageBackground,
  TextInput,
} from 'react-native';
// import {usePostListDataApiCallBack} from '../../../hooks/usePostListDataApi';
// import {useActivityListDataApiCallBack} from '../../../hooks/useActivityListData';

// import {useFilteredLeaderListDataApiCallBack} from '../../../hooks/useFilteredLeaderListData';
// import {useBuildTeamListDataApiCallBack} from '../../../hooks/useBuildTeamListData';
// import {useManifestoListDataApiCallBack} from '../../../hooks/useManifestoListData';
import StateDropdown from '../../../Shared/Assets/Component/StateDropdown';
import DistrictDropdown from '../../../Shared/Assets/Component/DistrictDropdown';
import CityDropdown from '../../../Shared/Assets/Component/CityDropdown';
import MandalDropdown from '../../../Shared/Assets/Component/MandalDropdown';
import {font_family} from '../../../fonts/fonts';
// import Api from '../../../../Api/Api';
// import {useProfileData} from '../../../../Redux/slice/profileDetail';
import InchargeDropdown from '../../../Shared/Assets/Component/InchargeDropdown';
export const AddAreaModal = ({
  visible,
  closeModal,
  state,
  district,
  city,
  close,
  filterArea,
  filterType,
  incharge,
  addIncharge,
  state_id,
  district_id,
  mandal,
  mandal_id,
}) => {
  // const profile = useProfileData();
  //   const getSearchPost = usePostListDataApiCallBack();
  //   const fetchActivityData = useActivityListDataApiCallBack();
  //   const fetchLeaderData = useFilteredLeaderListDataApiCallBack();
  //   const fetchBuildTeamData = useBuildTeamListDataApiCallBack();
  //   const fetchManifesto = useManifestoListDataApiCallBack();
  // Modal State

  const [open_state_modal, setopen_state_modal] = useState(false);
  const [value_state_modal, setvalue_state_modal] = useState('');
  const [item_state_modal, setitem_state_modal] = useState(state);
  const [value_state_id_modal, setvalue_state_id_modal] = useState('');

  const [open_incharge_modal, setopen_incharge_modal] = useState(false);
  const [value_incharge_modal, setvalue_incharge_modal] = useState('');
  const [item_incharge_modal, setitem_incharge_modal] = useState(incharge);
  const [value_incharge_id_modal, setvalue_incharge_id_modal] = useState('');

  const [open_district_modal, setopen_district_modal] = useState(false);
  const [value_district_modal, setvalue_district_modal] = useState('');
  const [item_district_modal, setitem_district_modal] = useState(district);
  const [value_district_id_modal, setvalue_district_id_modal] = useState('');

  const [open_mandal_modal, setopen_mandal_modal] = useState(false);
  const [value_mandal_modal, setvalue_mandal_modal] = useState('');
  const [item_mandal_modal, setitem_mandal_modal] = useState(mandal);
  const [value_mandal_id_modal, setvalue_mandal_id_modal] = useState('');

  // const [opacity_boolean, setopacity_boolean] = useState(true);

  const [open_cons_modal, setopen_cons_modal] = useState(false);
  const [value_cons_modal, setvalue_cons_modal] = useState('');
  const [item_cons_modal, setitem_cons_modal] = useState(city);
  const [value_cons_id_modal, setvalue_cons_id_modal] = useState('');
  const [cons_err_modal, setcons_err_modal] = useState('');

  const [filter_area, setfilter_area] = useState('jigar');
  const [wardNumber, setWardNumber] = useState('');
  const [villageNumber, setVillageNumber] = useState('');

  function handleClosePopup(params) {
    // closeModal;
    setvalue_state_modal('');
    setvalue_district_modal('');
    setvalue_cons_modal('');
    setvalue_incharge_modal('');

    setvalue_incharge_id_modal('');
    setvalue_state_id_modal('');
    setvalue_district_id_modal('');
    setvalue_cons_id_modal('');
    setWardNumber('');
    close(false);
  }

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating={false}
      useNativeDriver={true}
      backdropOpacity={0.7}
      onRequestClose={closeModal}
      // onRequestClose={() => {
      //   setother_area_modal_visible(!other_area_modal_visible);
      // }}
    >
      <View style={[styles.modalContainer]}>
        <ImageBackground
          borderRadius={5}
          resizeMode="stretch"
          source={require('../../../Shared/Assets/Images/drawerbg.png')}
          style={styles.popupmodal_scrollview}>
          <TouchableOpacity
            onPress={handleClosePopup}
            style={{padding: 1, marginHorizontal: 10, alignSelf: 'flex-end'}}>
            {/* <AntDesign
                name={'close'}
                style={{alignSelf: 'flex-end'}}
                color={'#000'}
              /> */}
            <Text style={[styles.modal_title, {color: '#000'}]}>Close</Text>
          </TouchableOpacity>

          {filterType == 'State' ? (
            <>
              <Text style={styles.modal_title}>Select State</Text>
              <StateDropdown
                open_state_modal={open_state_modal}
                value_state_modal={value_state_modal}
                item_state_modal={state}
                setopen_state_modal={setopen_state_modal}
                setvalue_state_modal={setvalue_state_modal}
                setitem_state_modal={setitem_state_modal}
                onPress={value => {
                  // setother_area_modal_visible(true);
                }}
                onOpen={value => {
                  setopen_district_modal(false),
                    setopen_cons_modal(false),
                    setopen_incharge_modal(false);
                  // setother_area_modal_visible(true);
                }}
                onSelectstate={value => {
                  console.log('value_state_id_modal????????', value);
                  setvalue_state_id_modal(value);
                  setvalue_district_modal('');
                  setvalue_district_id_modal('');
                  setvalue_cons_modal('');
                  setvalue_cons_id_modal('');
                  // setother_area_modal_visible(true);
                }}
              />
            </>
          ) : null}

          {filterType == 'District' ? (
            <>
              <Text style={styles.modal_title}>Select District</Text>

              <DistrictDropdown
                open_district_modal={open_district_modal}
                value_district_modal={value_district_modal}
                item_district_modal={district}
                setopen_district_modal={setopen_district_modal}
                setvalue_district_modal={setvalue_district_modal}
                setitem_district_modal={setitem_district_modal}
                value_state_id_modal={state_id}
                onOpen={value => {
                  setopen_state_modal(false),
                    setopen_cons_modal(false),
                    setopen_incharge_modal(false);
                  // setother_area_modal_visible(true);
                }}
                onSelectdistrict={value => {
                  setvalue_district_id_modal(value);
                  setvalue_cons_modal('');
                  setvalue_cons_id_modal('');
                  // setother_area_modal_visible(true);
                  // console.log('value_district_id_modal/////', value);
                  // console.log(
                  //   'value_state_id_modal./../../',
                  //   value_state_id_modal,
                  // );
                }}
              />
            </>
          ) : null}

          {filterType == 'City' ? (
            <>
              <Text style={styles.modal_title}>Enter Constituency</Text>

              <CityDropdown
                open_cons_modal={open_cons_modal}
                value_cons_modal={value_cons_modal}
                item_cons_modal={city}
                setopen_cons_modal={setopen_cons_modal}
                setvalue_cons_modal={setvalue_cons_modal}
                setitem_cons_modal={setitem_cons_modal}
                value_district_id_modal={district_id}
                onOpen={value => {
                  setopen_state_modal(false), setopen_district_modal(false);
                  // setother_area_modal_visible(true);
                }}
                onSelectcity={value => {
                  setvalue_cons_id_modal(value);
                  console.log('value_cons_id_modal?????', value);
                  console.log('value_state_id_modal', value_state_id_modal);
                  console.log(
                    'value_district_id_modal',
                    value_district_id_modal,
                  );
                  // setother_area_modal_visible(true);
                }}
              />
            </>
          ) : null}

          {filterType == 'Ward' ? (
            <>
              <Text style={styles.modal_title}>Select Ward</Text>

              {/* <CityDropdown
                open_cons_modal={open_cons_modal}
                value_cons_modal={value_cons_modal}
                item_cons_modal={city}
                setopen_cons_modal={setopen_cons_modal}
                setvalue_cons_modal={setvalue_cons_modal}
                setitem_cons_modal={setitem_cons_modal}
                value_district_id_modal={167}
                onOpen={value => {
                  setopen_state_modal(false), setopen_district_modal(false);
                  // setother_area_modal_visible(true);
                }}
                onSelectcity={value => {
                  setvalue_cons_id_modal(value);
                  console.log('value_cons_id_modal?????', value);
                  console.log('value_state_id_modal', value_state_id_modal);
                  console.log(
                    'value_district_id_modal',
                    value_district_id_modal,
                  );
                  // setother_area_modal_visible(true);
                }}
              /> */}

              <View style={styles.statedropdown}>
                <TextInput
                  placeholder="Please Enter Ward Number"
                  placeholderTextColor={'#666'}
                  value={wardNumber}
                  onChangeText={text => setWardNumber(text)}
                  style={styles.valuetext}
                  keyboardType="numeric"
                />
              </View>
            </>
          ) : null}

          {filterType == 'Mandal' ? (
            <>
              <Text style={styles.modal_title}>Select Mandal</Text>

              <MandalDropdown
                open_mandal_modal={open_mandal_modal}
                value_mandal_modal={value_mandal_modal}
                item_mandal_modal={mandal}
                setopen_mandal_modal={setopen_mandal_modal}
                setvalue_mandal_modal={setvalue_mandal_modal}
                setitem_mandal_modal={setitem_mandal_modal}
                value_state_id_modal={state_id}
                onOpen={value => {
                  setopen_state_modal(false),
                    setopen_cons_modal(false),
                    setopen_incharge_modal(false);
                  // setother_area_modal_visible(true);
                }}
                onSelectmandal={value => {
                  setvalue_mandal_id_modal(value);
                  setvalue_cons_modal('');
                  setvalue_cons_id_modal('');
                  // setother_area_modal_visible(true);
                  // console.log('value_district_id_modal/////', value);
                  // console.log(
                  //   'value_state_id_modal./../../',
                  //   value_state_id_modal,
                  // );
                }}
              />
            </>
          ) : null}

          {filterType == 'Village' ? (
            <>
              <Text style={styles.modal_title}>Select Village</Text>

              {/* <CityDropdown
                open_cons_modal={open_cons_modal}
                value_cons_modal={value_cons_modal}
                item_cons_modal={city}
                setopen_cons_modal={setopen_cons_modal}
                setvalue_cons_modal={setvalue_cons_modal}
                setitem_cons_modal={setitem_cons_modal}
                value_district_id_modal={167}
                onOpen={value => {
                  setopen_state_modal(false), setopen_district_modal(false);
                  // setother_area_modal_visible(true);
                }}
                onSelectcity={value => {
                  setvalue_cons_id_modal(value);
                  console.log('value_cons_id_modal?????', value);
                  console.log('value_state_id_modal', value_state_id_modal);
                  console.log(
                    'value_district_id_modal',
                    value_district_id_modal,
                  );
                  // setother_area_modal_visible(true);
                }}
              /> */}

              <View style={styles.statedropdown}>
                <TextInput
                  placeholder="Please Enter Village Number"
                  placeholderTextColor={'#666'}
                  value={villageNumber}
                  onChangeText={text => setVillageNumber(text)}
                  style={styles.valuetext}
                  keyboardType="numeric"
                />
              </View>
            </>
          ) : null}

          <Text style={styles.modal_title}>Select Incharge</Text>

          <InchargeDropdown
            open_incharge_modal={open_incharge_modal}
            value_incharge_modal={value_incharge_modal}
            item_incharge_modal={incharge}
            setopen_incharge_modal={setopen_incharge_modal}
            setvalue_incharge_modal={setvalue_incharge_modal}
            setitem_incharge_modal={setitem_incharge_modal}
            onPress={value => {
              // setother_area_modal_visible(true);
            }}
            onOpen={value => {
              setopen_district_modal(false),
                setopen_cons_modal(false),
                setopen_state_modal(false);
              // setother_area_modal_visible(true);
            }}
            onSelectincharge={value => {
              console.log('value_state_id_modal????????', value);
              setvalue_incharge_id_modal(value);
              //   setvalue_district_modal('');
              //   setvalue_district_id_modal('');
              //   setvalue_cons_modal('');
              //   setvalue_cons_id_modal('');
              // setother_area_modal_visible(true);
            }}
          />

          {(value_state_id_modal != '' && value_incharge_modal != '') ||
          (value_district_id_modal != '' && value_incharge_modal != '') ||
          (value_cons_id_modal != '' && value_incharge_modal != '') ||
          (value_mandal_id_modal != '' && value_incharge_modal != '') ||
          (wardNumber != '' && value_incharge_modal != '') ? (
            <TouchableOpacity
              onPress={() => {
                filterType == 'State'
                  ? [
                      addIncharge({
                        state_id: value_state_id_modal,
                        incharge_id: value_incharge_id_modal,
                      }),
                      handleClosePopup(),
                    ]
                  : filterType == 'District'
                  ? [
                      addIncharge({
                        district_id: value_district_id_modal,
                        incharge_id: value_incharge_id_modal,
                      }),
                      handleClosePopup(),
                    ]
                  : filterType == 'City'
                  ? [
                      addIncharge({
                        city_id: value_cons_id_modal,
                        incharge_id: value_incharge_id_modal,
                      }),
                      handleClosePopup(),
                    ]
                  : filterType == 'Mandal'
                  ? [
                      addIncharge({
                        district_id: value_mandal_id_modal,
                        incharge_id: value_incharge_id_modal,
                      }),
                      handleClosePopup(),
                    ]
                  : filterType == 'Village'
                  ? [
                      addIncharge({
                        ward_id: villageNumber,
                        incharge_id: value_incharge_id_modal,
                      }),
                      handleClosePopup(),
                    ]
                  : [
                      addIncharge({
                        ward_id: wardNumber,
                        incharge_id: value_incharge_id_modal,
                      }),
                      handleClosePopup(),
                    ];
              }}
              activeOpacity={0.5}
              style={{
                paddingHorizontal: '10%',
                backgroundColor: '#0068E5',
                marginTop: '5%',
                alignSelf: 'center',
                justifyContent: 'center',
                padding: 8,
                alignItems: 'center',
                borderRadius: 5,
                elevation: 10,
                shadowColor: '#000',
              }}>
              <Text
                style={{
                  fontFamily: 'Segoe UI Bold',
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: '600',
                }}>
                Add
              </Text>
            </TouchableOpacity>
          ) : null}
        </ImageBackground>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  District_option_text: {
    fontSize: 11,
    fontFamily: 'Inter-Regular',
    color: '#000',
  },
  modalBackdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  districtDropdownView: {
    position: 'absolute',
    paddingVertical: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
    elevation: 8,
    borderRadius: 5,
    right: '2%',
    top: '11.5%',
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
  },
  filterDropdownView: {
    position: 'absolute',
    paddingVertical: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    elevation: 8,
    borderRadius: 5,
    left: '4%',
    top: '11.5%',
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    overflow: 'hidden',
  },
  modal_title: {
    color: '#0068E5',
    fontFamily: font_family.Inter_400.fontFamily,
    fontSize: 12,
    marginHorizontal: 10,
    marginTop: 5,
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
  remove_btn: {
    paddingHorizontal: '10%',
    backgroundColor: '#0068E5',
    alignSelf: 'center',
    justifyContent: 'center',
    padding: 8,
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 50,
    elevation: 10,
    shadowColor: '#000',
  },

  title_font: {
    fontFamily: font_family.Inter_400.fontFamily,
    color: '#9D9D9D',
    fontSize: 11,
  },
  placeholder_font: {
    fontFamily: font_family.Inter_400.fontFamily,
    color: '#666',
    fontSize: 12,
  },

  description_font: {
    color: '#1D1D1D',
    fontFamily: font_family.Inter_400.fontFamily,
    fontSize: 12,
  },
  modalIssueCatContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // top: '12%',
    borderRadius: 10,
  },
  modalContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // top: '12%',
    // borderRadius: 10,
  },
  search_btn: {
    paddingHorizontal: '8%',
    backgroundColor: '#0068E5',
    alignSelf: 'center',
    bottom: '8%',
    justifyContent: 'center',
    padding: 6,
    alignItems: 'center',
    borderRadius: 50,
    elevation: 10,
    shadowColor: '#000',
  },
  popupmodal_scrollview: {
    // backgroundColor: '#fff',
    // flexGrow: 1,
    width: '100%',
    paddingVertical: '5%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  issuecatmodalheader: {
    padding: 5,
    backgroundColor: '#0068E5',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '80%',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  // button: {
  //   borderRadius: 20,
  //   padding: 10,
  //   elevation: 2,
  // },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  valuetext: {
    fontFamily: font_family.Inter_400.fontFamily,
    color: '#000',
    fontSize: 12,
  },
  statedropdown: {
    maxHeight: 38,
    alignSelf: 'center',
    marginTop: '2%',
    borderRadius: 5,
    borderColor: 'rgba(215, 215, 215, 0.41)',
    borderWidth: 0.7,
    elevation: 4,
    shadowColor: '#000',
    backgroundColor: '#FFF',
    alignItem: 'center',
    marginHorizontal: '5%',
    width: '90%',
    justifyContent: 'center',
    // alignItems: 'center',
    // zIndex: -1,
  },
});
