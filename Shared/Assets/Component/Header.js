import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  Appearance,
  Platform,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

import {font_family} from '../CSS/fonts';
import {useNavigation} from '@react-navigation/native';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import {useProfileData} from '../../../Redux/slice/profileDetail';
import {useFilterAreaData} from '../../../Redux/slice/filterarea';

export default function Header({
  title,
  onReloadPress,
  route,
  user_token,

  onclose,
  issuetypefiltervisible,
  filter_type,

  //MOdal
  districtmodalvisible,
  f_type,
  onclosedistrict,
  my_consistency_filter,
  other_area_modal_visible_state,
  other_area_modal_visible,

  // Post Filter
  // other_area_modal_visible,
  selected_filter,
  selectedType,
  isssuetypemodalVisible_state,
}) {
  console.log('onReloadPress', onReloadPress);
  const profile = useProfileData();
  const Area = useFilterAreaData();

  console.log('filter_type_district>>>>>>>>>>>>>>>>>>', f_type);

  const navigation = useNavigation();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Option 1', value: 'option1'},
    {label: 'Option 2', value: 'option2'},
    {label: 'Option 3', value: 'option3'},
  ]);
  const sendresp = () => {
    if (issuetypefiltervisible == false) {
      // setissue_type_visible(true);
      onclose(true);
    } else {
      onclose(false);
      // setissue_type_visible(false);
    }
  };

  const handle_select_other_area = props => {
    if (props == false) {
      other_area_modal_visible(true);
    } else {
      other_area_modal_visible(false);
    }
  };

  const colorScheme = Appearance.getColorScheme();

  console.log('Header title', title);

  if (
    title === 'ABHINAV BHARATH' ||
    title === 'Report an issue' ||
    // title === 'My Issues' ||
    title === 'Dashboard' ||
    title === 'Create Post Drawer' ||
    // title === 'Create Social/Community Drawer' ||
    title === 'My Issues Drawer' ||
    // title === 'My Accounts' ||
    // title === 'Leadersshareddrawer' ||
    // title === 'Public Issues Drawer' ||
    title === 'Help Requested Drawer' ||
    title === 'Accepted Issues Drawer' ||
    title === 'Resolved Issues Drawer' ||
    title === 'Drawer Profile'
    // title === 'Saved Post' ||
    // title === 'Activities' ||
    // title === 'About Us' ||
    // title === 'Terms of Use' ||
    // title === 'Privacy Policy'
    // title === 'Create Private Meeting' ||
    // title === 'Create Political Gathering' ||
    // title === 'Saved Activities'
  ) {
    return (
      <View
        style={[
          styles.container,
          {
            justifyContent: 'space-between',
            backgroundColor:
              title === 'Create Post'
                ? '#0068E51F'
                : title === 'Create Social/Community Drawer'
                ? '#fff'
                : title === 'My Accounts'
                ? '#fff'
                : '#fff',
          },
        ]}>
        <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: '2%',
            height: '100%',
          }}>
          <TouchableOpacity
            style={{paddingHorizontal: 5}}
            onPress={() => navigation.openDrawer()}>
            {/* <Image
              resizeMode="center"
              style={{height: 30, width: 30}}
              source={require('../Images/hamburger.png')}
            /> */}
            <MaterialCommunityIcons name={'menu'} color={'#000'} size={21} />
          </TouchableOpacity>

          <Text
            style={[
              styles.title_font,
              {
                paddingLeft: 10,
                fontWeight: title == 'ABHINAV BHARATH' ? '800' : undefined,
                color: title == 'ABHINAV BHARATH' ? '#0068E5' : '#000',
              },
            ]}>
            {title == 'Create Post Drawer'
              ? 'Create Post'
              : title == 'My Issues Drawer'
              ? 'My Issues'
              : title == 'Public Issues Drawer'
              ? 'Open Issues'
              : title == 'Help Requested Drawer'
              ? 'Help Requested'
              : title == 'Accepted Issues Drawer'
              ? 'Accepted Issues'
              : title == 'Resolved Issues Drawer'
              ? 'Resolved Issues'
              : title == 'Drawer Profile'
              ? 'Profile'
              : title == 'Create Social/Community Drawer'
              ? 'Create Social Activity'
              : title}
          </Text>
        </View>

        {title == 'ABHINAV BHARATH' ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Createpostshared', {
                  route: 'commommanDashboard',
                })
              }
              style={{
                backgroundColor: '#0068E5',
                borderRadius: 50,
                padding: '4%',
                marginRight: 10,
              }}>
              <Entypo name={'plus'} size={18} color={'#fff'} style={{}} />
            </TouchableOpacity>

            {/* <TouchableOpacity
              style={{
                backgroundColor: '#EEE',
                borderRadius: 50,
                padding: '5%',
              }}>
              <Ionicons name={'search'} size={16} color={'#000'} style={{}} />
            </TouchableOpacity> */}
          </View>
        ) : title == 'Dashboard' ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            {/* <TouchableOpacity
              onPress={() =>
                navigation.navigate('Createpostshared', {
                  route: 'header_leader_dashboard',
                })
              }
              style={{
                backgroundColor: '#0068E5',
                borderRadius: 50,
                padding: '4%',
                marginRight: 10,
              }}>
              <Entypo name={'plus'} size={18} color={'#fff'} style={{}} />
            </TouchableOpacity> */}
          </View>
        ) : title == 'My Issues Drawer' ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginRight: 10,
            }}>
            <TouchableOpacity
              onPress={() => setOpen(true)}
              style={{
                padding: '2%',
                paddingHorizontal: '3%',
                borderRadius: 5,
                borderWidth: 1,
                flexDirection: 'row',
                alignItems: 'center',
                borderColor: '#DADADA',
              }}>
              <Text
                style={{
                  color: '#000',
                  fontFamily: font_family.Inter_500.fontFamily,
                  fontSize: 11,
                }}>
                Public
              </Text>

              <Entypo
                name={'chevron-small-down'}
                size={12}
                color={'#000'}
                style={{paddingLeft: 10}}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Createpost', {route: 'header'})
              }
              style={{
                backgroundColor: '#0068E5',
                borderRadius: 50,
                padding: '4%',
                marginHorizontal: 10,
              }}>
              <Entypo name={'plus'} size={13} color={'#fff'} style={{}} />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#EEE',
                borderRadius: 50,
                padding: '4%',
              }}>
              <Ionicons name={'search'} size={13} color={'#000'} style={{}} />
            </TouchableOpacity>
          </View>
        ) : title == 'Create Post Drawer' ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          />
        ) : title == 'Public Issues Drawer' ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              marginRight: 10,
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Createpostshared', {
                  route: 'header_leader_dashboard',
                })
              }
              style={{
                backgroundColor: '#0068E5',
                borderRadius: 50,
                padding: '4%',
                marginRight: 10,
              }}>
              <Entypo name={'plus'} size={18} color={'#fff'} style={{}} />
            </TouchableOpacity>

            {/* <TouchableOpacity
              style={{
                backgroundColor: '#EEE',
                borderRadius: 50,
                padding: '5%',
              }}>
              <Ionicons name={'search'} size={16} color={'#000'} style={{}} />
            </TouchableOpacity> */}
          </View>
        ) : null}
      </View>
    );
  } else {
    console.log('header', title);

    return (
      <View
        style={[
          styles.container,
          {
            justifyContent: 'space-between',
            backgroundColor:
              title == 'Settings' || title == 'Create Event'
                ? 'rgba(0, 104, 229, 0.04)'
                : title == ''
                ? 'transparent'
                : title == 'Create Social/Community Services'
                ? '#0068E50F'
                : '#fff',
            borderBottomWidth:
              title == 'Build Team'
                ? 0.5
                : title == 'Remove Member'
                ? 0.5
                : title == 'Associated To'
                ? 0.5
                : title == 'Members'
                ? 0.5
                : title == 'Exit'
                ? 0.5
                : 0,
            paddingHorizontal:
              title == 'Build Team'
                ? '0%'
                : title == 'Remove Member'
                ? '0%'
                : title == 'Members'
                ? '0%'
                : title == 'Associated To'
                ? '3%'
                : title == 'Exit'
                ? '0%'
                : '2%',
            marginHorizontal:
              title == 'Build Team'
                ? '3%'
                : title == 'Remove Member'
                ? '3%'
                : title == 'Members'
                ? '3%'
                : title == 'Associated To'
                ? '0%'
                : title == 'Exit'
                ? '3%'
                : null,
            borderColor: '#9D9D9D',
          },
        ]}>
        <StatusBar barStyle="dark-content" backgroundColor={'#fff'} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {title == '' ? (
            <TouchableOpacity
              onPress={() =>
                route == 'Settingsshareaddrawer'
                  ? navigation.navigate('Settingsshareaddrawer')
                  : navigation.goBack()
              }
              style={{
                elevation: 5,
                marginLeft: '1%',
                backgroundColor: '#fff',
                borderWidth: 0.1,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                shadowOpacity: 0.3,
                shadowRadius: 2,
                shadowOffset: {height: 1, width: 1},
              }}>
              <AntDesign
                name="left"
                size={16}
                color={colorScheme == 'dark' ? '#000' : '#000'}
                style={{padding: '1.3%', alignSelf: 'center'}}
              />
            </TouchableOpacity>
          ) : title == 'Profile' ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('Settingsshareaddrawer')}
              style={{
                // elevation: 5,
                marginLeft: '1%',
                backgroundColor: '#fff',
                // borderWidth: 0.1,
                // borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                // shadowOpacity: 0.3,
                // shadowRadius: 2,
                // shadowOffset: {height: 1, width: 1},
              }}>
              <FontAwesome6
                name="angle-left"
                size={18}
                color={colorScheme == 'dark' ? '#000' : '#000'}
                style={{padding: '1.3%', alignSelf: 'center'}}
              />
            </TouchableOpacity>
          ) : title == 'My Accounts' ? (
            <TouchableOpacity
              onPress={() => {
                profile.u_type == 1
                  ? navigation.navigate('Home')
                  : navigation.navigate('Leaderdashboard');
              }}
              style={{
                // elevation: 5,
                marginLeft: '1%',
                backgroundColor: '#fff',
                // borderWidth: 0.1,
                // borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                // shadowOpacity: 0.3,
                // shadowRadius: 2,
                // shadowOffset: {height: 1, width: 1},
              }}>
              <FontAwesome6
                name="angle-left"
                size={18}
                color={colorScheme == 'dark' ? '#000' : '#000'}
                style={{padding: '1.3%', alignSelf: 'center'}}
              />
            </TouchableOpacity>
          ) : title == 'Create Private Activity' ? (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Leaderdashboard');
              }}
              style={{
                // elevation: 5,
                marginLeft: '1%',
                backgroundColor: '#fff',
                // borderWidth: 0.1,
                // borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                // shadowOpacity: 0.3,
                // shadowRadius: 2,
                // shadowOffset: {height: 1, width: 1},
              }}>
              <FontAwesome6
                name="angle-left"
                size={18}
                color={colorScheme == 'dark' ? '#000' : '#000'}
                style={{padding: '1.3%', alignSelf: 'center'}}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                marginLeft: '1%',
                backgroundColor: '#fff',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <FontAwesome6
                name="angle-left"
                size={18}
                color={colorScheme == 'dark' ? '#000' : '#000'}
                style={{padding: '1.3%', alignSelf: 'center'}}
              />
            </TouchableOpacity>
          )}

          {/* {title == 'Post By Me stack' ? (
            <Text
              style={{
                paddingLeft: 5,
                fontSize: 18,
                fontWeight: '600',
                color: '#000',
                marginLeft: '1%',
                alignSelf: 'center',
              }}>
              Post By Me
            </Text>
          ) : title == 'Terms of uses' ? (
            <Text
              style={{
                paddingLeft: 5,
                fontSize: 18,
                fontWeight: '600',
                color: '#000',
                marginLeft: '1%',
                alignSelf: 'center',
              }}>
              Terms of use
            </Text>
          ) : title == 'Authentication' ? null : null} */}

          {title == 'Authentication' ? null : (
            <Text
              // onPress={() => (title == 'Signup' ? navigation.goBack() : null)}
              style={{
                paddingLeft: 5,
                fontSize: 18,
                fontWeight: '600',
                color: '#000',
                marginLeft: '1%',
                alignSelf: 'center',
              }}>
              {title == 'My Issues stack'
                ? 'My Issues'
                : title == 'Terms of Uses'
                ? 'Terms of use'
                : title}
            </Text>
          )}
        </View>
        {/* Public Issues Drawer */}

        {title == 'Activities' ? (
          <Menu>
            <MenuTrigger
              style={[styles.leaderdistrictview, {marginRight: '1%'}]}>
              <Text
                style={{
                  // color: '#4A4A4A',
                  // fontFamily: font_family.Inter_400.fontFamily,
                  color: '#171717',
                  fontFamily: font_family.Inter_600.fontFamily,
                }}>
                {Area.area}
              </Text>

              <Entypo
                name={'chevron-small-down'}
                size={18}
                color={'#171717'}
                style={{alignSelf: 'center', paddingLeft: 1}}
              />
            </MenuTrigger>

            <MenuOptions customStyles={{optionsContainer: {marginTop: 36}}}>
              <View style={styles.districtDropdownView}>
                <MenuOption onSelect={() => my_consistency_filter('3')}>
                  <Text style={styles.District_option_text}>My State</Text>
                </MenuOption>

                <MenuOption onSelect={() => my_consistency_filter('2')}>
                  <Text style={styles.District_option_text}>My District</Text>
                </MenuOption>

                <MenuOption onSelect={() => my_consistency_filter('1')}>
                  <Text style={styles.District_option_text}>
                    My Constituency
                  </Text>
                </MenuOption>

                <MenuOption
                  onSelect={() =>
                    handle_select_other_area(other_area_modal_visible_state)
                  }>
                  <Text
                    style={[styles.District_option_text, {color: '#0068E5'}]}>
                    Other Area
                  </Text>
                </MenuOption>
              </View>
            </MenuOptions>
          </Menu>
        ) : null}

        {/* {title == 'Open Issues' ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Createpostshared', {
                  route: 'header_leader_dashboard',
                })
              }
              style={{
                backgroundColor: '#0068E5',
                borderRadius: 50,
                padding: '4%',
                marginRight: 10,
              }}>
              <Entypo name={'plus'} size={18} color={'#fff'} style={{}} />
            </TouchableOpacity>
          </View>
        ) : null} */}

        {title == 'Members' ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Removeteam', {user_token: user_token})
              }
              style={{
                backgroundColor: '#0068E5',
                borderRadius: 50,
                padding: '4%',
                marginRight: 10,
              }}>
              <Image
                resizeMode="stretch"
                style={{height: 20, width: 20}}
                source={require('../../../Shared/Assets/Images/build_team_list_remove.png')}
              />
            </TouchableOpacity>
          </View>
        ) : null}

        {title == 'Build Team' ? (
          <Menu>
            <MenuTrigger
              style={[styles.leaderdistrictview, {marginRight: '1%'}]}>
              <Text
                style={{
                  color: '#171717',
                  fontFamily: font_family.Inter_600.fontFamily,
                }}>
                {f_type}
              </Text>
              <Entypo
                name={'chevron-small-down'}
                size={18}
                color={'#171717'}
                style={{alignSelf: 'center', paddingLeft: 1}}
              />
            </MenuTrigger>

            <MenuOptions
              customStyles={{
                optionsContainer: {
                  marginTop: 36,
                },
              }}>
              <View style={styles.districtDropdownView}>
                <MenuOption onSelect={() => my_consistency_filter('3')}>
                  <Text style={styles.District_option_text}>My State</Text>
                </MenuOption>

                <MenuOption onSelect={() => my_consistency_filter('2')}>
                  <Text style={styles.District_option_text}>My District</Text>
                </MenuOption>

                <MenuOption onSelect={() => my_consistency_filter('1')}>
                  <Text style={styles.District_option_text}>
                    My Constituency
                  </Text>
                </MenuOption>

                <MenuOption
                  onSelect={() =>
                    handle_select_other_area(other_area_modal_visible_state)
                  }>
                  <Text
                    style={[styles.District_option_text, {color: '#0068E5'}]}>
                    Other Area
                  </Text>
                </MenuOption>
              </View>
            </MenuOptions>
          </Menu>
        ) : null}

        {title == 'My Issues' ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}></View>
        ) : null}

        {title == 'My Issues stack' ? (
          <Menu>
            <MenuTrigger style={[styles.leaderdistrictview, {right: 5}]}>
              <Text
                style={{
                  // color: '#4A4A4A',
                  // fontFamily: font_family.Inter_400.fontFamily,
                  color: '#171717',
                  fontFamily: font_family.Inter_600.fontFamily,
                }}>
                {filter_type == 'All' ? 'All Post' : filter_type}
              </Text>

              {issuetypefiltervisible == false ? (
                <Ionicons
                  name={'chevron-down-outline'}
                  size={12}
                  color={'#171717'}
                  style={{}}
                />
              ) : (
                <Ionicons
                  name={'chevron-up-outline'}
                  size={12}
                  color={'#000'}
                  style={{paddingLeft: 10}}
                />
              )}
            </MenuTrigger>

            <MenuOptions customStyles={{optionsContainer: {marginTop: 36}}}>
              <View
                style={[styles.districtDropdownView, {width: 100, right: 10}]}>
                <MenuOption
                  onSelect={() => [selected_filter('3'), selectedType('All')]}>
                  <Text style={[styles.District_option_text]}>All Post</Text>
                </MenuOption>

                <MenuOption
                  onSelect={() => [
                    selected_filter('1'),
                    selectedType('Public'),
                  ]}
                  style={[{paddingVertical: 4}]}>
                  <Text style={[styles.District_option_text]}>Public</Text>
                </MenuOption>

                <MenuOption
                  onSelect={() => [
                    selected_filter('2'),
                    selectedType('Private'),
                  ]}>
                  <Text style={[styles.District_option_text]}>Private</Text>
                </MenuOption>
              </View>
            </MenuOptions>
          </Menu>
        ) : null}

        {title == 'Resolved By' ? (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            {/* <Text style={styles.filterboxtext}>
              {filter_type == 'All' ? 'All Post' : filter_type}
            </Text>

            {issuetypefiltervisible == false ? (
              <Ionicons name={'chevron-down-outline'} />
            ) : (
              <Ionicons name={'chevron-up-outline'} />
            )} */}
          </TouchableOpacity>
        ) : null}

        {title == 'Leaders' ? (
          <Menu>
            <MenuTrigger
              style={[styles.leaderdistrictview, {marginRight: '1%'}]}>
              <Text
                style={{
                  color: '#171717',
                  fontFamily: font_family.Inter_600.fontFamily,
                }}>
                {f_type}
              </Text>

              <Entypo
                name={'chevron-small-down'}
                size={18}
                color={'#171717'}
                style={{alignSelf: 'center', paddingLeft: 1}}
              />
            </MenuTrigger>

            <MenuOptions customStyles={{optionsContainer: {marginTop: 36}}}>
              <View style={[styles.districtDropdownView, {right: 10}]}>
                <MenuOption onSelect={() => my_consistency_filter('3')}>
                  <Text style={styles.District_option_text}>My State</Text>
                </MenuOption>

                <MenuOption onSelect={() => my_consistency_filter('2')}>
                  <Text style={styles.District_option_text}>My District</Text>
                </MenuOption>

                <MenuOption onSelect={() => my_consistency_filter('1')}>
                  <Text style={styles.District_option_text}>
                    My Constituency
                  </Text>
                </MenuOption>

                <MenuOption
                  onSelect={() =>
                    handle_select_other_area(other_area_modal_visible_state)
                  }>
                  <Text
                    style={[styles.District_option_text, {color: '#0068E5'}]}>
                    Other Area
                  </Text>
                </MenuOption>
              </View>
            </MenuOptions>
          </Menu>
        ) : null}

        {title == 'My Issues' ? (
          <Menu>
            <MenuTrigger
              style={[styles.leaderdistrictview, {marginRight: '1%'}]}>
              <Text
                style={{
                  // color: '#4A4A4A',
                  // fontFamily: font_family.Inter_400.fontFamily,
                  color: '#171717',
                  fontFamily: font_family.Inter_600.fontFamily,
                }}>
                {filter_type == 'All' ? 'All Post' : filter_type}
              </Text>

              {issuetypefiltervisible == false ? (
                <Ionicons
                  name={'chevron-down-outline'}
                  size={12}
                  color={'#171717'}
                  style={{alignSelf: 'center', paddingLeft: 1}}
                />
              ) : (
                <Ionicons
                  name={'chevron-up-outline'}
                  size={12}
                  color={'#000'}
                  style={{paddingLeft: 10}}
                />
              )}
            </MenuTrigger>

            <MenuOptions customStyles={{optionsContainer: {marginTop: 36}}}>
              <View
                style={[styles.districtDropdownView, {width: 100, right: 10}]}>
                <MenuOption
                  onSelect={() => [selected_filter('3'), selectedType('All')]}>
                  <Text style={[styles.District_option_text]}>All Post</Text>
                </MenuOption>

                <MenuOption
                  onSelect={() => [
                    selected_filter('1'),
                    selectedType('Public'),
                  ]}
                  style={[{paddingVertical: 4}]}>
                  <Text style={[styles.District_option_text]}>Public</Text>
                </MenuOption>

                <MenuOption
                  onSelect={() => [
                    selected_filter('2'),
                    selectedType('Private'),
                  ]}>
                  <Text style={[styles.District_option_text]}>Private</Text>
                </MenuOption>
              </View>
            </MenuOptions>
          </Menu>
        ) : null}

        {title == 'Resolved By' ? (
          <Menu>
            <MenuTrigger style={[styles.leaderdistrictview, {right: 5}]}>
              <Text
                style={{
                  color: '#4A4A4A',
                  fontFamily: font_family.Inter_400.fontFamily,
                }}>
                {f_type}
              </Text>

              <Entypo
                name={'chevron-small-down'}
                size={18}
                color={'grey'}
                style={{alignSelf: 'center', paddingLeft: 2}}
              />
            </MenuTrigger>

            <MenuOptions customStyles={{optionsContainer: {marginTop: 36}}}>
              <View style={[styles.districtDropdownView, {right: 10}]}>
                <MenuOption onSelect={() => my_consistency_filter('3')}>
                  <Text style={styles.District_option_text}>My State</Text>
                </MenuOption>

                <MenuOption onSelect={() => my_consistency_filter('2')}>
                  <Text style={styles.District_option_text}>My District</Text>
                </MenuOption>

                <MenuOption onSelect={() => my_consistency_filter('1')}>
                  <Text style={styles.District_option_text}>
                    My Constituency
                  </Text>
                </MenuOption>

                <MenuOption
                  onSelect={() =>
                    handle_select_other_area(other_area_modal_visible_state)
                  }>
                  <Text
                    style={[styles.District_option_text, {color: '#0068E5'}]}>
                    Other Area
                  </Text>
                </MenuOption>
              </View>
            </MenuOptions>
          </Menu>
        ) : null}

        {title == 'Manifesto' ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              // backgroundColor: 'red',
            }}>
            <Menu>
              <MenuTrigger
                style={[styles.leaderdistrictview, {marginRight: 8}]}>
                <Text
                  style={{
                    color: '#171717',
                    fontFamily: font_family.Inter_600.fontFamily,
                  }}>
                  {f_type}
                </Text>

                <Entypo
                  name={'chevron-small-down'}
                  size={18}
                  color={'#171717'}
                  style={{alignSelf: 'center', paddingLeft: 1}}
                />
              </MenuTrigger>

              <MenuOptions customStyles={{optionsContainer: {marginTop: 36}}}>
                <View style={[styles.districtDropdownView, {right: 10}]}>
                  <MenuOption onSelect={() => my_consistency_filter('3')}>
                    <Text style={styles.District_option_text}>My State</Text>
                  </MenuOption>

                  <MenuOption onSelect={() => my_consistency_filter('2')}>
                    <Text style={styles.District_option_text}>My District</Text>
                  </MenuOption>

                  <MenuOption onSelect={() => my_consistency_filter('1')}>
                    <Text style={styles.District_option_text}>
                      My Constituency
                    </Text>
                  </MenuOption>

                  <MenuOption
                    onSelect={() =>
                      handle_select_other_area(other_area_modal_visible_state)
                    }>
                    <Text
                      style={[styles.District_option_text, {color: '#0068E5'}]}>
                      Other Area
                    </Text>
                  </MenuOption>
                </View>
              </MenuOptions>
            </Menu>

            {profile.u_type == 2 ? (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CreateManifesto', {
                    route: 'header_manifesto_list',
                  })
                }
                style={{
                  backgroundColor: '#0068E5',
                  borderRadius: 50,
                  padding: 4,
                  marginHorizontal: 4,
                  // marginRight: 10,
                }}>
                <Entypo name={'plus'} size={18} color={'#fff'} style={{}} />
              </TouchableOpacity>
            ) : null}
          </View>
        ) : null}

        {title == 'My Manifesto' ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              // backgroundColor: 'red',
            }}>
            {profile.u_type == 2 ? (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CreateManifesto', {
                    route: 'header_manifesto_list',
                  })
                }
                style={{
                  backgroundColor: '#0068E5',
                  borderRadius: 50,
                  padding: 4,
                  marginHorizontal: 4,
                  // marginRight: 10,
                }}>
                <Entypo name={'plus'} size={18} color={'#fff'} style={{}} />
              </TouchableOpacity>
            ) : null}
          </View>
        ) : null}

        {title == 'Survey Result' ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              // backgroundColor: 'red',
            }}>
            <Menu>
              <MenuTrigger
                style={[styles.leaderdistrictview, {marginRight: 8}]}>
                <Text
                  style={{
                    color: '#171717',
                    fontFamily: font_family.Inter_600.fontFamily,
                  }}>
                  {f_type}
                </Text>

                <Entypo
                  name={'chevron-small-down'}
                  size={18}
                  color={'#171717'}
                  style={{alignSelf: 'center', paddingLeft: 1}}
                />
              </MenuTrigger>

              <MenuOptions customStyles={{optionsContainer: {marginTop: 36}}}>
                <View style={[styles.districtDropdownView, {right: 10}]}>
                  <MenuOption onSelect={() => my_consistency_filter('3')}>
                    <Text style={styles.District_option_text}>My State</Text>
                  </MenuOption>

                  <MenuOption onSelect={() => my_consistency_filter('2')}>
                    <Text style={styles.District_option_text}>My District</Text>
                  </MenuOption>

                  <MenuOption onSelect={() => my_consistency_filter('1')}>
                    <Text style={styles.District_option_text}>
                      My Constituency
                    </Text>
                  </MenuOption>

                  <MenuOption
                    onSelect={() =>
                      handle_select_other_area(other_area_modal_visible_state)
                    }>
                    <Text
                      style={[styles.District_option_text, {color: '#0068E5'}]}>
                      Other Area
                    </Text>
                  </MenuOption>
                </View>
              </MenuOptions>
            </Menu>

            {profile.u_type == 2 ? (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CreateSurvey', {
                    route: 'header_survey_list',
                  })
                }
                style={{
                  backgroundColor: '#0068E5',
                  borderRadius: 50,
                  padding: 4,
                  marginHorizontal: 4,
                  // marginRight: 10,
                }}>
                <Entypo name={'plus'} size={18} color={'#fff'} style={{}} />
              </TouchableOpacity>
            ) : null}
          </View>
        ) : null}

        {title == 'My Survey' ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              // backgroundColor: 'red',
            }}>
            {profile.u_type == 2 ? (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CreateSurvey', {
                    route: 'header_survey_list',
                  })
                }
                style={{
                  backgroundColor: '#0068E5',
                  borderRadius: 50,
                  padding: 4,
                  marginHorizontal: 4,
                  // marginRight: 10,
                }}>
                <Entypo name={'plus'} size={18} color={'#fff'} style={{}} />
              </TouchableOpacity>
            ) : null}
          </View>
        ) : null}

        {title == 'Poll Committees' ? (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              // backgroundColor: 'red',
            }}>
            {profile.u_type == 2 ? (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CreatePoll', {
                    route: 'header_pollcommittees_list',
                  })
                }
                style={{
                  backgroundColor: '#0068E5',
                  borderRadius: 50,
                  padding: 4,
                  marginHorizontal: 4,
                  // marginRight: 10,
                }}>
                <Entypo name={'plus'} size={18} color={'#fff'} style={{}} />
              </TouchableOpacity>
            ) : null}
          </View>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '6.5%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title_font: {
    fontFamily: font_family.Lato_700.fontFamily,
    fontSize: 18,
    color: '#000',
  },
  filterboxtext: {
    fontFamily: font_family.Inter_500.fontFamily,
    color: '#000',
    fontSize: 13,
  },
  leaderdistrictview: {
    marginRight: '4%',
    flexDirection: 'row',
    padding: 6,
    paddingHorizontal: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 2,
    justifyContent: 'space-between',
    elevation: 3,
    borderWidth: 0.3,
    borderColor: '#888',
    paddingRight: 4,
    shadowColor: '#555',
    shadowOffset: {height: 0, width: 1},
    shadowOpacity: 0.2,
  },
  postbymeview: {
    width: 100,
    borderWidth: 1,
    padding: '1%',
    marginRight: '4%',
    borderColor: '#DADADA',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },

  //District Modal
  District_option_text: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: '#000',
  },
  districtDropdownView: {
    position: 'absolute',
    padding: 5,
    justifyContent: 'center',
    elevation: 5,
    borderRadius: 5,
    // top: 36,
    // right: 8,
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    shadowOpacity: 0.2,
    shadowOffset: {height: 0, width: 0.5},
  },
});
