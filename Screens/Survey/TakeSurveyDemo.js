// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import {font_family} from '../../fonts/fonts';

// export default function TakeSurvey() {
//   const [selectedItems, setSelectedItems] = useState({});

//   const data = [
//     {
//       id: 1,
//       question: 'Whom do you want to elect?',
//       createdName: 'James Charlie',
//       answer: [
//         {id: 1, title: 'Option 1'},
//         {id: 2, title: 'Option 2'},
//         {id: 3, title: 'Option 3'},
//         {id: 4, title: 'Option 4'},
//       ],
//       votes: '341',
//     },
//     {
//       id: 2,
//       question:
//         'Which party do you support to handle sensitive topics such as national security?',
//       createdName: 'James Charlie',
//       answer: [
//         {id: 1, title: 'Option 5'},
//         {id: 2, title: 'Option 6'},
//         {id: 3, title: 'Option 7'},
//         {id: 4, title: 'Option 8'},
//       ],
//       votes: '341',
//     },
//     {
//       id: 3,
//       question: 'Whom do you want to elect?',
//       createdName: 'James Charlie',
//       answer: [
//         {id: 1, title: 'Option 9'},
//         {id: 2, title: 'Option 10'},
//         {id: 3, title: 'Option 11'},
//         {id: 4, title: 'Option 12'},
//       ],
//       votes: '341',
//     },
//     {
//       id: 4,
//       question: 'Whom do you want to elect?',
//       createdName: 'James Charlie',
//       answer: [
//         {id: 1, title: 'Option 13'},
//         {id: 2, title: 'Option 14'},
//         {id: 3, title: 'Option 15'},
//         {id: 4, title: 'Option 16'},
//       ],
//       votes: '341',
//     },
//     {
//       id: 5,
//       question: 'Whom do you want to elect?',
//       createdName: 'James Charlie',
//       answer: [
//         {id: 1, title: 'Option 17'},
//         {id: 2, title: 'Option 18'},
//         {id: 3, title: 'Option 19'},
//         {id: 4, title: 'Option 20'},
//       ],
//       votes: '341',
//     },
//   ];

//   const handleOptionSelect = (questionId, optionId) => {
//     setSelectedItems(prevSelectedItems => ({
//       ...prevSelectedItems,
//       [questionId]: optionId,
//       // [questionName]: option,
//     }));
//   };

//   const renderitem = ({item}) => {
//     const questionId = item.id; // Assuming id is unique for each question
//     const selectedOptionId = selectedItems[questionId];

//     return (
//       <View style={styles.mainContainer}>
//         <Text style={styles.questiontxt}>{item.question}</Text>
//         <View style={styles.createView}>
//           <Text style={[styles.createTxt, {fontWeight: '400'}]}>
//             Created By-
//           </Text>
//           <Text
//             style={[
//               styles.createTxt,
//               {fontWeight: '700', marginHorizontal: 3},
//             ]}>
//             {item.createdName}
//           </Text>
//           <Image
//             source={require('../../Images/bjp.png')}
//             style={{alignSelf: 'center'}}></Image>
//         </View>
//         {console.log('selectedItems', selectedItems)}
//         <FlatList
//           data={item.answer}
//           // renderItem={renderOption}
//           // keyExtractor={item => item.id.toString()}
//           renderItem={({item: option}) => renderOption(questionId, option)}
//           keyExtractor={option => option.id.toString()}
//         />
//         <View style={{flexDirection: 'row'}}>
//           <Text style={styles.votesTxt}>{item.votes} votes</Text>
//           <Text style={{marginHorizontal: 4}}>.</Text>
//           <Text style={[styles.votesTxt, {color: '#FF000F'}]}>Ends 25 Jan</Text>
//         </View>
//       </View>
//     );
//   };
//   const renderOption = (questionId, option) => {
//     const isSelected = selectedItems[questionId] === option.id;

//     return (
//       <TouchableOpacity
//         style={styles.optionView}
//         onPress={() => handleOptionSelect(questionId, option.id, option.title)}>
//         <View
//           style={[
//             styles.circle,
//             {
//               backgroundColor: isSelected ? '#0068E5' : 'white',
//             },
//           ]}
//         />
//         <Text style={styles.optionTxt}>{option.title}</Text>
//       </TouchableOpacity>
//     );
//   };

//   const handleDoneButtonClick = () => {
//     const result = Object.entries(selectedItems).map(
//       ([question_id, option_id]) => ({
//         question_id: parseInt(question_id),
//         option_id: option_id,
//       }),
//     );

//     // Now you can perform any action with the selected titles
//     console.log('Selected Titles:', result);

//     var formData = {
//       user_token: 123,
//       user_id: '123',
//       survey_id: '123',
//       answer: result,
//     };
//     console.log('formData', formData);
//   };

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <ScrollView>
//         <View style={styles.container}>
//           <View style={styles.title}>
//             <Text style={styles.titleTxt}>Survey Title </Text>
//             <AntDesign name="close" size={20} />
//           </View>
//           <FlatList
//             data={data}
//             renderItem={renderitem}
//             keyExtractor={item => item.id.toString()}
//             showsVerticalScrollIndicator={false}
//           />
//           <TouchableOpacity
//             style={styles.buttonView}
//             onPress={handleDoneButtonClick}>
//             <Text style={styles.buttonTxt}>Done</Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFF',
//     // padding: 15,
//   },
//   title: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginHorizontal: 15,
//   },
//   titleTxt: {
//     fontSize: 17,
//     fontWeight: '700',
//     color: '#000000',
//     fontFamily: font_family.Inter_600.fontFamily,
//   },
//   mainContainer: {
//     marginHorizontal: 15,
//     marginVertical: 8,
//     paddingVertical: 8,
//     paddingHorizontal: 10,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 4,
//     shadowColor: '#00000',
//     shadowOffset: {
//       width: 10,
//       height: 10,
//     },
//     shadowOpacity: 5,
//     // shadowRadius: 4,
//     elevation: 2,
//   },
//   questiontxt: {
//     fontSize: 15,
//     fontWeight: '600',
//     fontFamily: font_family.OpenSans_600.fontFamily,
//     color: '#000000',
//   },
//   createView: {
//     flexDirection: 'row',
//     backgroundColor: '#F5F5F5',
//     borderRadius: 50,
//     marginVertical: 5,
//     alignSelf: 'flex-start',
//     paddingHorizontal: 8,
//     padding: 4,
//   },
//   createTxt: {
//     fontSize: 12,
//     fontFamily: font_family.Inter_400.fontFamily,
//     fontWeight: '400',
//     color: '#434343',
//   },
//   optionView: {
//     backgroundColor: '#FFFFFF',
//     flexDirection: 'row',
//     shadowColor: '#000000',
//     shadowOffset: {
//       width: 1,
//       height: 1,
//     },
//     shadowOpacity: 0.3,
//     // shadowRadius: 0.3,
//     elevation: 1,
//     marginVertical: 4,
//     paddingVertical: 7,
//     borderRadius: 5,
//   },
//   circle: {
//     height: 14,
//     width: 14,
//     borderRadius: 7,
//     borderWidth: 1,
//     borderColor: '#E0E0E0',
//     marginHorizontal: 8,
//     alignSelf: 'center',
//   },
//   optionTxt: {
//     color: '#494949',
//     fontSize: 13,
//     fontWeight: '600',
//     fontFamily: font_family.OpenSans_600.fontFamily,
//   },
//   votesTxt: {
//     color: '#666666',
//     fontSize: 12,
//     fontWeight: '600',
//     fontFamily: font_family.Inter_400.fontFamily,
//     marginVertical: 5,
//   },
//   buttonView: {
//     marginVertical: 15,
//     alignSelf: 'center',
//     backgroundColor: '#0068E5',
//     borderRadius: 6,
//     height: 33,
//     width: 96,
//     justifyContent: 'center',
//   },
//   buttonTxt: {
//     color: '#FFFFFF',
//     fontSize: 15,
//     fontFamily: font_family.SegoeUI_bold.font_family,
//     alignSelf: 'center',
//   },
//   item: {
//     padding: 10,
//     borderWidth: 1,
//     borderColor: 'black',
//     marginVertical: 5,
//   },
//   selectedItem: {
//     backgroundColor: 'blue',
//   },
// });

import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import PagerViewWithFlatList from './PagerViewWithFlatList';

export default function TakeSurveyDemo() {
  const [data, setData] = useState([
    {
      survey_id: 8,
      survey_title: 'Survey 4',
      survey_created_by_full_name: 'Harish',
      p_logo: 'ind_logo.png',
      survey_end_date: '2024-03-04T00:00:00.000Z',
      full_path_party_logo:
        'https://abhinavbharath.org//upload/images/party_logo/ind_logo.png',
      survey_question: [
        {
          sq_id: 9,
          sq_question: 'What your election process?',
          total_no_of_vote: 0,
          question_options: [
            {
              option_id: 23,
              so_options_desc: 'Options 7',
              total_count_vote: 1,
              vote_per: 50,
            },
            {
              option_id: 24,
              so_options_desc: 'Options 8',
              total_count_vote: 1,
              vote_per: 50,
            },
          ],
          tot_sum_vote: 2,
        },
      ],
    },
    {
      survey_id: 9,
      survey_title: 'District ',
      survey_created_by_full_name: 'Harish',
      p_logo: 'ind_logo.png',
      survey_end_date: '2024-04-04T00:00:00.000Z',
      full_path_party_logo:
        'https://abhinavbharath.org//upload/images/party_logo/ind_logo.png',
      survey_question: [
        {
          sq_id: 10,
          sq_question: 'Election',
          total_no_of_vote: 0,
          question_options: [
            {
              option_id: 25,
              so_options_desc: 'Op 1',
              total_count_vote: 0,
              vote_per: 0,
            },
            {
              option_id: 26,
              so_options_desc: 'Op2',
              total_count_vote: 0,
              vote_per: 0,
            },
          ],
          tot_sum_vote: 0,
        },
      ],
    },
    {
      survey_id: 10,
      survey_title: 'Election12 ',
      survey_created_by_full_name: 'Harish',
      p_logo: 'ind_logo.png',
      survey_end_date: '2024-04-04T00:00:00.000Z',
      full_path_party_logo:
        'https://abhinavbharath.org//upload/images/party_logo/ind_logo.png',
      survey_question: [
        {
          sq_id: 10,
          sq_question: 'Election11',
          total_no_of_vote: 0,
          question_options: [
            {
              option_id: 25,
              so_options_desc: 'Op 1',
              total_count_vote: 0,
              vote_per: 0,
            },
            {
              option_id: 26,
              so_options_desc: 'Op2',
              total_count_vote: 0,
              vote_per: 0,
            },
          ],
          tot_sum_vote: 0,
        },
      ],
    },
  ]);
  // const datas =
  // [
  //   {
  //     survey_id: 8,
  //     survey_title: 'Survey 4',
  //     survey_created_by_full_name: 'Harish',
  //     p_logo: 'ind_logo.png',
  //     survey_end_date: '2024-03-04T00:00:00.000Z',
  //     full_path_party_logo:
  //       'https://abhinavbharath.org//upload/images/party_logo/ind_logo.png',
  //     survey_question: [
  //       {
  //         sq_id: 9,
  //         sq_question: 'What your election process?',
  //         total_no_of_vote: 0,
  //         question_options: [
  //           {
  //             option_id: 23,
  //             so_options_desc: 'Options 7',
  //             total_count_vote: 1,
  //             vote_per: 50,
  //           },
  //           {
  //             option_id: 24,
  //             so_options_desc: 'Options 8',
  //             total_count_vote: 1,
  //             vote_per: 50,
  //           },
  //         ],
  //         tot_sum_vote: 2,
  //       },
  //     ],
  //   },
  //   {
  //     survey_id: 9,
  //     survey_title: 'District ',
  //     survey_created_by_full_name: 'Harish',
  //     p_logo: 'ind_logo.png',
  //     survey_end_date: '2024-04-04T00:00:00.000Z',
  //     full_path_party_logo:
  //       'https://abhinavbharath.org//upload/images/party_logo/ind_logo.png',
  //     survey_question: [
  //       {
  //         sq_id: 10,
  //         sq_question: 'Election',
  //         total_no_of_vote: 0,
  //         question_options: [
  //           {
  //             option_id: 25,
  //             so_options_desc: 'Op 1',
  //             total_count_vote: 0,
  //             vote_per: 0,
  //           },
  //           {
  //             option_id: 26,
  //             so_options_desc: 'Op2',
  //             total_count_vote: 0,
  //             vote_per: 0,
  //           },
  //         ],
  //         tot_sum_vote: 0,
  //       },
  //     ],
  //   },
  //   {
  //     survey_id: 9,
  //     survey_title: 'Election12 ',
  //     survey_created_by_full_name: 'Harish',
  //     p_logo: 'ind_logo.png',
  //     survey_end_date: '2024-04-04T00:00:00.000Z',
  //     full_path_party_logo:
  //       'https://abhinavbharath.org//upload/images/party_logo/ind_logo.png',
  //     survey_question: [
  //       {
  //         sq_id: 10,
  //         sq_question: 'Election11',
  //         total_no_of_vote: 0,
  //         question_options: [
  //           {
  //             option_id: 25,
  //             so_options_desc: 'Op 1',
  //             total_count_vote: 0,
  //             vote_per: 0,
  //           },
  //           {
  //             option_id: 26,
  //             so_options_desc: 'Op2',
  //             total_count_vote: 0,
  //             vote_per: 0,
  //           },
  //         ],
  //         tot_sum_vote: 0,
  //       },
  //     ],
  //   },
  // ];

  const updateData = newData => {
    console.log('====================================');
    console.log('updateData', newData);
    // const s = data.filter(i => i.survey_id != newData);
    // console.log('s', s);
    // console.log('====================================');
    setData(newData);
  };
  return (
    <View style={styles.container}>
      <PagerViewWithFlatList data={data} updateData={updateData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// import React, {useState, useRef} from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   Dimensions,
// } from 'react-native';

// const surveyData = [
//   {
//     survey_id: 8,
//     survey_title: 'Survey 4',
//     survey_created_by_full_name: 'Harish',
//     p_logo: 'ind_logo.png',
//     survey_end_date: '2024-03-04T00:00:00.000Z',
//     full_path_party_logo:
//       'https://abhinavbharath.org//upload/images/party_logo/ind_logo.png',
//     survey_question: [
//       {
//         sq_id: 9,
//         sq_question: 'What your election process?',
//         total_no_of_vote: 0,
//         question_options: [
//           {
//             option_id: 23,
//             so_options_desc: 'Options 7',
//             total_count_vote: 1,
//             vote_per: 50,
//           },
//           {
//             option_id: 24,
//             so_options_desc: 'Options 8',
//             total_count_vote: 1,
//             vote_per: 50,
//           },
//         ],
//         tot_sum_vote: 2,
//       },
//     ],
//   },
//   {
//     survey_id: 9,
//     survey_title: 'District ',
//     survey_created_by_full_name: 'Harish',
//     p_logo: 'ind_logo.png',
//     survey_end_date: '2024-04-04T00:00:00.000Z',
//     full_path_party_logo:
//       'https://abhinavbharath.org//upload/images/party_logo/ind_logo.png',
//     survey_question: [
//       {
//         sq_id: 10,
//         sq_question: 'Election',
//         total_no_of_vote: 0,
//         question_options: [
//           {
//             option_id: 25,
//             so_options_desc: 'Op 1',
//             total_count_vote: 0,
//             vote_per: 0,
//           },
//           {
//             option_id: 26,
//             so_options_desc: 'Op2',
//             total_count_vote: 0,
//             vote_per: 0,
//           },
//         ],
//         tot_sum_vote: 0,
//       },
//     ],
//   },
// ];

// const SurveyComponent = ({surveyData}) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const scrollViewRef = useRef();

//   const handleSkip = () => {
//     // Check if there are more surveys in the array
//     if (currentIndex < surveyData.length - 1) {
//       setCurrentIndex(currentIndex + 1); // Move to the next survey
//       // Scroll to the next survey
//       scrollViewRef.current.scrollTo({
//         x: currentIndex * screenWidth,
//         animated: true,
//       });
//     } else {
//       // Handle end of surveys
//       // Here, we'll just reset the index to 0
//       setCurrentIndex(0);
//       // Scroll back to the first survey
//       scrollViewRef.current.scrollTo({x: 0, animated: true});
//     }
//   };

//   const screenWidth = Dimensions.get('window').width;

//   return (
//     <View style={{flex: 1}}>
//       <ScrollView
//         horizontal
//         pagingEnabled
//         ref={scrollViewRef}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={{flexGrow: 1}}>
//         {surveyData.map((survey, index) => (
//           <View
//             key={index}
//             style={{
//               width: screenWidth,
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <Text>{survey.survey_title}</Text>
//           </View>
//         ))}
//       </ScrollView>
//       <TouchableOpacity
//         onPress={handleSkip}
//         style={{position: 'absolute', bottom: 20, right: 20}}>
//         <Text>Skip</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default SurveyComponent;
