import React, {useState, memo} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  Platform,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import moment from 'moment';
import ImageView from 'react-native-image-viewing';
import {font_family} from '../CSS/fonts';
import {useNavigation} from '@react-navigation/native';
import {PostImages} from './PostImages';
import {VideoModal} from './VideoModal';
import {useProfileData} from '../../../Redux/slice/profileDetail';
import {useDispatch} from 'react-redux';
import ReadMore from '@fawazahmed/react-native-read-more';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Api from '../../../Api/Api';
import {RemoveMyManifesoList} from '../../../Redux/slice/mymanifesto';

const Manifestocard = memo(props => {
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();
  const profile = useProfileData();
  const dispatch = useDispatch();

  const {data, index, initialStatus, onRemove} = props;

  console.log('Manifestocard Data', data);

  const [visible, setIsVisible] = useState(false);
  const [images_pr, setimages_pr] = useState([]);
  const [images_index, setimages_index] = useState('');
  const [video_modal_visible, setvideo_modal_visible] = useState(false);

  const parts = data?.mf_images.split('.');
  const extension = parts[parts.length - 1];
  console.log('cvbcbcbcbc', index);

  const startDate = moment(data?.mf_created_at);
  const endDate = moment(new Date());
  const diff = startDate.diff(endDate, 'days').toString();

  const [tempKey, setTempKey] = useState(0);

  const [status, setStatus] = useState(initialStatus);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalcontent, setmodalcontent] = useState('');

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

  const handleRemoveManifesto = item => {
    var formData = {manifesto_id: item};

    try {
      Api.RemoveManifesto(formData).then(res => {
        if (res.data.status == 1) {
          dispatch(RemoveMyManifesoList({id: item}));
        } else {
        }
      });
    } catch (error) {}
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: '#fff',
        },
      ]}>
      {/* Manifesto Created By */}
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: '2%',
          justifyContent: 'space-between',
          marginTop: '2%',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          disabled={true}
          // onPress={() =>
          //   getUserDetail({
          //     leader_id: data?.pi_upload_by,
          //     user_type: data.posted_by_user_type,
          //   })
          // }
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
              source={{
                uri:
                  data?.created_by_user_profile_path != ''
                    ? data?.created_by_user_profile_path
                    : 'https://appapi.abhinavbharath.in/upload/default/activity/event_type/profile_icon.png',
              }}
            />
          </View>

          <View style={{marginLeft: 8}}>
            <Text style={styles.postednamefont}>
              {data?.created_by_full_name}
            </Text>

            <View style={{flexDirection: 'row'}}>
              <Text style={styles.postedtypefont}>
                {diff == 0 ? 'Today' : diff.slice(1) + ' d'}
              </Text>

              <Entypo name={'dot-single'} size={15} color={'#666'} />

              <Text style={styles.postedtypefont}>
                {data?.state_title != null
                  ? data?.state_title
                  : data?.district_name != null
                  ? data?.district_name
                  : data?.city_name}
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {profile.u_token == data.mf_user_token ? (
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
              <View style={styles.menuview}>
                {console.log('data?.mf_state_id', data?.mf_state_id)}
                <MenuOption
                  onSelect={() => [
                    navigation.navigate('EditManifesto', {
                      // // route: route,
                      location_id:
                        data?.mf_state_id !== 0
                          ? '1'
                          : data?.mf_district_id !== 0
                          ? '2'
                          : '3',
                      mf_id: data?.mf_id,
                      mf_title: data?.mf_title,
                      full_path_manifesto_images:
                        data?.full_path_manifesto_images,
                      mp_points: data?.mp_points,
                    }),
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

                <MenuOption
                  onSelect={() => [
                    // navigation.push('Issueresolveby', {
                    //   post_id: data?.pi_id,
                    // }),
                    handleRemoveManifesto(data.mf_id),
                    // setoption_modal_visible(false),
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
            </MenuOptions>
          </Menu>
        ) : null}
      </View>

      {/* Manifesto Party */}

      <View style={styles.manifestopartyview}>
        <Text
          style={{
            fontSize: 11,
            fontFamily: font_family.Inter_600.fontFamily,
            color: '#434343',
          }}>
          {' '}
          {data?.created_by_party_name}
        </Text>

        <Image
          resizeMode="center"
          borderRadius={20}
          style={{height: 18, width: 18, marginLeft: '2%'}}
          source={{uri: data?.created_by_party_logo}}
          // source={data?.created_by_party_logo}
        />
      </View>

      {/* Manifesto Title */}

      <View style={styles.manifestotitleview}>
        <Text style={styles.manifestotitletext}>{data.mf_title}</Text>
      </View>

      {/* Manifesto Images */}

      {/* <View style={{zIndex: -1, marginTop: '2%'}}>
        {data?.mf_images != '' ? (
          <View>
            {extension != 'mp4' ? (
              <View style={{flexDirection: 'row'}}>
                {data?.full_path_manifesto_images instanceof Array == true ? (
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
                        img({item: data?.full_path_manifesto_images, index: 0})
                      }>
                      {loading && (
                        <ActivityIndicator
                          style={{position: 'absolute', alignSelf: 'center'}}
                        />
                      )}
                      <PostImages
                        source={data?.full_path_manifesto_images[0]}
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
                        img({item: data?.full_path_manifesto_images, index: 1})
                      }>
                      <ImageBackground style={{justifyContent: 'center'}}>
                        {loading && (
                          <ActivityIndicator
                            style={{position: 'absolute', alignSelf: 'center'}}
                          />
                        )}
                        <PostImages
                          source={data?.full_path_manifesto_images[1]}
                          onLoadEnd={() => setLoading(false)}
                        />

                        {data?.full_path_manifesto_images.length > 2 ? (
                          <Pressable
                            onPress={() =>
                              img({
                                item: data?.full_path_manifesto_images,
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
                              {data?.full_path_manifesto_images.length > 2
                                ? data?.full_path_manifesto_images.length - 2
                                : null}
                            </Text>
                          </Pressable>
                        ) : null}
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity
                    onPress={() =>
                      img({item: data?.full_path_manifesto_images, index: 0})
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
                      source={data?.full_path_manifesto_images}
                      onLoadEnd={() => setLoading(false)}
                    />
                  </TouchableOpacity>
                )}
              </View>
            ) : (
              <View>
                {data?.full_path_manifesto_images instanceof Array == true ? (
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
                        source={data?.full_path_manifesto_images[0]}
                        onLoadEnd={() => setLoading(!loading)}
                      />
                      {tempKey == 0 ? (
                        <>
                          <VideoModal
                            key={1}
                            visible={video_modal_visible}
                            onclose={oncloseVideoModal}
                            source={data?.full_path_manifesto_images[0]}
                          />
                        </>
                      ) : null}
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
                        source={data?.full_path_manifesto_images[1]}
                        onLoadEnd={() => setLoading(!loading)}
                      />
                      {tempKey == 1 ? (
                        <>
                          <VideoModal
                            key={3}
                            visible={video_modal_visible}
                            onclose={oncloseVideoModal}
                            source={data?.full_path_manifesto_images[1]}
                          />
                        </>
                      ) : null}
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
                      source={data?.full_path_manifesto_images}
                      onLoadEnd={() => setLoading(!loading)}
                    />

                    <VideoModal
                      visible={video_modal_visible}
                      onclose={oncloseVideoModal}
                      source={data?.full_path_manifesto_images}
                    />
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
      </View> */}

      <View style={{zIndex: -1, marginTop: '2%'}}>
        {data?.mf_images != '' ? (
          <View>
            {extension != 'mp4' ? (
              <View style={{flexDirection: 'row'}}>
                {data?.full_path_manifesto_images.length >= 2 ? (
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
                        img({item: data?.full_path_manifesto_images, index: 0})
                      }>
                      {loading && (
                        <ActivityIndicator
                          style={{position: 'absolute', alignSelf: 'center'}}
                        />
                      )}
                      <PostImages
                        source={data?.full_path_manifesto_images[0]}
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
                        img({item: data?.full_path_manifesto_images, index: 1})
                      }>
                      <ImageBackground style={{justifyContent: 'center'}}>
                        {loading && (
                          <ActivityIndicator
                            style={{position: 'absolute', alignSelf: 'center'}}
                          />
                        )}
                        <PostImages
                          source={data?.full_path_manifesto_images[1]}
                          onLoadEnd={() => setLoading(false)}
                        />

                        {data?.full_path_manifesto_images.length > 2 ? (
                          <Pressable
                            onPress={() =>
                              img({
                                item: data?.full_path_manifesto_images,
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
                              {data?.full_path_manifesto_images.length > 2
                                ? data?.full_path_manifesto_images.length - 2
                                : null}
                            </Text>
                          </Pressable>
                        ) : null}
                      </ImageBackground>
                    </TouchableOpacity>
                  </View>
                ) : (
                  <TouchableOpacity
                    onPress={() =>
                      img({item: data?.full_path_manifesto_images, index: 0})
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
                      source={data?.full_path_manifesto_images[0]}
                      onLoadEnd={() => setLoading(false)}
                    />
                  </TouchableOpacity>
                )}
              </View>
            ) : (
              <View>
                {data?.full_path_manifesto_images instanceof Array == true ? (
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
                        source={data?.full_path_manifesto_images[0]}
                        onLoadEnd={() => setLoading(!loading)}
                      />
                      {tempKey == 0 ? (
                        <>
                          <VideoModal
                            key={1}
                            visible={video_modal_visible}
                            onclose={oncloseVideoModal}
                            source={data?.full_path_manifesto_images[0]}
                          />
                        </>
                      ) : null}
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
                        source={data?.full_path_manifesto_images[1]}
                        onLoadEnd={() => setLoading(!loading)}
                      />
                      {tempKey == 1 ? (
                        <>
                          <VideoModal
                            key={3}
                            visible={video_modal_visible}
                            onclose={oncloseVideoModal}
                            source={data?.full_path_manifesto_images[1]}
                          />
                        </>
                      ) : null}
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
                      source={data?.full_path_manifesto_images}
                      onLoadEnd={() => setLoading(!loading)}
                    />

                    <VideoModal
                      visible={video_modal_visible}
                      onclose={oncloseVideoModal}
                      source={data?.full_path_manifesto_images}
                    />
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

      {/* Manifesto Points List */}

      <View
        style={{
          width: '99%',

          paddingVertical: 8,
        }}>
        {data.mp_points.map(i => (
          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: 'red',
              alignItems: 'center',
              paddingRight: 10,
            }}>
            <Entypo name={'minus'} size={18} color={'#666'} />
            <ReadMore
              seeMoreStyle={styles.seetext}
              seeLessStyle={styles.seetext}
              numberOfLines={2}
              style={[styles.manifestofonts, {paddingVertical: 1}]}>
              {i}
            </ReadMore>
          </View>
        ))}
      </View>
    </View>
  );
});

export default Manifestocard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  manifestotitleview: {
    zIndex: -1,
    marginHorizontal: '3%',
    marginTop: '2%',
  },
  manifestotitletext: {
    fontFamily: font_family.OpenSans_600.fontFamily,
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
  },

  manifestofonts: {
    fontFamily: font_family.OpenSans_400.fontFamily,
    fontSize: 13,
    color: '#000',
  },
  seetext: {
    color: '#0068E5',
    fontSize: 13,
    fontWeight: '700',
    fontFamily: font_family.OpenSans_400.fontFamily,
  },
  manifestopartyview: {
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
  },
  menuview: {
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
  },
});
