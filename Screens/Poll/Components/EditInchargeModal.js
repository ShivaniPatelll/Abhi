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
import StateDropdown from '../../../../Shared/Assets/Component/StateDropdown';
import DistrictDropdown from '../../../../Shared/Assets/Component/DistrictDropdown';
import CityDropdown from '../../../../Shared/Assets/Component/CityDropdown';
import {font_family} from '../../../../Shared/Assets/CSS/fonts';
import Api from '../../../../Api/Api';
import {useProfileData} from '../../../../Redux/slice/profileDetail';
import InchargeDropdown from '../../../../Shared/Assets/Component/InchargeDropdown';
export const EditInchargeModal = ({
  visible,
  closeModal,
  state,
  district,
  city,
  close,
  filterArea,
  filterType,
  incharge,
  selectedInchargeId,
  selectedInchargeName,
  EditIncharge,
}) => {
  const profile = useProfileData();

  console.log('====================================');
  console.log('selectedInchargeId', selectedInchargeId);
  console.log('====================================');

  // Modal State

  const [open_state_modal, setopen_state_modal] = useState(false);
  const [value_state_modal, setvalue_state_modal] = useState('');
  const [item_state_modal, setitem_state_modal] = useState(state);
  const [value_state_id_modal, setvalue_state_id_modal] = useState('');

  const [open_incharge_modal, setopen_incharge_modal] = useState(false);
  const [value_incharge_modal, setvalue_incharge_modal] =
    useState(selectedInchargeName);
  const [item_incharge_modal, setitem_incharge_modal] = useState(incharge);
  const [value_incharge_id_modal, setvalue_incharge_id_modal] =
    useState(selectedInchargeId);

  const [open_district_modal, setopen_district_modal] = useState(false);
  const [value_district_modal, setvalue_district_modal] = useState('');
  const [item_district_modal, setitem_district_modal] = useState(district);
  const [value_district_id_modal, setvalue_district_id_modal] = useState('');

  // const [opacity_boolean, setopacity_boolean] = useState(true);

  const [open_cons_modal, setopen_cons_modal] = useState(false);
  const [value_cons_modal, setvalue_cons_modal] = useState('');
  const [item_cons_modal, setitem_cons_modal] = useState(city);
  const [value_cons_id_modal, setvalue_cons_id_modal] = useState('');
  const [cons_err_modal, setcons_err_modal] = useState('');

  const [filter_area, setfilter_area] = useState('jigar');
  const [wardNumber, setWardNumber] = useState('');

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

  const handleEditIncharge = useCallback(({}) => {
    item;
  }, []);

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={visible}
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating={false}
      useNativeDriver={true}
      backdropOpacity={0.7}
      onRequestClose={close}
      // onRequestClose={() => {
      //   setother_area_modal_visible(!other_area_modal_visible);
      // }}
    >
      <View style={[styles.modalContainer]}>
        <ImageBackground
          borderRadius={5}
          resizeMode="stretch"
          source={require('../../../../Shared/Assets/Images/drawerbg.png')}
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
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.modal_title}>State -</Text>
              <Text style={styles.modal_value}>Gujarat</Text>
            </View>
          ) : null}

          {filterType == 'District' ? (
            <>
              <Text style={styles.modal_title}>District - Vadodara</Text>
            </>
          ) : null}

          {filterType == 'City' ? (
            <>
              <Text style={styles.modal_title}>
                Constituency - Vadodara City
              </Text>
            </>
          ) : null}

          {filterType == 'Ward' ? (
            <>
              <Text style={styles.modal_title}>Ward / Booth No. - 1</Text>
            </>
          ) : null}

          <Text style={styles.modal_title}>Assign Incharge</Text>
          {console.log('value_incharge_modaldkffo', value_incharge_modal)}
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
              setvalue_incharge_modal(value);
              //   setvalue_district_modal('');
              //   setvalue_district_id_modal('');
              //   setvalue_cons_modal('');
              //   setvalue_cons_id_modal('');
              // setother_area_modal_visible(true);
            }}
          />

          {value_incharge_modal != '' ? (
            <TouchableOpacity
              onPress={() => {
                filterType == 'State'
                  ? [
                      EditIncharge({
                        editInchargeLocation: filterType,
                        incharge_name: value_incharge_modal,
                        incharge_id: value_incharge_id_modal,
                      }),
                      handleClosePopup(),
                    ]
                  : filterType == 'District'
                  ? EditIncharge({
                      editInchargeLocation: filterType,
                      incharge_name: value_incharge_modal,
                      incharge_id: value_incharge_id_modal,
                    })
                  : filterType == 'City'
                  ? EditIncharge({
                      editInchargeLocation: filterType,
                      incharge_name: value_incharge_modal,
                      incharge_id: value_incharge_id_modal,
                    })
                  : EditIncharge({
                      editInchargeLocation: filterType,
                      incharge_name: value_incharge_modal,
                      incharge_id: value_incharge_id_modal,
                    });
              }}
              activeOpacity={0.5}
              style={styles.editbtn}>
              <Text
                style={{
                  fontFamily: 'Segoe UI Bold',
                  color: '#fff',
                  fontSize: 12,
                  fontWeight: '600',
                }}>
                Edit
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
    color: '#666666',
    fontFamily: font_family.Inter_500.fontFamily,
    fontSize: 12,
    marginHorizontal: 20,
    marginTop: 5,
  },
  modal_value: {
    color: '#000',
    fontFamily: font_family.Inter_500.fontFamily,
    fontSize: 14,
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
  editbtn: {
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
  },
});
