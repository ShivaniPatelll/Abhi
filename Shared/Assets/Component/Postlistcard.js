/* eslint-disable react-native/no-inline-styles */
import React, {useState, useCallback, memo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Image,
  ToastAndroid,
  ImageBackground,
  Pressable,
  Platform,
  Modal,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReadMore from '@fawazahmed/react-native-read-more';
import moment from 'moment';
import ImageView from 'react-native-image-viewing';
import Api from '../../../Api/Api';
import {font_family} from '../CSS/fonts';
import {useNavigation} from '@react-navigation/native';
import {PostImages} from './PostImages';
import {VideoModal} from './VideoModal';
import {useProfileData} from '../../../Redux/slice/profileDetail';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useDispatch} from 'react-redux';
import {BlockUser, HidePost, RemovePost} from '../../../Redux/slice/post';
import {
  BlockHelpListUser,
  HideHelpPost,
  // RemovePost,
} from '../../../Redux/slice/helprequestpost';
import {BlurView} from '@react-native-community/blur';
import {
  BlockAcceptedListUser,
  HideAcceptedPost,
} from '../../../Redux/slice/acceptedpost';
import {
  BlockResolvedListUser,
  HideResolvedPost,
} from '../../../Redux/slice/resolvedpost';
import {
  BlockSavedListUser,
  HideSavedPost,
} from '../../../Redux/slice/savedpost';
import {RemoveMyPost} from '../../../Redux/slice/myissuepost';
const Postlistcard = memo(props => {
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const profile = useProfileData();
  const dispatch = useDispatch();

  const {
    data,
    login_user_id,
    u_type,
    route,
    u_detail,
    requestAccepted,
    onEditSuccessPost,
    index,
    updatesavepost,
    update_option_modal_visible,

    optionmenustate,
    handleoptionmenu,

    initialStatus,
    onStatusChange,
    resetChildStatus,

    onRemove,
    onReport,
    isBlurred,
  } = props;

  console.log('Postlistcard Data', data);

  const [visible, setIsVisible] = useState(false);
  const [images_pr, setimages_pr] = useState([]);
  const [images_index, setimages_index] = useState('');
  const [option_modal_visible, setoption_modal_visible] = useState(false);
  const [video_modal_visible, setvideo_modal_visible] = useState(false);

  const [index_pi_id, setindex_pi_id] = useState('');
  // const [suffered_status, setsuffered_status] = useState(false);

  const [original_issue_support_no, setoriginal_issue_support_no] = useState(
    data.issue_support_no,
  );

  const [updated_issue_support_status, setupdated_issue_support_status] =
    useState(data?.issue_support.includes(profile.u_id) == true ? true : false);

  const [support_status, setsupport_status] = useState(
    data?.issue_support.includes(profile.u_id) == true ? 1 : 0,
  );
  const [suffered_status, setsuffered_status] = useState(
    data?.issue_suffred.includes(profile.u_id) == true ? 1 : 0,
  );

  const [original_issue_suffered_no, setoriginal_issue_suffered_no] = useState(
    data.issue_suffered_no,
  );
  const [updated_issue_suffered_status, setupdated_issue_suffered_status] =
    useState(data?.issue_suffred.includes(profile.u_id) == true ? true : false);

  const [Loader, setLoader] = useState(false);

  const parts = data?.pi_issue_image.split('.');
  const extension = parts[parts.length - 1];
  console.log('cvbcbcbcbc', index);

  const startDate = moment(data?.pi_updated_at);
  const endDate = moment(new Date());
  const diff = startDate.diff(endDate, 'days').toString();

  const [tempKey, setTempKey] = useState(0);

  const [status, setStatus] = useState(initialStatus);

  const [original_support_num, setoriginal_support_num] = useState(
    data?.issue_support_no,
  );

  // const [original_support_status, setoriginal_support_status] = useState(
  //   data?.support_status,
  // );

  const [original_support_status, setoriginal_support_status] = useState(
    data?.issue_support.includes(profile.u_id) == true ? 1 : 0,
  );

  const [updated_support_num, setupdated_support_num] = useState();

  const [original_suffered_num, setoriginal_suffered_num] = useState(
    data?.issue_suffered_no,
  );

  // const [original_suffered_status, setoriginal_suffered_status] = useState(
  //   data?.suffered_status,
  // );

  const [original_suffered_status, setoriginal_suffered_status] = useState(
    data?.issue_suffred.includes(profile.u_id) == true ? 1 : 0,
  );

  const [updated_suffered_num, setupdated_suffered_num] = useState();

  const [original_save_status, setoriginal_save_status] = useState(
    // data.save_issue_status,
    data.pi_save_ids.includes(profile.u_id) ? 1 : 0,
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [modalcontent, setmodalcontent] = useState('');
  const hidePost = [];

  var imagearray = [];

  function img({item, index}) {
    console.log('jigar_', index);
    setIsVisible(true);
    setimages_index(index);

    for (let index = 0; index < item?.length; index++) {
      const element = item[index];
      imagearray.push({
        uri: element,
      });
    }
    setimages_pr(imagearray);
    return imagearray;
  }

  const handle_support_btn = useCallback(async item => {
    const {pi_idasd, updated_issue_support_no_temp} = item;

    console.log('original_issue_support_no', original_issue_support_no);
    console.log('updated_issue_support_no_temp', updated_issue_support_no_temp);

    var formData = {
      post_id: pi_idasd,
      user_token: profile.u_token,
    };
    // setsupport_status(!support_status);
    setindex_pi_id(item.pi_idasd);
    let d = original_issue_support_no;
    try {
      Api.SupportIssue(formData).then(res => {
        console.log('res>>', res.data);

        if (res?.data?.status == 1) {
          console.log('SupportIssue', res.data);
          setoriginal_support_status(res.data.support_status);
          if (res.data.support_status == 0) {
            setupdated_support_num(original_support_num - 1);
          }

          if (res.data.support_status == 1) {
            setupdated_support_num(original_support_num + 1);
          }

          if (updated_issue_support_no_temp == false) {
            setupdated_issue_support_status(true);
            setoriginal_issue_support_no(original_issue_support_no + 1);
          } else if (updated_issue_support_no_temp == true) {
            setoriginal_issue_support_no(d - 1);
            setupdated_issue_support_status(false);
          }

          // setsupport_status_id(res?.data?.support_status);
          // setupdated_issue_support_status(res?.data?.support_status);
          // console.log('original_issue_support_no', original_issue_support_no);
          // console.log(
          //   'original_issue_support_no',
          //   original_issue_support_no - 1,
          // );
          // console.log(
          //   'original_issue_support_no',
          //   original_issue_support_no + 1,
          // );

          // setoriginal_issue_support_no(original_issue_support_no + 1);

          // if (original_issue_support_no == data?.issue_support_no) {
          //   console.log('True>>>>>>>>>>>>>>>');
          //   setoriginal_issue_support_no(original_issue_support_no + 1);
          //   // setupdated_issue_support_status(original_issue_support_no);
          //   setsupport_status(false);
          // } else {
          //   console.log('False??????????????????');
          //   setoriginal_issue_support_no(original_issue_support_no + 1);
          //   // setupdated_issue_support_status(original_issue_support_no);
          //   setsupport_status(true);
          // }
        }
      });
    } catch (error) {}
  }, []);

  const handle_suffered_btn = useCallback(async item => {
    console.log(item);

    const {pi_idasd, suffered_status, updated_issue_suffered_no_temp} = item;

    setindex_pi_id(item.pi_idasd);
    var formData = {
      post_id: pi_idasd,
      user_token: profile.u_token,
    };

    try {
      Api.SufferedIssue(formData).then(res => {
        console.log('res>>', res.data);

        if (res?.data?.status == 1) {
          console.log('SufferedIssue', res.data);

          setoriginal_suffered_status(res.data.suffered_status);
          if (res.data.suffered_status == 0) {
            setupdated_suffered_num(original_suffered_num - 1);
          }

          if (res.data.suffered_status == 1) {
            setupdated_suffered_num(original_suffered_num + 1);
          }

          if (updated_issue_suffered_no_temp == false) {
            setupdated_issue_suffered_status(true);
            setoriginal_issue_suffered_no(original_issue_suffered_no + 1);
          } else {
            setoriginal_issue_suffered_no(original_issue_suffered_no);
            setupdated_issue_suffered_status(false);
          }

          // navigation.navigate('Home');
          // getSearchPost(
          //   profile.u_token,
          //   profile.u_state_id,
          //   profile.u_district_id,
          //   profile.u_city_id,
          // );
        } else {
          setsuffered_status(!suffered_status);
        }
      });
    } catch (error) {}
  }, []);

  const handle_remove_btn = useCallback(item => {
    console.log('handle_remove_btn', item);
    try {
      setLoader(true);
      var formData = {
        post_id: item,
      };
      Api.RemovePost(formData).then(res => {
        if (res.data.status == 1) {
          setLoader(false);
          // removedpost('success');
          dispatch(RemovePost({id: item}));
          dispatch(RemoveMyPost({id: item}));

          ToastAndroid.show(res.data.message, 3000);
          onRemove(item);
        } else {
          ToastAndroid.show(res.data.message, 3000);
          setLoader(false);
        }
      });
    } catch (error) {
      ToastAndroid.show('Something Went Wrong...', 3000);
      setLoader(false);
    } finally {
      setLoader(false);
    }
  }, []);

  const onOpenVideoModal = props => {
    setTempKey(props);
    console.log('source index:', props);
    setvideo_modal_visible(!video_modal_visible);
  };

  const oncloseVideoModal = () => {
    // setTempKey(tempKey + 1);
    console.log('data');
    setvideo_modal_visible(!video_modal_visible);
  };

  const handle_save_post = useCallback(async item => {
    console.log(item);

    var formData = {
      user_token: profile.u_token,
      post_id: item,
      user_id: profile.u_id.toString(),
    };

    try {
      Api.SavePost(formData).then(res => {
        console.log('res', res.data);
        if (res.data.status == 1) {
          // alert('Your Post Saved Successfully');
          setoriginal_save_status(res.data.save_issue_status);

          ToastAndroid.show(res.data.message, 3000);

          updatesavepost(item);
        }
      });
    } catch (error) {
      console.log('Save Post Api Error', error);
    }
  }, []);

  async function handle_accept_issue(item) {
    console.log('item', item);

    var formData = {
      post_id: item,
      user_token: login_user_id,
    };

    try {
      Api.HelpRequestAccept(formData).then(res => {
        if (res?.data?.status == 1) {
          console.log('res HelpRequestAccept', res?.data?.data);
          // getPostData(
          //   (user_token = login_user_id),
          //   (state_id = value_state_id),
          //   (district_id = value_district_id),
          //   (city_id = value_cons_id),
          // );
          requestAccepted('Issue Accepted successfully');
        }
      });
    } catch (error) {}
  }

  const getUserDetail = item => {
    console.log('getUserDetail', item.leader_id);
    console.log('getUserDetail', item.user_type);
    navigation.navigate('UserDetail', {
      leader_id: item.leader_id,
      leader_type: item.user_type,
    });
  };

  const handleHidePost = item => {
    console.log('handleHidePost', item);
    hidePost.push(item.post_id);

    var formData = {
      user_token: profile.u_token,
      post_id: item.post_id.toString(),
    };
    console.log('handleHidePost formData', formData);

    try {
      Api.HidePost(formData).then(res => {
        if (res.data.status == 1) {
          dispatch(HidePost({id: [item.post_id]}));
          dispatch(HideHelpPost({id: [item.post_id]}));
          dispatch(HideAcceptedPost({id: [item.post_id]}));
          dispatch(HideResolvedPost({id: [item.post_id]}));
          dispatch(HideSavedPost({id: [item.post_id]}));

          ToastAndroid.show(res.data.message, 2000);
        } else {
          ToastAndroid.show(res.data.message, 2000);
        }
      });
    } catch (error) {
      ToastAndroid.show('Something went wrong..', 2000);
    }
  };

  const handleBlockUser = item => {
    console.log('handleBlockUser', item);
    var formData = {
      user_token: profile.u_token,
      blocked_user_token: item.block_u_token,
    };

    console.log('handleBlockUser formData', formData);

    try {
      Api.BlockUser(formData).then(res => {
        if (res.data.status == 1) {
          dispatch(BlockUser({id: [item.block_u_token]}));
          dispatch(BlockHelpListUser({id: [item.block_u_token]}));
          dispatch(BlockAcceptedListUser({id: [item.block_u_token]}));
          dispatch(BlockResolvedListUser({id: [item.block_u_token]}));
          dispatch(BlockSavedListUser({id: [item.block_u_token]}));
          ToastAndroid.show(res.data.message, 2000);
        } else {
          ToastAndroid.show(res.data.message, 2000);
        }
      });
    } catch (error) {
      ToastAndroid.show('Something went wrong..', 2000);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const openModal = item => {
    console.log('====================================');
    console.log('openModal', item);
    console.log('====================================');
    setModalVisible(true);
    setmodalcontent(item);
  };

  const PopupModal = ({visible, closeModal, content}) => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.messageText}>
              {content == 'hide'
                ? 'Are you sure you want to hide this post?'
                : 'Are you sure you want to block this user?'}
            </Text>

            {/* <Text style={styles.messageText_detail}>
              
            </Text> */}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                paddingTop: 12,
              }}>
              <TouchableOpacity
                onPress={() => [setModalVisible(false)]}
                style={{
                  flex: 0.3,
                  backgroundColor: '#fff',
                  padding: 2,
                  borderWidth: 1,
                  borderColor: '#00000033',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 2,
                  paddingVertical: 4,
                }}>
                <Text
                  style={{
                    color: '#757575',
                    fontSize: 14,
                    fontFamily: font_family.Calibri.fontFamily,
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => [
                  setModalVisible(false),
                  content == 'hide'
                    ? handleHidePost({post_id: data?.pi_id})
                    : handleBlockUser({block_u_token: data.pi_upload_by}),
                ]}
                style={styles.remove_btn_modal}>
                <Text
                  style={{
                    color: '#fff',
                    fontFamily: font_family.Calibri.fontFamily,
                    fontSize: 14,
                  }}>
                  {content == 'hide' ? 'Hide' : 'Block'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
  };

  // return (
  //   <View
  //     style={[
  //       styles.container,
  //       {
  //         backgroundColor: '#fff',
  //       },
  //     ]}>
  //     <PopupModal
  //       visible={modalVisible}
  //       closeModal={closeModal}
  //       content={modalcontent}
  //     />

  //     <View
  //       style={{
  //         flexDirection: 'row',
  //         marginHorizontal: '2%',
  //         justifyContent: 'space-between',
  //         marginTop: '2%',
  //       }}>
  //       <TouchableOpacity
  //         onPress={() =>
  //           getUserDetail({
  //             leader_id: data?.pi_upload_by,
  //             user_type: data.posted_by_user_type,
  //           })
  //         }
  //         style={{flexDirection: 'row'}}>
  //         <View
  //           style={{
  //             padding: '0.5%',
  //             borderWidth: 1,
  //             borderColor: '#0068E5',
  //             borderRadius: 50,
  //             justifyContent: 'center',
  //             alignItems: 'center',
  //           }}>
  //           <Image
  //             borderRadius={50}
  //             style={{height: 35, width: 35}}
  //             // source={{ uri: posted_profile_pic.endsWith('/') == false ?
  //             // posted_profile_pic :
  //             // 'https://appapi.abhinavbharath.in/upload/default/activity/event_type/profile_icon.png' }}
  //             // source={{ uri: 'https://appapi.abhinavbharath.in/upload/default/activity/event_type/profile_icon.png' }}
  //             source={{
  //               uri:
  //                 data?.full_path_posted_profile_pic.endsWith('/') == false
  //                   ? data?.full_path_posted_profile_pic
  //                   : 'https://appapi.abhinavbharath.in/upload/default/activity/event_type/profile_icon.png',
  //             }}
  //           />
  //         </View>

  //         <View style={{marginLeft: '5%'}}>
  //           <Text style={styles.postednamefont}>
  //             {data?.posted_by_full_name}
  //           </Text>

  //           <View style={{flexDirection: 'row'}}>
  //             <Text style={styles.postedtypefont}>
  //               {diff == 0 ? 'Today' : diff.slice(1) + ' d'}
  //             </Text>

  //             <Entypo name={'dot-single'} size={15} color={'#666'} />

  //             <Text style={styles.postedtypefont}>{data?.post_city_title}</Text>

  //             <Entypo name={'dot-single'} size={15} color={'#666'} />

  //             <Text style={[styles.postedtypefont, {color: 'green'}]}>
  //               {data?.issue_category_name}
  //             </Text>
  //           </View>
  //         </View>
  //       </TouchableOpacity>

  //       {/* Post Options Modal View */}

  //       <Menu>
  //         <MenuTrigger>
  //           <MaterialCommunityIcons
  //             name={'dots-vertical'}
  //             size={15}
  //             color={'#000'}
  //           />
  //         </MenuTrigger>
  //         <MenuOptions
  //           customStyles={{
  //             optionsContainer: {marginTop: 22},
  //           }}>
  //           {profile?.u_token != data?.pi_upload_by ? (
  //             <View
  //               style={{
  //                 shadowOpacity: 0.2,
  //                 shadowOffset: {height: 0, width: 1},
  //                 position: 'absolute',
  //                 paddingHorizontal: 10,
  //                 justifyContent: 'center',
  //                 elevation: 4,
  //                 borderRadius: 5,
  //                 right: '4%',
  //                 top: -5,
  //                 backgroundColor: '#fff',
  //                 alignSelf: 'flex-end',
  //               }}>
  //               <MenuOption
  //                 onSelect={() => handle_save_post(data?.pi_id)}
  //                 style={{flexDirection: 'row', alignItems: 'center'}}>
  //                 <Image
  //                   style={{height: 15, width: 15}}
  //                   source={require('../../Assets/Images/save.png')}
  //                 />

  //                 {original_save_status == 1 && (
  //                   <Text
  //                     style={{
  //                       color: '#000',
  //                       marginLeft: 5,
  //                     }}>
  //                     Unsave
  //                   </Text>
  //                 )}
  //                 {original_save_status == 0 && (
  //                   <Text
  //                     style={{
  //                       color: '#000',
  //                       marginLeft: 5,
  //                     }}>
  //                     Save
  //                   </Text>
  //                 )}
  //               </MenuOption>

  //               <MenuOption
  //                 onSelect={() => openModal('hide')}
  //                 style={{
  //                   flexDirection: 'row',
  //                   alignItems: 'center',
  //                 }}>
  //                 <Image
  //                   style={{height: 15, width: 15}}
  //                   source={require('../../Assets/Images/hidepost.png')}
  //                 />

  //                 <Text
  //                   style={{
  //                     color: '#000',
  //                     marginLeft: 5,
  //                   }}>
  //                   Hide
  //                 </Text>
  //               </MenuOption>

  //               <MenuOption
  //                 onSelect={() =>
  //                   // handleBlockUser({block_u_token: data.pi_upload_by})
  //                   openModal('block')
  //                 }
  //                 style={{flexDirection: 'row', alignItems: 'center'}}>
  //                 <Image
  //                   style={{height: 15, width: 15}}
  //                   source={require('../../Assets/Images/blockuser.png')}
  //                 />

  //                 <Text
  //                   style={{
  //                     color: '#000',
  //                     marginLeft: 5,
  //                   }}>
  //                   Block User
  //                 </Text>
  //               </MenuOption>

  //               <MenuOption
  //                 onSelect={() =>
  //                   onReport({
  //                     post_id: data.pi_id,
  //                     user_token: data.pi_upload_by,
  //                   })
  //                 }
  //                 style={{flexDirection: 'row', alignItems: 'center'}}>
  //                 {/* <Image
  //                   style={{height: 15, width: 15}}
  //                   source={require('../../Assets/Images/save.png')}
  //                 /> */}
  //                 <MaterialIcons
  //                   name={'report-problem'}
  //                   color={'red'}
  //                   size={17}
  //                 />
  //                 <Text
  //                   style={{
  //                     color: 'red',
  //                     marginLeft: 5,
  //                   }}>
  //                   Report
  //                 </Text>
  //               </MenuOption>
  //             </View>
  //           ) : (
  //             <View
  //               style={{
  //                 position: 'absolute',
  //                 paddingHorizontal: 10,
  //                 elevation: 4,
  //                 shadowOpacity: 0.2,
  //                 shadowOffset: {height: 0, width: 1},
  //                 // paddingVertical: 8,
  //                 borderRadius: 5,
  //                 right: '4%',
  //                 top: -5,
  //                 alignSelf: 'flex-end',
  //                 backgroundColor: '#fff',
  //               }}>
  //               <MenuOption
  //                 onSelect={() => [
  //                   navigation.navigate('EditPostShared', {
  //                     // route: route.toString(),
  //                     post_id: data?.pi_id,
  //                     u_detail: profile,
  //                     issue_type: data?.pi_issue_type,
  //                     issue_category_id: data?.pi_issue_category_id,
  //                     selected_leader_user_token: data?.pi_tag_user_token,
  //                     issue_description: data?.pi_issue_description,
  //                     state_id: `${data?.pi_state_id}`,
  //                     district_id: data?.pi_district_id,
  //                     city_id: data?.pi_city_id,
  //                     state_title: data?.post_state_title,
  //                     district_title: data?.post_district_title,
  //                     city_title: data?.post_city_title,
  //                     post_data: data?.full_path_issue_images,
  //                     post_data_value: data?.pi_issue_image,
  //                     onEditSuccessPost: onEditSuccessPost,
  //                   }),
  //                   setoption_modal_visible(false),
  //                 ]}
  //                 style={{
  //                   flexDirection: 'row',
  //                   alignItems: 'center',
  //                   backgroundColor: '#fff',
  //                 }}>
  //                 <Image
  //                   style={{height: 15, width: 15}}
  //                   source={require('../../Assets/Images/edit.png')}
  //                 />

  //                 <Text style={{color: '#000', marginLeft: 5}}>Edit</Text>
  //               </MenuOption>

  //               <MenuOption
  //                 onSelect={() => handle_save_post(data?.pi_id)}
  //                 style={{
  //                   flexDirection: 'row',
  //                   alignItems: 'center',
  //                   // paddingVertical: 6,
  //                 }}>
  //                 <Image
  //                   style={{height: 15, width: 15}}
  //                   source={require('../../Assets/Images/save.png')}
  //                 />

  //                 {original_save_status == 1 && (
  //                   <Text
  //                     style={{
  //                       color: '#000',
  //                       marginLeft: 5,
  //                     }}>
  //                     Unsave
  //                   </Text>
  //                 )}
  //                 {original_save_status == 0 && (
  //                   <Text
  //                     style={{
  //                       color: '#000',
  //                       marginLeft: 5,
  //                     }}>
  //                     Save
  //                   </Text>
  //                 )}
  //               </MenuOption>

  //               <MenuOption
  //                 onSelect={() => [
  //                   navigation.push('Issueresolveby', {
  //                     post_id: data?.pi_id,
  //                   }),
  //                   setoption_modal_visible(false),
  //                 ]}
  //                 style={{flexDirection: 'row', alignItems: 'center'}}>
  //                 <Image
  //                   style={{height: 15, width: 15}}
  //                   source={require('../../Assets/Images/resolved.png')}
  //                 />

  //                 <Text style={{color: '#000', marginLeft: 5}}>
  //                   Issue Resolved ?
  //                 </Text>
  //               </MenuOption>

  //               <MenuOption
  //                 onSelect={() => [
  //                   // navigation.push('Issueresolveby', {
  //                   //   post_id: data?.pi_id,
  //                   // }),
  //                   handle_remove_btn(data.pi_id),
  //                   setoption_modal_visible(false),
  //                 ]}
  //                 style={{
  //                   flexDirection: 'row',
  //                   alignItems: 'center',
  //                   // paddingTop: 6,
  //                 }}>
  //                 <Image
  //                   style={{height: 15, width: 15}}
  //                   source={require('../../Assets/Images/delete.png')}
  //                 />

  //                 <Text style={{color: '#000', marginLeft: 5}}>Remove</Text>
  //               </MenuOption>
  //             </View>
  //           )}
  //         </MenuOptions>
  //       </Menu>
  //     </View>
  //   </View>
  // );

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: '#fff',
        },
      ]}>
      <PopupModal
        visible={modalVisible}
        closeModal={closeModal}
        content={modalcontent}
      />
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: '2%',
          justifyContent: 'space-between',
          marginTop: '2%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() =>
            getUserDetail({
              leader_id: data?.pi_upload_by,
              user_type: data.posted_by_user_type,
            })
          }
          style={{flexDirection: 'row'}}>
          <View
            style={{
              padding: '0.5%',
              borderWidth: 1,
              borderColor: '#0068E5',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              borderRadius={50}
              style={{height: 35, width: 35}}
              // source={{ uri: posted_profile_pic.endsWith('/') == false ?
              // posted_profile_pic :
              // 'https://appapi.abhinavbharath.in/upload/default/activity/event_type/profile_icon.png' }}
              // source={{ uri: 'https://appapi.abhinavbharath.in/upload/default/activity/event_type/profile_icon.png' }}
              source={{
                uri:
                  data?.full_path_posted_profile_pic?.endsWith('/') == false
                    ? data?.full_path_posted_profile_pic
                    : 'https://appapi.abhinavbharath.in/upload/default/activity/event_type/profile_icon.png',
              }}
            />
          </View>

          <View style={{marginLeft: '5%'}}>
            <Text style={styles.postednamefont}>
              {data?.posted_by_full_name}
            </Text>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.postedtypefont}>
                {diff == 0 ? 'Today' : diff.slice(1) + ' d'}
              </Text>

              <Entypo name={'dot-single'} size={15} color={'#666'} />

              <Text style={styles.postedtypefont}>{data?.post_city_title}</Text>

              <Entypo name={'dot-single'} size={15} color={'#666'} />

              <Text style={[styles.postedtypefont, {color: 'green'}]}>
                {data?.issue_category_name}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Post Options Modal View */}

        <Menu>
          <MenuTrigger style={{padding: 5}}>
            <MaterialCommunityIcons
              name={'dots-vertical'}
              size={15}
              color={'#000'}
            />
          </MenuTrigger>
          <MenuOptions
            customStyles={{
              optionsContainer: {marginTop: 22},
            }}>
            {profile?.u_token != data?.pi_upload_by ? (
              <View
                style={{
                  shadowOpacity: 0.2,
                  shadowOffset: {height: 0, width: 1},
                  position: 'absolute',
                  paddingHorizontal: 10,
                  justifyContent: 'center',
                  elevation: 4,
                  borderRadius: 5,
                  right: '4%',
                  top: -5,
                  backgroundColor: '#fff',
                  alignSelf: 'flex-end',
                }}>
                <MenuOption
                  onSelect={() => handle_save_post(data?.pi_id)}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={{height: 15, width: 15}}
                    source={require('../../Assets/Images/save.png')}
                  />

                  {original_save_status == 1 && (
                    <Text
                      style={{
                        color: '#000',
                        marginLeft: 5,
                      }}>
                      Unsave
                    </Text>
                  )}
                  {original_save_status == 0 && (
                    <Text
                      style={{
                        color: '#000',
                        marginLeft: 5,
                      }}>
                      Save
                    </Text>
                  )}
                </MenuOption>

                <MenuOption
                  onSelect={() => openModal('hide')}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Image
                    style={{height: 15, width: 15}}
                    source={require('../../Assets/Images/hidepost.png')}
                  />

                  <Text
                    style={{
                      color: '#000',
                      marginLeft: 5,
                    }}>
                    Hide
                  </Text>
                </MenuOption>

                <MenuOption
                  onSelect={() =>
                    // handleBlockUser({block_u_token: data.pi_upload_by})
                    openModal('block')
                  }
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={{height: 15, width: 15}}
                    source={require('../../Assets/Images/blockuser.png')}
                  />

                  <Text
                    style={{
                      color: '#000',
                      marginLeft: 5,
                    }}>
                    Block User
                  </Text>
                </MenuOption>

                <MenuOption
                  onSelect={() =>
                    onReport({
                      post_id: data.pi_id,
                      user_token: data.pi_upload_by,
                    })
                  }
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  {/* <Image
                    style={{height: 15, width: 15}}
                    source={require('../../Assets/Images/save.png')}
                  /> */}
                  <MaterialIcons
                    name={'report-problem'}
                    color={'red'}
                    size={17}
                  />
                  <Text
                    style={{
                      color: 'red',
                      marginLeft: 5,
                    }}>
                    Report
                  </Text>
                </MenuOption>
              </View>
            ) : (
              <View
                style={{
                  position: 'absolute',
                  paddingHorizontal: 10,
                  elevation: 4,
                  shadowOpacity: 0.2,
                  shadowOffset: {height: 0, width: 1},
                  // paddingVertical: 8,
                  borderRadius: 5,
                  right: '4%',
                  top: -5,
                  alignSelf: 'flex-end',
                  backgroundColor: '#fff',
                }}>
                <MenuOption
                  onSelect={() => [
                    navigation.navigate('EditPostShared', {
                      route: route,
                      post_id: data?.pi_id,
                      u_detail: profile,
                      issue_type: data?.pi_issue_type,
                      issue_category_id: data?.pi_issue_category_id,
                      selected_leader_user_token: data?.pi_tag_user_token,
                      selected_leader_user_name: data?.pi_tag_user_full_name,
                      issue_description: data?.pi_issue_description,
                      state_id: `${data?.pi_state_id}`,
                      district_id: data?.pi_district_id,
                      city_id: data?.pi_city_id,
                      state_title: data?.post_state_title,
                      district_title: data?.post_district_title,
                      city_title: data?.post_city_title,
                      post_data: data?.full_path_issue_images,
                      post_data_value: data?.pi_issue_image,
                      onEditSuccessPost: onEditSuccessPost,
                      name: 'jigar',
                    }),
                    setoption_modal_visible(false),
                  ]}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                  }}>
                  <Image
                    style={{height: 15, width: 15}}
                    source={require('../../Assets/Images/edit.png')}
                  />

                  <Text style={{color: '#000', marginLeft: 5}}>Edit</Text>
                </MenuOption>

                {/* <MenuOption
                  onSelect={() => handle_save_post(data?.pi_id)}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // paddingVertical: 6,
                  }}>
                  <Image
                    style={{height: 15, width: 15}}
                    source={require('../../Assets/Images/save.png')}
                  />

                  {original_save_status == 1 && (
                    <Text
                      style={{
                        color: '#000',
                        marginLeft: 5,
                      }}>
                      Unsave
                    </Text>
                  )}
                  {original_save_status == 0 && (
                    <Text
                      style={{
                        color: '#000',
                        marginLeft: 5,
                      }}>
                      Save
                    </Text>
                  )}
                </MenuOption> */}

                <MenuOption
                  onSelect={() => [
                    navigation.push('Issueresolveby', {
                      post_id: data?.pi_id,
                    }),
                    setoption_modal_visible(false),
                  ]}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    style={{height: 15, width: 15}}
                    source={require('../../Assets/Images/resolved.png')}
                  />

                  <Text style={{color: '#000', marginLeft: 5}}>
                    Issue Resolved ?
                  </Text>
                </MenuOption>

                <MenuOption
                  onSelect={() => [
                    // navigation.push('Issueresolveby', {
                    //   post_id: data?.pi_id,
                    // }),
                    handle_remove_btn(data.pi_id),
                    setoption_modal_visible(false),
                  ]}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // paddingTop: 6,
                  }}>
                  <Image
                    style={{height: 15, width: 15}}
                    source={require('../../Assets/Images/delete.png')}
                  />

                  <Text style={{color: '#000', marginLeft: 5}}>Remove</Text>
                </MenuOption>
              </View>
            )}
          </MenuOptions>
        </Menu>
      </View>

      {/* Post Solved By */}

      {data?.solved_by_full_name == null ? null : (
        <View
          style={{
            zIndex: -1,
            marginHorizontal: '2%',
            marginTop: '2%',
            backgroundColor: '#f2f9ff',
            alignSelf: 'flex-start',
            padding: '1%',
            borderRadius: 20,
            paddingHorizontal: '2%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 11,
              fontFamily: font_family.Calibri.fontFamily,
              color: '#000',
            }}>
            Solved By-
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontFamily: font_family.Inter_600.fontFamily,
              color: '#434343',
            }}>
            {' '}
            {data?.solved_by_full_name}
          </Text>

          <Image
            resizeMode="center"
            borderRadius={20}
            style={{height: 20, width: 20, marginLeft: '2%'}}
            source={{uri: data?.full_path_solved_by_party_logo}}
          />
        </View>
      )}

      {/* Issues Description */}

      <View
        style={{
          zIndex: -1,
          marginHorizontal: '2%',
          marginTop: '2%',
        }}>
        <ReadMore
          wrapperStyle={{
            width: Dimensions.get('screen').width / 1.07,
          }}
          seeMoreStyle={{
            color: '#0068E5',
            alignSelf: 'center',
          }}
          seeLessStyle={{
            color: '#0068E5',
          }}
          numberOfLines={3}
          style={[styles.description_font, {paddingVertical: 1}]}>
          {data?.pi_issue_description}
        </ReadMore>
      </View>

      {/* Issues Images */}

      <View style={{zIndex: -1, marginTop: '2%'}}>
        {data?.pi_issue_image != '' ? (
          <View>
            {extension != 'mp4' ? (
              <View style={{flexDirection: 'row'}}>
                {data?.full_path_issue_images instanceof Array == true ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        alignItemas: 'center',
                        width: Dimensions.get('screen').width / 2,
                        height: Dimensions.get('screen').height / 4,
                      }}
                      onPress={() =>
                        img({item: data?.full_path_issue_images, index: 0})
                      }>
                      {loading && (
                        <ActivityIndicator
                          style={{position: 'absolute', alignSelf: 'center'}}
                        />
                      )}
                      <PostImages
                        source={data?.full_path_issue_images[0]}
                        onLoadEnd={() => setLoading(false)}
                      />
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        justifyContent: 'center',
                        padding: 1,
                        width: Dimensions.get('screen').width / 2,
                        height: Dimensions.get('screen').height / 4,
                      }}
                      onPress={() =>
                        img({item: data?.full_path_issue_images, index: 1})
                      }>
                      <ImageBackground style={{justifyContent: 'center'}}>
                        {loading && (
                          <ActivityIndicator
                            style={{position: 'absolute', alignSelf: 'center'}}
                          />
                        )}
                        <PostImages
                          source={data?.full_path_issue_images[1]}
                          onLoadEnd={() => setLoading(false)}
                        />

                        {/* <View style={styles.overlay}> */}

                        {data?.full_path_issue_images.length > 2 ? (
                          <Pressable
                            onPress={() =>
                              img({
                                item: data?.full_path_issue_images,
                                index: 1,
                              })
                            }
                            style={[
                              {
                                ðzIndex: 10,
                                backgroundColor: '#000000c0',
                                position: 'absolute',
                                lineHeight: 15,
                                height: '100%',
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                              },
                            ]}>
                            <Text style={{color: '#fff', fontSize: 20}}>
                              +{' '}
                              {data?.full_path_issue_images.length > 2
                                ? data?.full_path_issue_images.length - 2
                                : null}
                            </Text>
                          </Pressable>
                        ) : null}

                        {/* </View> */}
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity
                    onPress={() =>
                      img({item: [data?.full_path_issue_images], index: 0})
                    }
                    activeOpacity={0.8}
                    style={{
                      width: Dimensions.get('screen').width,
                      height: Dimensions.get('screen').height / 4,
                      justifyContent: 'center',
                      alignItemas: 'center',
                    }}>
                    {loading && <ActivityIndicator style={{top: '50%'}} />}
                    <PostImages
                      source={data?.full_path_issue_images}
                      onLoadEnd={() => setLoading(false)}
                    />
                  </TouchableOpacity>
                )}
              </View>
            ) : (
              <View>
                {data?.full_path_issue_images instanceof Array == true ? (
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => onOpenVideoModal(0)}
                      activeOpacity={0.8}
                      style={{
                        width: Dimensions.get('screen').width / 2,
                        height: Dimensions.get('screen').height / 4,
                        justifyContent: 'center',
                        alignItemas: 'center',
                      }}>
                      {loading && <ActivityIndicator style={{top: '50%'}} />}
                      <PostImages
                        key={0}
                        source={data?.full_path_issue_images[0]}
                        onLoadEnd={() => setLoading(!loading)}
                      />
                      {tempKey == 0 ? (
                        <>
                          <VideoModal
                            key={1}
                            visible={video_modal_visible}
                            onclose={oncloseVideoModal}
                            source={data?.full_path_issue_images[0]}
                          />
                        </>
                      ) : null}

                      {/* <VideoPlayer
                        videoSource={data?.full_path_issue_images[0]}
                      /> */}
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => onOpenVideoModal(1)}
                      activeOpacity={0.8}
                      style={{
                        width: Dimensions.get('screen').width / 2,
                        height: Dimensions.get('screen').height / 4,
                        justifyContent: 'center',
                        padding: 1,
                      }}>
                      {loading && <ActivityIndicator style={{top: '50%'}} />}
                      <PostImages
                        key={2}
                        source={data?.full_path_issue_images[1]}
                        onLoadEnd={() => setLoading(!loading)}
                      />
                      {tempKey == 1 ? (
                        <>
                          <VideoModal
                            key={3}
                            visible={video_modal_visible}
                            onclose={oncloseVideoModal}
                            source={data?.full_path_issue_images[1]}
                          />
                        </>
                      ) : null}

                      {/* <VideoPlayer
                        videoSource={data?.full_path_issue_images[0]}
                      /> */}
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity
                    onPress={onOpenVideoModal}
                    activeOpacity={0.8}
                    style={{
                      width: Dimensions.get('screen').width,
                      height: Dimensions.get('screen').height / 4,
                      justifyContent: 'center',
                    }}>
                    {loading && <ActivityIndicator style={{top: '50%'}} />}
                    <PostImages
                      source={data?.full_path_issue_images}
                      onLoadEnd={() => setLoading(!loading)}
                    />

                    <VideoModal
                      visible={video_modal_visible}
                      onclose={oncloseVideoModal}
                      source={data?.full_path_issue_images}
                    />

                    {/* <VideoPlayer
                      videoSource={data?.full_path_issue_images[0]}
                    /> */}
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>
        ) : null}

        <ImageView
          images={images_pr}
          imageIndex={images_index}
          visible={visible}
          onRequestClose={() => setIsVisible(false)}
        />
      </View>

      {/* Post  like and suffer count */}

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: '2%',
          marginTop: '1%',
          padding: '1%',
          // backgroundColor: '#fff',
        }}>
        <Image
          style={{height: 15, width: 15}}
          source={require('../../Assets/Images/support_no.png')}
        />

        <Text style={styles.suppandsuffnumstyle}>
          {/* {original_issue_support_no} Support */}
          {support_status == original_support_status
            ? data?.issue_support_no
            : Number(updated_support_num)}{' '}
          Support
        </Text>

        <Entypo name={'dot-single'} size={15} color={'#4A4A4A'} />

        <Image
          style={{height: 15, width: 15}}
          source={require('../../Assets/Images/suffered_no.png')}
        />

        <Text style={styles.suppandsuffnumstyle}>
          {/* {original_issue_suffered_no}  */}
          {suffered_status == original_suffered_status
            ? data?.issue_suffered_no
            : Number(updated_suffered_num)}{' '}
          Suffered
          {/* {data?.issue_suffered_no} Suffered */}
        </Text>
      </View>

      {/* Post Footer like and status */}

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          // backgroundColor: '#fff',
          alignItems: 'center',
          paddingVertical: Platform.OS == 'ios' ? 8 : '3%',
          borderTopWidth: 0.8,
          borderTopColor: '#d5d0d0',
          marginTop: 8,
        }}>
        <TouchableOpacity
          onPress={() =>
            handle_support_btn({
              pi_idasd: data?.pi_id,
              updated_issue_support_no_temp: updated_issue_support_status,
              support_status_id_temp: data?.support_status,
            })
          }
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            resizeMode="stretch"
            style={{height: 20, width: 20}}
            source={
              updated_issue_support_status == true
                ? require('../Images/supporter.png')
                : require('../Images/supporter_not_selected.png')
            }
          />

          <Text
            style={{
              color: updated_issue_support_status == true ? '#0068E5' : '#666',
              fontSize: 12,
              marginLeft: '3%',
              fontFamily:
                updated_issue_support_status == true
                  ? 'IBMPlexSans-SemiBold'
                  : font_family.IBMPlexSans_400.fontFamily,
            }}>
            I, Support
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            handle_suffered_btn({
              pi_idasd: data?.pi_id,
              updated_issue_suffered_no_temp: updated_issue_suffered_status,
              suffered_status_id_temp: data?.suffered_status,
            })
          }
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            resizeMode="stretch"
            style={{height: 20, width: 20}}
            source={
              // data?.suffered_status == '1'
              // updated_issue_suffered_status == true
              updated_issue_suffered_status == true
                ? require('../Images/suffered.png')
                : require('../Images/suffered_not_selected.png')
            }
          />

          <Text
            style={{
              color: updated_issue_suffered_status == true ? '#0068E5' : '#666',
              fontSize: 12,
              marginLeft: '3%',
              fontFamily:
                updated_issue_suffered_status == true
                  ? 'IBMPlexSans-SemiBold'
                  : font_family.IBMPlexSans_400.fontFamily,
            }}>
            I, Suffered
          </Text>
        </TouchableOpacity>

        {profile.u_type == 2 &&
        data?.pi_upload_by != login_user_id &&
        data?.pi_accepted_post.includes(`${profile.u_id}`) == false ? (
          <TouchableOpacity
            onPress={() => handle_accept_issue(data?.pi_id)}
            // onPress={() =>
            //   handle_accept_issue({
            //     pi_idasd: data?.pi_id,
            //     updated_issue_accepted_no_temp: updated_issue_support_status,
            //     support_status_id_temp: data?.support_status,
            //   })
            // }
            style={[
              styles.bottom_btn_view,
              {
                backgroundColor: '#0068E5',
                padding: 5,
                paddingHorizontal: 10,
                borderRadius: 20,
              },
            ]}>
            <Image
              resizeMode="stretch"
              style={{height: 13, width: 13}}
              source={require('../../../Shared/Assets/Images/help_requested_accept.png')}
            />

            <Text
              style={{
                color: '#fff',
                fontSize: 11,
                fontFamily: font_family.IBMPlexSans_400.fontFamily,
                marginLeft: 4,
              }}>
              Accept
            </Text>
          </TouchableOpacity>
        ) : (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              resizeMode="stretch"
              style={{height: 20, width: 20}}
              source={
                data?.pi_solved_by == '' && data?.pi_accepted_post == ''
                  ? require('../../../Shared/Assets/Images/issue_status_new.png')
                  : data?.pi_solved_by == login_user_id
                  ? require('../../../Shared/Assets/Images/leader_issue_status_thankyou.png')
                  : data?.pi_solved_by != ''
                  ? require('../../../Shared/Assets/Images/done.png')
                  : require('../../../Shared/Assets/Images/issue_status_accepted.png')
              }
            />

            <Text
              style={{
                color: 'blue',
                fontSize: 12,
                marginLeft: '3%',
                fontFamily: font_family.IBMPlexSans_400.fontFamily,
                // fontFamily: 'IBMPlexSans-SemiBold'
              }}>
              {data?.pi_solved_by == '' && data?.pi_accepted_post == ''
                ? 'New'
                : data?.pi_solved_by == login_user_id
                ? 'Thank You'
                : data?.pi_solved_by != ''
                ? 'Solved'
                : 'Accepted'}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
});

export default Postlistcard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // borderBottomWidth: 0.2,
    // paddingBottom: 10,
    paddingTop: 15,
    elevation: 10,
    zIndex: -1,
    shadowOpacity: 0.2,
    shadowOffset: {height: 0, width: 1},
  },

  postednamefont: {
    fontFamily: font_family.OpenSans_600.fontFamily,
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
  },

  postedtypefont: {
    fontSize: 11,
    color: '#666',
    fontFamily: font_family.Inter_400.fontFamily,
  },

  description_font: {
    color: '#222',
    fontFamily: font_family.OpenSans_400.fontFamily,
    fontSize: 14,
  },
  bottom_btn_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // 0.5 represents 50% transparency for black
    padding: 10,
    justifyContent: 'center', // Center the text vertically
    position: 'absolute',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#000000c0',
    position: 'absolute',
    alignSelf: 'center',
    lineHeight: 15,
    fontSize: 20,
    color: '#fff',
    height: '100%',
    width: '100%',
  },
  absolute: {
    position: 'relative',
    top: 10,
    left: 10,
    bottom: 10,
    right: 10,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  // emptydatacontainer: {
  //   alignItems: 'center',
  //   height: Dimensions.get('screen').height / 1.2,
  //   justifyContent: 'center',
  // },
  modalContent: {
    width: 300,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
    elevation: 10,
    shadowColor: '#ECECEC',
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
  suppandsuffnumstyle: {
    paddingLeft: '2%',
    fontSize: 10,
    fontFamily: font_family.Inter_500.fontFamily,
    color: '#777',
  },
});
