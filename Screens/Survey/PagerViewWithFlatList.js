import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Platform,
  Dimensions,
  ImageBackground,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
// import Header from '../../../Shared/Assets/Component/Header';
import {font_family} from '../../fonts/fonts';
// import {useProfileData} from '../../../Redux/slice/profileDetail';
// import Api from '../../../Api/Api';
// import {useNavigation} from '@react-navigation/native';
import moment from 'moment';
import ReadMore from '@fawazahmed/react-native-read-more';

const screenWidth = Dimensions.get('window').width;

// const PagerViewWithFlatList = ({data}) => {
//   const [selectedItems, setSelectedItems] = useState({});
//   // const profile = useProfileData();
//   // const navigation = useNavigation();
//   const scrollViewRef = useRef();
//   const [loader, setLoader] = useState(true);
//   const [surveyDetail, setSurveyDetail] = useState();
//   const [OptionErr, setOptionerr] = useState();
//   const [currentIndex, setCurrentIndex] = useState(0);
//   // useEffect(() => {
//   //   getTakeSurvey(route?.params?.data?.s_id);
//   // }, []);

//   // function getTakeSurvey(s_id) {
//   //   var formData = {
//   //     survey_id: s_id,
//   //   };

//   //   try {
//   //     Api.SurveyDetail(formData).then(res => {
//   //       if (res.data.status == 1) {
//   //         console.log('====================================');
//   //         console.log('res.data.status', res.data.data[0]);
//   //         // eslint-disable-next-line no-const-assign
//   //         // d = res.data.data[0].end_date;
//   //         // SetStartDate(res.data.data[0].start_date);
//   //         // SetEndDate(res.data.data[0].end_date);
//   //         setSurveyDetail(res.data.data[0]);
//   //         // setLoader(false);
//   //         console.log('====================================');
//   //       } else {
//   //         // setLoader(false);
//   //         // setSurveyDetail([]);
//   //       }
//   //     });
//   //   } catch (error) {
//   //     // setLoader(false);
//   //   } finally {
//   //     // setLoader(false);
//   //     setTimeout(() => {
//   //       setLoader(false);
//   //     }, 3000);
//   //   }
//   // }
//   const handleDoneButtonClick = () => {
//     var validate_poll = true;
//     console.log('selectedItems//', Object.keys(selectedItems).length);
//     console.log('validate_poll//', validate_poll);
//     if (Object.values(selectedItems).length == 0) {
//       setOptionerr('Please Select Option');
//       validate_poll = false;
//     }
//     if (validate_poll == true) {
//       console.log('Success');
//     } else {
//       console.log('Failed');
//     }

//     //     const result = Object.entries(selectedItems).map(
//     //       ([question_id, option_id]) => ({
//     //         question_id: `${parseInt(question_id)}`,
//     //         option_id: `${option_id}`,
//     //       }),
//     //     );
//     //   if (result.length == 0) {
//     //     var formData = {
//     //       // user_token: profile.u_token,
//     //       // user_id: `${profile.u_id}`,
//     //       survey_id: `${surveyDetail.survey_id}`,
//     //       answer: result,
//     //     };
//     //     console.log('formData', formData);
//     //     try {
//     //       // Api.SubmitSurvey(formData).then(res => {
//     //       //   if (res.data.status == 1) {
//     //       //     navigation.navigate('Leaderdashboard');
//     //       //   }
//     //       // });
//     //     } catch (error) {}
//     //   }
//   };
//   const handleOptionSelect = (questionId, optionId) => {
//     setOptionerr('');
//     setSelectedItems(prevSelectedItems => ({
//       ...prevSelectedItems,
//       [questionId]: optionId,
//       // [questionName]: option,
//     }));
//   };

//   const renderitem = ({item}) => {
//     const questionId = item.sq_id;
//     const selectedOptionId = selectedItems[questionId];

//     return (
//       <View style={styles.mainContainer}>
//         <View style={styles.readmoreview}>
//           <ReadMore
//             seeMoreStyle={styles.seetext}
//             seeLessStyle={styles.seetext}
//             numberOfLines={2}
//             style={[styles.questiontext, {paddingVertical: 1}]}>
//             {item?.sq_question}
//           </ReadMore>
//         </View>
//         {/* Created By */}

//         <View style={styles.createView}>
//           <Text style={[styles.createTxt, {fontWeight: '400'}]}>
//             Created By-
//           </Text>
//           <Text
//             style={[
//               styles.createTxt,
//               {fontWeight: '700', marginHorizontal: 3},
//             ]}>
//             {/* {surveyDetail.survey_created_by_full_name} */}
//           </Text>
//           <Image
//             source={require('../../Images/bjp.png')}
//             style={{alignSelf: 'center'}}></Image>
//         </View>
//         {console.log('selectedItems', selectedItems)}
//         <FlatList
//           data={item.question_options}
//           // renderItem={renderOption}
//           // keyExtractor={item => item.id.toString()}
//           renderItem={({item: option}) => renderOption(questionId, option)}
//           // keyExtractor={option => option.id.toString()}
//         />
//         {OptionErr != '' ? (
//           <Text style={{marginHorizontal: '5%', color: 'red', marginTop: '2%'}}>
//             {OptionErr}
//           </Text>
//         ) : null}
//         {/* Votes */}
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//           <Text style={styles.votesTxt}>{item.tot_sum_vote} votes</Text>
//           <Entypo name={'dot-single'} size={15} color={'#666666'} />
//           <Text style={[styles.votesTxt, {color: '#FF000F'}]}>
//             {/* Ends {moment(surveyDetail.survey_end_date).format('DD MMM')} */}
//           </Text>
//         </View>
//       </View>
//     );
//   };
//   const renderOption = (questionId, option) => {
//     const isSelected = selectedItems[questionId] === option.id;
//     return (
//       <TouchableOpacity
//         style={styles.optionView}
//         onPress={() =>
//           handleOptionSelect(
//             questionId,
//             option.option_id,
//             option.so_options_desc,
//           )
//         }>
//         <View
//           style={[
//             styles.circle,
//             {
//               backgroundColor: isSelected ? '#0068E5' : 'white',
//             },
//           ]}
//         />
//         <Text style={styles.optionTxt}>{option.so_options_desc}</Text>
//       </TouchableOpacity>
//     );
//   };

//   const handleScroll = event => {
//     const contentOffsetX = event.nativeEvent.contentOffset.x;
//     const index = Math.floor(contentOffsetX / screenWidth);
//     // Do something with the index, such as updating pagination indicators
//   };

//   function handleCancelSurvey(page_id) {
//     // setLoader(true);
//     // var formData = {
//     //   user_id: `${profile.u_id}`,
//     //   survey_id: `${surveyDetail.survey_id}`,
//     // };

//     console.log('====================================');
//     console.log('page', page_id.survey_id);
//     console.log('====================================');

//     try {
//       // Api.CancelSurvey(formData).then(res => {
//       //   if (res.data.status == 1) {
//       //     navigation.navigate('TakeSurveyList');
//       //   }
//       // });
//     } catch (error) {
//       console.log(error);
//     } finally {
//       // setLoader(false);
//     }
//   }

//   const handleSkip = () => {
//     // Check if there are more objects in the array
//     if (currentIndex < data.length - 1) {
//       setCurrentIndex(currentIndex + 1); // Move to the next object
//     } else {
//       // Handle end of array
//       // For example, you can loop back to the beginning or display a message
//       // Here, we'll just reset the index to 0
//       setCurrentIndex(0);
//     }
//   };

//   return (
//     <SafeAreaView
//       style={{
//         flex: 1,
//         backgroundColor: '#fff',
//         top: Platform.OS == 'ios' ? -5 : 0,
//       }}>
//       {/* <Header title={'Take Survey'} /> */}
//       {/*
//       {loader == true ? (
//         <View
//           style={{
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//             backgroundColor: '#fff',
//           }}>
//           <ActivityIndicator size={'small'} color={'#0068E5'} />
//         </View>
//       ) : ( */}
//       <ScrollView
//         ref={scrollViewRef}
//         horizontal
//         pagingEnabled
//         showsHorizontalScrollIndicator={false}
//         onScroll={handleScroll}
//         scrollEventThrottle={16}>
//         {data.map((pageData, index) => (
//           <View key={index} style={styles.page}>
//             <View style={styles.title}>
//               {/* <Text style={styles.titleTxt}>{surveyDetail.survey_title} </Text> */}
//               <TouchableOpacity
//                 onPress={() => handleCancelSurvey(pageData)}
//                 style={{padding: 3}}>
//                 <Entypo name="cross" size={20} color={'#000'} />
//               </TouchableOpacity>
//             </View>
//             <View>
//               <FlatList
//                 data={pageData.survey_question}
//                 renderItem={renderitem}
//                 // keyExtractor={pageData => pageData.id.toString()}
//                 showsVerticalScrollIndicator={false}
//               />
//             </View>
//             <View style={{flexDirection: 'row', justifyContent: 'center'}}>
//               <TouchableOpacity
//                 style={styles.buttonView}
//                 onPress={handleDoneButtonClick}>
//                 <Text style={styles.buttonTxt}>Done</Text>
//               </TouchableOpacity>
//               <TouchableOpacity
//                 style={[styles.buttonView, {marginHorizontal: 8}]}
//                 onPress={handleSkip}>
//                 <Text style={styles.buttonTxt}>Skip</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         ))}
//       </ScrollView>

//       {/* )} */}
//     </SafeAreaView>
//   );
// };

const PagerViewWithFlatList = ({data, updateData}) => {
  // const {data} = params;
  console.log('data//', data);
  const [selectedItems, setSelectedItems] = useState({});
  // const profile = useProfileData();
  // const navigation = useNavigation();
  const [loader, setLoader] = useState(true);
  const [surveyDetail, setSurveyDetail] = useState();
  const [OptionErr, setOptionerr] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollViewRef = useRef();
  // const [data, setData] = useState([]);
  function handleCancelSurvey(page_id) {
    // setLoader(true);
    // var formData = {
    //   user_id: `${profile.u_id}`,
    //   survey_id: `${surveyDetail.survey_id}`,
    // };

    console.log('====================================');
    console.log('page', page_id.survey_id);
    console.log('====================================');

    try {
      // Api.CancelSurvey(formData).then(res => {
      //   if (res.data.status == 1) {
      //     navigation.navigate('TakeSurveyList');
      //   }
      // });
    } catch (error) {
      console.log(error);
    } finally {
      // setLoader(false);
    }
  }

  const handleSkip = page => {
    const newData = data.filter(item => item.survey_id !== page.survey_id);
    console.log('newData', newData);
    updateData(newData);

    if (currentIndex < newData.length - 1) {
      // const newIndex = currentIndex + 1;
      // setCurrentIndex(newIndex);
      const newIndex = data.findIndex(
        item => item.survey_id === page.survey_id,
      );
      setCurrentIndex(newIndex >= 0 ? newIndex : 0);
      console.log('newIndex', newIndex);
      scrollViewRef.current.scrollTo({
        // x: newIndex * screenWidth,
        x: (newIndex >= 0 ? newIndex : 0) * screenWidth,
        animated: true,
      });
    } else {
      setCurrentIndex(0);
      scrollViewRef.current.scrollTo({x: 0, animated: true});
    }
  };

  const renderitem = ({item}) => {
    const questionId = item.sq_id;
    const selectedOptionId = selectedItems[questionId];

    return (
      <View style={styles.mainContainer}>
        <View style={styles.readmoreview}>
          <ReadMore
            seeMoreStyle={styles.seetext}
            seeLessStyle={styles.seetext}
            numberOfLines={2}
            style={[styles.questiontext, {paddingVertical: 1}]}>
            {item?.sq_question}
          </ReadMore>
        </View>
        {/* Created By */}

        <View style={styles.createView}>
          <Text style={[styles.createTxt, {fontWeight: '400'}]}>
            Created By-
          </Text>
          <Text
            style={[
              styles.createTxt,
              {fontWeight: '700', marginHorizontal: 3},
            ]}>
            {/* {surveyDetail.survey_created_by_full_name} */}
          </Text>
          {/* <Image
            source={require('../../Images/bjp.png')}
            style={{alignSelf: 'center'}}></Image> */}
        </View>
        {console.log('selectedItems', selectedItems)}
        <FlatList
          data={item.question_options}
          // renderItem={renderOption}
          // keyExtractor={item => item.id.toString()}
          renderItem={({item: option}) => renderOption(questionId, option)}
          // keyExtractor={option => option.id.toString()}
        />
        {OptionErr != '' ? (
          <Text style={{marginHorizontal: '5%', color: 'red', marginTop: '2%'}}>
            {OptionErr}
          </Text>
        ) : null}
        {/* Votes */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.votesTxt}>{item.tot_sum_vote} votes</Text>
          <Entypo name={'dot-single'} size={15} color={'#666666'} />
          <Text style={[styles.votesTxt, {color: '#FF000F'}]}>
            {/* Ends {moment(surveyDetail.survey_end_date).format('DD MMM')} */}
          </Text>
        </View>
      </View>
    );
  };

  const renderOption = (questionId, option) => {
    const isSelected = selectedItems[questionId] === option.id;
    return (
      <TouchableOpacity
        style={styles.optionView}
        onPress={() =>
          handleOptionSelect(
            questionId,
            option.option_id,
            option.so_options_desc,
          )
        }>
        <View
          style={[
            styles.circle,
            {
              backgroundColor: isSelected ? '#0068E5' : 'white',
            },
          ]}
        />
        <Text style={styles.optionTxt}>{option.so_options_desc}</Text>
      </TouchableOpacity>
    );
  };

  const handleOptionSelect = (questionId, optionId) => {
    setOptionerr('');
    setSelectedItems(prevSelectedItems => ({
      ...prevSelectedItems,
      [questionId]: optionId,
      // [questionName]: option,
    }));
  };

  const handleDoneButtonClick = page => {
    var validate_poll = true;
    console.log('selectedItems//', Object.keys(selectedItems).length);
    console.log('validate_poll//', validate_poll);
    if (Object.values(selectedItems).length == 0) {
      setOptionerr('Please Select Option');
      validate_poll = false;
    }
    if (validate_poll == true) {
      const result = Object.entries(selectedItems).map(
        ([question_id, option_id]) => ({
          question_id: `${parseInt(question_id)}`,
          option_id: `${option_id}`,
        }),
      );
      console.log('result', result);
      var formData = {
        user_token: '1234',
        user_id: '173',
        survey_id: `${page.survey_id}`,
        answer: result,
      };
      console.log('formData', formData);
      handleSkip(page);
    } else {
      console.log('Failed');
    }

    //     const result = Object.entries(selectedItems).map(
    //       ([question_id, option_id]) => ({
    //         question_id: `${parseInt(question_id)}`,
    //         option_id: `${option_id}`,
    //       }),
    //     );
    //   if (result.length == 0) {
    //     var formData = {
    //       // user_token: profile.u_token,
    //       // user_id: `${profile.u_id}`,
    //       survey_id: `${surveyDetail.survey_id}`,
    //       answer: result,
    //     };
    //     console.log('formData', formData);
    //     try {
    //       // Api.SubmitSurvey(formData).then(res => {
    //       //   if (res.data.status == 1) {
    // handleSkip(page);
    //       //   }
    //       // });
    //     } catch (error) {}
    //   }
  };
  const screenWidth = Dimensions.get('window').width;
  // if (updateData.length == 0) {
  //   console.log('noupdateData');
  //   return (
  //     <View style={{flex: 1, backgroundColor: 'red'}}>
  //       <Image
  //         source={require('../../Shared/Assets/Images/nodatabg.png')}
  //         style={{width: 200, height: 200}}
  //         resizeMode="contain"
  //       />
  //       <Text style={{textAlign: 'center', marginTop: 10}}>
  //         No data available
  //       </Text>
  //     </View>
  //   );
  // }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
        top: Platform.OS == 'ios' ? -5 : 0,
      }}>
      {/* <Header title={'Take Survey'} /> */}
      {/*
      {loader == true ? (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
          }}>
          <ActivityIndicator size={'small'} color={'#0068E5'} />
        </View>
      ) : ( */}
      {data.length == 0 && (
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <ImageBackground
            source={require('../../Shared/Assets/Images/nodatabg.png')}
            style={styles.emptydatacontainer}>
            <Image
              resizeMode="stretch"
              source={require('../../Shared/Assets/Images/nopostfound.png')}
              style={{height: 50, width: 60}}
            />
            <Text style={styles.nodatatext}>No Survey Found</Text>
          </ImageBackground>
        </View>
      )}
      <ScrollView
        horizontal
        pagingEnabled
        ref={scrollViewRef}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        {data.map((survey, index) => (
          // <View
          //   key={index}
          //   style={{
          //     width: screenWidth,
          //     justifyContent: 'center',
          //     alignItems: 'center',
          //   }}>
          //   <Text>{survey.survey_title}</Text>
          // </View>
          <View key={index} style={styles.page}>
            <View style={styles.title}>
              {/* <Text style={styles.titleTxt}>{surveyDetail.survey_title} </Text> */}
              <TouchableOpacity
                onPress={() => handleCancelSurvey(survey)}
                style={{padding: 3}}>
                <Entypo name="cross" size={20} color={'#000'} />
              </TouchableOpacity>
            </View>
            <View>
              <FlatList
                data={survey.survey_question}
                renderItem={renderitem}
                // keyExtractor={pageData => pageData.id.toString()}
                showsVerticalScrollIndicator={false}
              />
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                style={styles.buttonView}
                onPress={() => handleDoneButtonClick(survey)}>
                <Text style={styles.buttonTxt}>Done</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.buttonView, {marginHorizontal: 8}]}
                onPress={() => handleSkip(survey)}>
                <Text style={styles.buttonTxt}>Skip</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    // padding: 15,
  },
  page: {
    width: screenWidth,
    backgroundColor: '#fff',
  },
  item: {
    width: screenWidth, // Adjust width as needed
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  titleTxt: {
    fontSize: 17,
    fontWeight: '700',
    color: '#000000',
    fontFamily: font_family.Inter_600.fontFamily,
  },
  mainContainer: {
    marginHorizontal: 15,
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  questiontxt: {
    fontSize: 15,
    fontWeight: '600',
    fontFamily: font_family.OpenSans_600.fontFamily,
    color: '#000000',
  },
  readmoreview: {
    zIndex: -1,
    marginHorizontal: '2%',
  },
  seetext: {
    color: '#0068E5',
    alignSelf: 'center',
    fontSize: 14,
    fontWeight: '700',
    fontFamily: font_family.OpenSans_600.fontFamily,
  },
  questiontext: {
    fontFamily: font_family.OpenSans_600.fontFamily,
    color: '#000',
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 19,
  },
  createView: {
    flexDirection: 'row',
    backgroundColor: '#F5F5F5',
    borderRadius: 50,
    marginVertical: 5,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    padding: 2,
  },
  createTxt: {
    fontSize: 12,
    fontFamily: font_family.Inter_400.fontFamily,
    fontWeight: '400',
    color: '#434343',
  },
  startsurveyview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '2%',
    marginTop: '2%',
  },
  datetext: {
    fontFamily: font_family.Inter_400.fontFamily,
    color: '#666666',
    fontSize: 11,
    fontWeight: '500',
  },
  optionView: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowOpacity: 0.3,
    // shadowRadius: 0.3,
    elevation: 2,
    marginVertical: 4,
    paddingVertical: 12,
    borderRadius: 5,
  },
  circle: {
    height: 14,
    width: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginHorizontal: 8,
    alignSelf: 'center',
  },
  optionTxt: {
    color: '#494949',
    fontSize: 13,
    fontWeight: '600',
    fontFamily: font_family.OpenSans_600.fontFamily,
  },
  votesTxt: {
    color: '#666666',
    fontSize: 12,
    fontWeight: '600',
    fontFamily: font_family.Inter_400.fontFamily,
    marginVertical: 5,
  },
  buttonView: {
    marginVertical: 15,
    alignSelf: 'center',
    backgroundColor: '#0068E5',
    borderRadius: 6,
    height: 33,
    width: 96,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTxt: {
    color: '#FFFFFF',
    fontSize: 15,
    fontFamily: font_family.SegoeUI_bold.font_family,
    // alignSelf: 'center',
  },
  // item: {
  //   padding: 10,
  //   borderWidth: 1,
  //   borderColor: 'black',
  //   marginVertical: 5,
  // },
  selectedItem: {
    backgroundColor: 'blue',
  },
  nodatatext: {
    fontFamily: font_family.Inter_500.fontFamily,
    color: '#000',
    paddingTop: '3%',
    fontSize: 16,
  },
  emptydatacontainer: {
    alignItems: 'center',
    height: Dimensions.get('screen').height / 1.2,
    justifyContent: 'center',
  },
});

export default PagerViewWithFlatList;
