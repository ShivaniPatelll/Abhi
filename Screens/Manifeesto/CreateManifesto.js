import React, {useCallback, useMemo, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {font_family} from '../../fonts/fonts';
// import {useProfileData} from '../../../Redux/slice/profileDetail';
// import {useNavigation} from '@react-navigation/native';
// import Header from '../../../Shared/Assets/Component/Header';
import RadioGroup, {RadioButtonProps} from 'react-native-radio-buttons-group';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import ImagePicker from 'react-native-image-crop-picker';
import FastImage from 'react-native-fast-image';
// import Api from '../../../Api/Api';
// import {err} from 'react-native-svg/lib/typescript/xml';

const CreateManifesto = () => {
  //   const profile = useProfileData();
  //   const navigation = useNavigation();

  const [selected_location, setselected_location] = useState('1');
  const [selected_locatione_err, setselected_location_err] = useState('');
  const radioButtonsSelectLocation = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'My State',
        value: 'My State',
        color: selected_location == 1 ? '#0068E5' : '#666666',
        size: 20,
        containerStyle: {
          alignItem: 'center',
        },
        labelStyle: {
          fontFamily: font_family.Inter_400.fontFamily,
          color: '#171717',
          fontSize: 13,
          right: 5,
        },
      },
      {
        id: '2',
        label: 'My District',
        value: 'My District',
        color: selected_location == 2 ? '#0068E5' : '#666666',
        size: 20,
        containerStyle: {
          alignItem: 'center',
          right: 10,
        },
        labelStyle: {
          fontFamily: font_family.Inter_400.fontFamily,
          color: '#171717',
          fontSize: 13,
          right: 5,
        },
      },
      {
        id: '3',
        label: 'My Constituency',
        value: 'My Constituency',
        color: selected_location == 3 ? '#0068E5' : '#666666',
        size: 20,
        containerStyle: {
          alignItem: 'center',
          right: 18,
        },
        labelStyle: {
          fontFamily: font_family.Inter_400.fontFamily,
          color: '#171717',
          fontSize: 13,
          right: 5,
        },
      },
    ],
    [selected_location],
  );

  const [manifestoTitle, setManifestoTitle] = useState('');
  const [manifestoTitleErr, setManifestoTitleErr] = useState('');
  const [selectedManifestoFiles, setSelectedManifestoFiles] = useState([]);
  const [select_file_visible, setselect_file_visible] = useState(false);
  const [selected_issue_images, setselected_issue_images] = useState([]);

  const [textInputCount, setTextInputCount] = useState(1);
  const [textInputValues, setTextInputValues] = useState({});
  const [manifestoValue, setManifestoValue] = useState(['']);
  const [manifestoErr, setManifestoErr] = useState('');

  const SelectFileModal = useCallback(props => {
    const {visible, onclose, selected_files} = props;

    const imgarry = [];
    // const openCamera = async () => {
    //   try {
    //     const result = await ImagePicker.openCamera({
    //       width: 300,
    //       height: 400,
    //       cropping: true,
    //     });
    //     imgarry.push(result);
    //   } catch (error) {
    //     console.log('Error opening camera:', error);
    //   } finally {
    //     setSelectedManifestoFiles(imgarry);

    //     toggleModal();
    //   }
    // };

    // const openGallery1 = async () => {
    //   console.log('jigar');
    //   const resuls = [];
    //   try {
    //     const result = await ImagePicker.openPicker({
    //       multiple: true,
    //       mediaType: 'any',
    //     }).then(async images => {
    //       console.log('====================================');
    //       console.log('images', images);
    //       console.log('====================================');

    //       for (const image of images) {
    //         if (image.mime == 'video/mp4') {
    //           resuls.push(image);
    //         }
    //         if (image.mime != 'video/mp4') {
    //           resuls.push(
    //             await ImagePicker.openCropper({
    //               path: image.path,
    //               // width: 1000,
    //               // height: 1000,
    //             }),
    //           );
    //         }
    //       }

    //       // for (const image of images) {
    //       //   resuls.push(
    //       //     await ImagePicker.openCropper({
    //       //       path: image.path,
    //       //       // width: 1000,
    //       //       // height: 1000,
    //       //     }),
    //       //   );
    //       // }

    //       return resuls;
    //     });
    //     for (let index = 0; index < resuls.length; index++) {
    //       const element = resuls[index];

    //       // Array.prototype.push.apply(imgarry, result);
    //       setSelectedManifestoFiles(oldArray => [...oldArray, element]);
    //     }
    //   } catch (error) {
    //     console.log('Error opening gallery:', error);
    //   } finally {
    //     console.log(
    //       'selectedManifestoFiles>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Gallery',
    //       imgarry,
    //     );
    //     toggleModal();
    //   }
    // };

    const toggleModal = () => {
      // setModalVisible(!isModalVisible);
      onclose(false);
    };

    return (
      <Modal animationType="fade" transparent={true} visible={visible}>
        <View style={styles.modalcontainer}>
          <View style={styles.contentcontainer}>
            <TouchableOpacity style={styles.closebtn} onPress={toggleModal}>
              <AntDesign name={'close'} style={{}} size={20} color={'#000'} />
            </TouchableOpacity>

            <View style={styles.selectptioncontainer}>
              <TouchableOpacity
                style={styles.optionbtn}
                //   onPress={openCamera}
              >
                <MaterialCommunityIcons
                  name={'camera'}
                  color={'#0068E5'}
                  size={23}
                />
                <Text style={styles.optiontext}>Camera</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.optionbtn}
                // onPress={() => openGallery1('kjkj')}
              >
                <MaterialCommunityIcons
                  name={'image-area'}
                  color={'#0068E5'}
                  size={23}
                />
                <Text style={styles.optiontext}>Gallery</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  }, []);

  function handleRemoveImg(item) {
    console.log('handleRemoveImg', item);

    const remove = selectedManifestoFiles.filter((i, index) => index != item);

    // setselected_issue_images(remove);
    setSelectedManifestoFiles(remove);
  }

  const addTextInput = () => {
    const newCount = textInputCount + 1;
    setTextInputCount(newCount);

    // setManifestoValue(prevInputValues => [...prevInputValues]);

    // Update the state with a new TextInput component
    setTextInputValues({
      ...textInputValues,
      [newCount]: '',
    });
  };

  const handleTextInputChange = (text, inputKey) => {
    console.log('handleTextInputChange', text);
    setManifestoErr('');
    // Update the state with the changed TextInput value
    setTextInputValues({
      ...textInputValues,
      [inputKey]: text,
    });
    // setManifestoValue([...manifestoValue, text]);

    setManifestoValue(prevInputValues => {
      const newInputValues = [...prevInputValues];
      newInputValues[inputKey] = text;
      return newInputValues;
    });
  };

  const handleValidatePublish = () => {
    let flagValidatePublish = true;

    console.log('manifestoValue', manifestoValue.length);

    if (manifestoTitle == '') {
      flagValidatePublish = false;
      setManifestoTitleErr('Please  enter manifest title');
    }

    if (manifestoValue.filter(i => i !== '').length < 1) {
      flagValidatePublish = false;
      setManifestoErr('At least one manifesto is required for publishing');
    }

    if (flagValidatePublish == true) {
      console.log('handleValidatePublish', textInputValues);
      console.log(
        'Success',
        manifestoValue.filter(i => i !== ''),
      );

      handlePublishManifesto();
    } else {
      console.log('Failed');
    }
  };

  const handlePublishManifesto = () => {
    // var formData = {
    //   user_token: profile.u_token,
    //   state_id: `${profile.u_state_id}`,
    //   mf_point: manifestoValue.filter(i => i !== ''),
    //   district_id:
    //     selected_location == 2 || selected_location == 3
    //       ? `${profile.u_district_id}`
    //       : '',
    //   city_id: selected_location == 3 ? `${profile.u_city_id}` : '',
    //   title: manifestoTitle,
    // };

    // var formData = {
    //   user_token: profile.u_token,
    //   state_id: selected_location == 1 ? `${profile.u_state_id}` : '',
    //   mf_point: manifestoValue.filter(i => i !== ''),
    //   district_id: selected_location == 2 ? `${profile.u_district_id}` : '',
    //   city_id: selected_location == 3 ? `${profile.u_city_id}` : '',
    //   title: manifestoTitle,
    // };

    // navigation.navigate('Leaderdashboard',{user_token:login_user_token})
    // setpress_post(false);
    // setloading(false);

    console.log('====================================');
    // console.log('handlePublishManifesto formData', formData);
    console.log('====================================');

    // try {
    //   Api.CreateManifesto(formData).then(res => {
    //     console.log('CreateManifesto', res.data);
    //     if (res.data.status == 1) {
    //       if (selectedManifestoFiles.length != 0) {
    //         console.log('data', selectedManifestoFiles);

    //         // setpress_post(true);
    //         // setloading(true);
    //         // createactivitytimagesAPI({
    //         //   event_id: res?.data?.event_id,
    //         //   user_token: profile.u_token,
    //         handlePublishManifestoFiles(res?.data?.manifestoId);
    //         // handlePublishManifestoFiles();
    //         // });
    //       } else {
    //         // setevent_title('');
    //         // setevent_desc('');
    //         // setvalue_state_id('');
    //         // setvalue_state('');
    //         // setvalue_district_id();
    //         // setvalue_district('');
    //         // setvalue_ward_id('');
    //         // setvalue_ward('');
    //         // setselected_issue_images([]);
    //         // ToastAndroid.show(res.data.message, 3000);
    //         // navigation.navigate('Leaderdashboard', {
    //         //   user_token: profile.u_token,
    //         // });
    //       }
    //     } else {
    //       console.log('Error:', res.data.message);
    //     }
    //   });
    // } catch (error) {
    //   console.log('====================================');
    //   console.log('Api.CreateManifesto', error);
    //   console.log('====================================');
    // }

    // console.log('handlePublishManifesto', formData);
  };

  const handlePublishManifestoFiles = manifesto_id => {
    var formData = new FormData();
    formData.append('manifesto_id', manifesto_id);
    for (let i = 0; i < selectedManifestoFiles.length; i++) {
      formData.append('manifesto_images', {
        name: selectedManifestoFiles[i].path.substr(75),
        type: selectedManifestoFiles[i].mime,
        size: selectedManifestoFiles[i].size.toString(),
        uri:
          Platform.OS === 'android'
            ? selectedManifestoFiles[i].path
            : selectedManifestoFiles[i].path.replace('file://', ''),
      });
    }

    // try {
    //   Api.UploadManifestoImages(formData).then(res => {
    //     if (res.data.status == 1) {
    //       // setpress_post(false);
    //       // setloading(false);
    //       // ToastAndroid.show(res.data.message, 2000);
    //       // fetchActivityData({
    //       //   state_id: profile.u_state_id,
    //       //   district_id: profile.u_district_id,
    //       //   city_id: profile.u_city_id,
    //       // });
    //       //   navigation.navigate('Leaderdashboard', {
    //       //     user_token: profile.u_token,
    //       //   });
    //     } else {
    //       // setpress_post(false);
    //       // ToastAndroid.show(res.data.message, 2000);
    //       // setloading(false);
    //     }
    //   });
    // } catch (error) {
    //   console.log('createPostimagesAPI Error', error);
    //   // setpress_post(false);
    //   // setloading(false);
    //   // ToastAndroid.show('Something went wrong..', 2000);
    // }

    console.log('handlePublishManifestoFiles', formData);
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        {/* <Header title={'Create Manifesto'} /> */}

        <SelectFileModal
          visible={select_file_visible}
          onclose={state => {
            setselect_file_visible(state);
          }}
          selected_files={value => {
            console.log('selected_files>>>>>>>', value);
            // setselected_issue_images(value);
          }}
        />
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS == 'ios' ? 40 : 500}
          enabled={Platform.OS === 'ios' ? true : true}>
          <ScrollView
            // automaticallyAdjustKeyboardInsets
            showsVerticalScrollIndicator={false}
            keyboardDismissMode="interactive"
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
              flexGrow: 1,
              paddingHorizontal: '5%',
              paddingBottom: '15%',
            }}>
            {/* Select Location */}
            <View style={{marginTop: 4}}>
              <Text style={[styles.title_font, {}]}>Select Location</Text>

              <RadioGroup
                containerStyle={[styles.radiocontainer, {right: 10}]}
                radioButtons={radioButtonsSelectLocation}
                onPress={id => [
                  setselected_location(id),
                  setselected_location_err(''),
                ]}
                selectedId={selected_location}
                layout="row"
              />
            </View>

            {/* Activity Title */}
            <View
              // onTouchEnd={() => [
              //   setopen_state(false),
              //   setopen_district(false),
              //   setopen_ward(false),
              // ]}
              style={{marginTop: 4}}>
              <Text style={styles.title_font}>Title*</Text>
              <View style={styles.componentview}>
                <TextInput
                  placeholder="Enter your title"
                  placeholderTextColor={'#9D9D9D'}
                  value={manifestoTitle}
                  maxLength={30}
                  keyboardType="ascii-capable"
                  onChangeText={text => [
                    setManifestoTitle(text),
                    setManifestoTitleErr(''),
                  ]}
                  style={styles.titleinput}
                />
              </View>
            </View>
            {manifestoTitleErr != '' ? (
              <Text style={styles.errortext}>{manifestoTitleErr}</Text>
            ) : null}

            {/* Activity Images */}
            <View
              // onTouchEnd={() => [
              //   setopen_state(false),
              //   setopen_district(false),
              //   setopen_ward(false),
              // ]}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // backgroundColor: 'pink',
                marginTop: '6%',
              }}>
              <TouchableOpacity
                onPress={() => setselect_file_visible(true)}
                activeOpacity={0.5}
                style={styles.imgselectview}>
                <Image
                  style={{height: 25, width: 25}}
                  source={require('../../Images/title.png')}
                />

                <Text style={styles.imagetext}>Upload Image or File</Text>
              </TouchableOpacity>

              {selected_issue_images.length != 0 ? (
                <Text style={{alignSelf: 'center'}}>
                  {selected_issue_images.length} Files Selected
                </Text>
              ) : null}
            </View>
            {selectedManifestoFiles != '' ? (
              <ScrollView horizontal contentContainerStyle={{marginTop: '2%'}}>
                {selectedManifestoFiles.map((i, index) => {
                  return (
                    <TouchableOpacity
                      onPress={() => handleRemoveImg(index)}
                      style={{
                        alignSelf: 'flex-start',
                      }}>
                      <ImageBackground
                        resizeMode="stretch"
                        source={{
                          uri: i.path,
                        }}
                        style={{height: 50, width: 50, marginLeft: 10}}>
                        <Ionicons name={'close-circle-sharp'} color={'#000'} />
                      </ImageBackground>
                    </TouchableOpacity>
                  );
                })}
                {/* <Text>{selected_issue_images}</Text> */}
              </ScrollView>
            ) : null}

            {/* Manifesto */}
            <Text style={[styles.title_font, {marginTop: '4%'}]}>
              Manifesto*
            </Text>
            {Array.from({length: textInputCount}, (_, index) => (
              <View style={styles.componentview}>
                <TextInput
                  key={index + 1}
                  placeholderTextColor={'#9D9D9D'}
                  style={styles.titleinput}
                  placeholder={`Enter Manifesto ${index + 1}`}
                  value={textInputValues[index + 1]}
                  onChangeText={text => handleTextInputChange(text, index + 1)}
                />
              </View>
            ))}
            {manifestoErr != '' ? (
              <Text style={styles.errortext}>{manifestoErr}</Text>
            ) : null}
            {/* Add Manifesto Button*/}
            <View
              style={{
                flexDirection: 'row',
                marginTop: '5%',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => addTextInput()}
                // disabled={profile.u_state_id == 0 ? true : false}
                style={styles.addbtn}>
                <Entypo name={'plus'} size={18} color={'#fff'} style={{}} />
              </TouchableOpacity>

              <Text
                onPress={() => console.log('jigar')}
                style={[styles.title_font, {paddingLeft: 8}]}>
                Add
              </Text>
            </View>

            {/* Publish Button*/}
            <TouchableOpacity
              activeOpacity={0.5}
              // disabled={press_post}
              onPress={() => handleValidatePublish()}
              style={[styles.postbtn, {}]}>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: font_family.Inter_600.fontFamily,
                }}>
                Publish
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
  // return (
  //   <SafeAreaView style={styles.container}>
  //     <Header title={'Create Manifesto'} />

  //     <SelectFileModal
  //       visible={select_file_visible}
  //       onclose={state => {
  //         setselect_file_visible(state);
  //       }}
  //       selected_files={value => {
  //         console.log('selected_files>>>>>>>', value);
  //         // setselected_issue_images(value);
  //       }}
  //     />
  //     <KeyboardAvoidingView
  //       behavior={Platform.OS == 'ios' ? 'padding' : 'padding'}
  //       keyboardVerticalOffset={Platform.OS == 'ios' ? 10 : 10}
  //       // enabled={Platform.OS === 'ios' ? true : false}
  //     >
  //       <ScrollView
  //         keyboardDismissMode="on-drag"
  //         contentContainerStyle={styles.scrollviewcontainer}
  //         nestedScrollEnabled={true}>
  //         {/* Select Location */}
  //         <View style={{marginTop: 4}}>
  //           <Text style={[styles.title_font, {}]}>Select Location</Text>

  //           <RadioGroup
  //             containerStyle={[styles.radiocontainer, {right: 10}]}
  //             radioButtons={radioButtonsSelectLocation}
  //             onPress={id => [
  //               setselected_location(id),
  //               setselected_location_err(''),
  //             ]}
  //             selectedId={selected_location}
  //             layout="row"
  //           />
  //         </View>

  //         {/* Activity Title */}

  //         <View
  //           // onTouchEnd={() => [
  //           //   setopen_state(false),
  //           //   setopen_district(false),
  //           //   setopen_ward(false),
  //           // ]}
  //           style={{marginTop: 4}}>
  //           <Text style={styles.title_font}>Title*</Text>
  //           <View style={styles.componentview}>
  //             <TextInput
  //               placeholder="Enter your title"
  //               placeholderTextColor={'#9D9D9D'}
  //               value={manifestoTitle}
  //               keyboardType="ascii-capable"
  //               onChangeText={text => [
  //                 setManifestoTitle(text),
  //                 setManifestoTitleErr(''),
  //               ]}
  //               style={styles.titleinput}
  //             />
  //           </View>
  //         </View>

  //         {manifestoTitleErr != '' ? (
  //           <Text style={styles.errortext}>{manifestoTitleErr}</Text>
  //         ) : null}

  //         {/* Activity Images */}

  //         <View
  //           // onTouchEnd={() => [
  //           //   setopen_state(false),
  //           //   setopen_district(false),
  //           //   setopen_ward(false),
  //           // ]}
  //           style={{
  //             flexDirection: 'row',
  //             alignItems: 'center',
  //             // backgroundColor: 'pink',
  //             marginTop: '6%',
  //           }}>
  //           <TouchableOpacity
  //             onPress={() => setselect_file_visible(true)}
  //             activeOpacity={0.5}
  //             style={styles.imgselectview}>
  //             <Image
  //               style={{height: 25, width: 25}}
  //               source={require('../../../Shared/Assets/Images/create_post_img_upload.png')}
  //             />

  //             <Text style={styles.imagetext}>Upload Image or File</Text>
  //           </TouchableOpacity>

  //           {selected_issue_images.length != 0 ? (
  //             <Text style={{alignSelf: 'center'}}>
  //               {selected_issue_images.length} Files Selected
  //             </Text>
  //           ) : null}
  //         </View>

  //         {selectedManifestoFiles != '' ? (
  //           <ScrollView horizontal contentContainerStyle={{marginTop: '2%'}}>
  //             {selectedManifestoFiles.map((i, index) => {
  //               return (
  //                 <TouchableOpacity
  //                   onPress={() => handleRemoveImg(index)}
  //                   style={{
  //                     alignSelf: 'flex-start',
  //                   }}>
  //                   <ImageBackground
  //                     resizeMode="stretch"
  //                     source={{
  //                       uri: i.path,
  //                     }}
  //                     style={{height: 50, width: 50, marginLeft: 10}}>
  //                     <Ionicons name={'close-circle-sharp'} color={'#000'} />
  //                   </ImageBackground>
  //                 </TouchableOpacity>
  //               );
  //             })}
  //             {/* <Text>{selected_issue_images}</Text> */}
  //           </ScrollView>
  //         ) : null}

  //         {/* Manifesto */}

  //         <Text style={[styles.title_font, {marginTop: '4%'}]}>Manifesto*</Text>

  //         {Array.from({length: textInputCount}, (_, index) => (
  //           <View style={styles.componentview}>
  //             <TextInput
  //               key={index + 1}
  //               style={styles.titleinput}
  //               placeholder={`Enter Manifesto ${index + 1}`}
  //               value={textInputValues[index + 1]}
  //               onChangeText={text =>
  //                 handleTextInputChange(text, index == 1 ? 0 : index + 1)
  //               }
  //             />
  //           </View>
  //         ))}

  //         {/* Add Manifesto Button*/}

  //         <View
  //           style={{
  //             flexDirection: 'row',
  //             marginTop: '5%',
  //             alignItems: 'center',
  //           }}>
  //           <TouchableOpacity
  //             onPress={() => addTextInput()}
  //             disabled={profile.u_state_id == 0 ? true : false}
  //             style={styles.addbtn}>
  //             <Entypo name={'plus'} size={18} color={'#fff'} style={{}} />
  //           </TouchableOpacity>

  //           <Text
  //             onPress={() => console.log('jigar')}
  //             style={[styles.title_font, {paddingLeft: 8}]}>
  //             Add
  //           </Text>
  //         </View>

  //         {/* Publish Button*/}

  //         <TouchableOpacity
  //           activeOpacity={0.5}
  //           // disabled={press_post}
  //           onPress={() => handleValidatePublish()}
  //           style={[styles.postbtn, {}]}>
  //           <Text
  //             style={{
  //               color: '#fff',
  //               fontFamily: font_family.Inter_600.fontFamily,
  //             }}>
  //             Publish
  //           </Text>
  //         </TouchableOpacity>
  //       </ScrollView>
  //     </KeyboardAvoidingView>
  //   </SafeAreaView>
  // );
};
export default CreateManifesto;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#fff',
    top: Platform.OS == 'ios' ? -5 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollviewcontainer: {
    flexGrow: 1,
    paddingBottom: 64,
    marginHorizontal: '5%',
  },
  radiocontainer: {
    paddingVertical: 8,
  },
  title_font: {
    fontFamily: font_family.Inter_400.fontFamily,
    color: '#171717',
    fontSize: 13,
  },
  componentview: {
    marginTop: '4%',
    elevation: 3,
    shadowColor: '#777',
    borderColor: 'rgba(215, 215, 215, 0.41)',
    borderWidth: 0.5,
    borderRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {height: 0, width: 1},
  },
  titleinput: {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxHeight: 40,
    textAlign: 'left',
    color: '#171717',
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    paddingHorizontal: 8,
    shadowColor: '#777',
    paddingVertical: Platform.OS == 'ios' ? 12 : 8,

    // shadowOpacity: 0.3,
    // shadowOffset: {height: 0, width: 1},
  },
  imgselectview: {
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    // marginHorizontal: '5%',
    backgroundColor: 'rgba(157, 157, 157, 0.14)',
    padding: '3%',
    alignSelf: 'flex-start',
  },
  imagetext: {
    paddingLeft: '3%',
    color: '#171717',
    fontFamily: font_family.Inter_500.fontFamily,
    fontSize: 12,
  },
  modalcontainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentcontainer: {
    backgroundColor: '#fff',
    height: Dimensions.get('screen').height / 8,
    width: Dimensions.get('screen').width / 1.5,
    borderRadius: 5,
    padding: '1%',
  },
  closebtn: {
    alignSelf: 'flex-end',
    padding: '1%',
  },
  selectptioncontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1,
  },
  optionbtn: {
    padding: '3%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    elevation: 4,
    shadowColor: '#888',
    backgroundColor: '#fff',
    paddingHorizontal: 8,
    borderRadius: 5,
    borderColor: 'rgba(0,0,0,0.1)',
  },
  optiontext: {
    color: '#555',
    fontSize: 13,
    fontFamily: font_family.Inter_500.fontFamily,
    paddingLeft: '2%',
  },
  addbtn: {
    backgroundColor: '#0068E5',
    borderRadius: 50,
    padding: 2,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  postbtn: {
    zIndex: -1,
    elevation: 4,
    shadowColor: '#777',
    backgroundColor: '#0068E5',
    alignSelf: 'center',
    paddingHorizontal: '8%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2%',
    borderRadius: 5,
    marginTop: '5%',
    shadowOpacity: 1,
    shadowOffset: {height: 0, width: 1},
  },
  errortext: {
    color: 'red',
    marginHorizontal: '1%',
    marginTop: '1%',
  },
});
