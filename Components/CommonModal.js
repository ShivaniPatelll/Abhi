import React, {useState, useCallback} from 'react';
import {FlatList, Platform, SafeAreaView, StyleSheet, View} from 'react-native';
import Surveycard from './TestSurveycard';

export default function SurveyResult({route}) {
  // const data = [
  //   {
  //     survey_id: 1,
  //     survey_created_by: 'James Charlie',
  //     survey_title: 'Survey Test 1',
  //     survey_created_by_party_logo: require('../Images/Assembly.png'),
  //     survey_start_date: '22-01-2024',
  //     survey_end_date: '25-01-2024',
  //     survey_question:
  //       'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
  //     survey_options: [
  //       {option_name: 'Option 1', option_vote: '100%'},
  //       {option_name: 'Option 2', option_vote: '20%'},
  //       {option_name: 'Option 3', option_vote: '30%'},
  //       {option_name: 'Option 4', option_vote: '40%'},
  //     ],
  //     survey_votes: '2k',
  //   },
  //   {
  //     survey_id: 2,
  //     survey_created_by: 'Stuart Hogg',
  //     survey_created_by_party_logo: require('../Images/Assembly.png'),
  //     survey_start_date: Date(2024, 1, 22),
  //     survey_end_date: Date(2024, 1, 25),
  //     survey_title: 'Survey Test 2',
  //     survey_question:
  //       'Which party do you support to handle sensitive topics such as national security?',
  //     survey_options: [
  //       {option_name: 'Option 1', option_vote: '40%'},
  //       {option_name: 'Option 2', option_vote: '30%'},
  //       {option_name: 'Option 3', option_vote: '20%'},
  //       {option_name: 'Option 4', option_vote: '10%'},
  //     ],
  //     survey_votes: '2k',
  //   },
  // ];

  // const Data = [
  //   {
  //     survey_id: 1,
  //     survey_title: 'Survey Title 1',
  //     survey_created_by: 'Stuart Hogg',
  //     survey_created_by_party_logo: require('../../../Shared/Assets/Images/aap_logo_small.png'),
  //     survey_start_date: Date(2024, 1, 22),
  //     survey_end_date: Date(2024, 1, 25),

  //     survey_questions: [
  //       {
  //         survey_que_id: 1,
  //         survey_que:
  //           'Which party do you support to handle sensitive topics such as national security?',
  //         survey_options: [
  //           {option_name: 'Option 1', option_vote: '40%'},
  //           {option_name: 'Option 2', option_vote: '30%'},
  //           {option_name: 'Option 3', option_vote: '20%'},
  //           {option_name: 'Option 4', option_vote: '10%'},
  //         ],
  //       },
  //       {
  //         survey_que_id: 2,
  //         survey_que:
  //           'Which party do you support to handle sensitive topics such as national security?',
  //         survey_options: [
  //           {option_name: 'Option 1', option_vote: '60%'},
  //           {option_name: 'Option 2', option_vote: '20%'},
  //           {option_name: 'Option 3', option_vote: '10%'},
  //           {option_name: 'Option 4', option_vote: '10%'},
  //         ],
  //       },
  //     ],
  //     survey_votes: '2k',
  //   },
  //   {
  //     survey_id: 2,
  //     survey_title: 'Survey Title 2',
  //     survey_created_by: 'James Charlie',
  //     survey_created_by_party_logo: require('../../../Shared/Assets/Images/bjp_logo_small.png'),
  //     survey_start_date: Date(2024, 1, 22),
  //     survey_end_date: Date(2024, 1, 25),

  //     survey_questions: [
  //       {
  //         survey_que_id: 1,
  //         survey_que:
  //           'Which party do you support to handle sensitive topics such as national security?',
  //         survey_options: [
  //           {option_name: 'Option 1', option_vote: '40%'},
  //           {option_name: 'Option 2', option_vote: '30%'},
  //           {option_name: 'Option 3', option_vote: '20%'},
  //           {option_name: 'Option 4', option_vote: '10%'},
  //         ],
  //       },
  //       // {
  //       //   survey_que_id: 2,
  //       //   survey_que:
  //       //     'Which party do you support to handle sensitive topics such as national security?',
  //       //   survey_options: [
  //       //     {option_name: 'Option 1', option_vote: '60%'},
  //       //     {option_name: 'Option 2', option_vote: '20%'},
  //       //     {option_name: 'Option 3', option_vote: '10%'},
  //       //     {option_name: 'Option 4', option_vote: '10%'},
  //       //   ],
  //       // },
  //     ],
  //     survey_votes: '2k',
  //   },
  // ];

  // const data = [
  //   {
  //     survey_id: 4,
  //     survey_title: 'test create survey',
  //     survey_created_by_full_name: 'Harish',
  //     p_logo: 'ind_logo.png',
  //     survey_end_date: '2024-03-06T00:00:00.000Z',
  //     full_path_party_logo:
  //       'https://abhinavbharath.org//upload/images/party_logo/ind_logo.png',
  //     survey_question: [
  //       {
  //         sq_id: 7,
  //         sq_question: 'test question 1?',
  //         surevey_options: [
  //           {
  //             option_id: 21,
  //             so_options_desc: 'abc',
  //             so_option_vote: '129,129,129',
  //           },
  //           {
  //             option_id: 22,
  //             so_options_desc: 'def',
  //             so_option_vote: '',
  //           },
  //           {
  //             option_id: 23,
  //             so_options_desc: 'ghi',
  //             so_option_vote: '',
  //           },
  //         ],
  //       },
  //       {
  //         sq_id: 8,
  //         sq_question: 'test question 2?',
  //         surevey_options: [
  //           {
  //             option_id: 24,
  //             so_options_desc: 'jkl',
  //             so_option_vote: '129,129,129',
  //           },
  //           {
  //             option_id: 25,
  //             so_options_desc: 'mno',
  //             so_option_vote: '',
  //           },
  //           {
  //             option_id: 26,
  //             so_options_desc: 'pqr',
  //             so_option_vote: '',
  //           },
  //           {
  //             option_id: 27,
  //             so_options_desc: 'stu',
  //             so_option_vote: '',
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  const data = [
    {
      survey_id: 1,
      survey_title: 'Survey 1',
      survey_created_by_full_name: 'Harish',
      p_logo: 'ind_logo.png',
      survey_end_date: '2024-03-19T00:00:00.000Z',
      full_path_party_logo:
        'https://abhinavbharath.org//upload/images/party_logo/ind_logo.png',
      survey_question: [
        {
          sq_id: 1,
          sq_question: 'Whom do you want to elect?',
          question_options: [
            {
              option_id: 1,
              so_options_desc: ' Jason Roy',
              total_count_vote: 0,
              vote_per: 0,
            },
            {
              option_id: 2,
              so_options_desc: 'Andrew Joseph',
              total_count_vote: 0,
              vote_per: 0,
            },
            {
              option_id: 3,
              so_options_desc: 'Chris Paul',
              total_count_vote: 0,
              vote_per: 0,
            },
          ],
          tot_sum_vote: 0,
        },
        {
          sq_id: 2,
          sq_question:
            'Which party do you support to handle sensitive topics such as national security?',
          question_options: [
            {
              option_id: 4,
              so_options_desc: 'Democrats',
              total_count_vote: 0,
              vote_per: 0,
            },
            {
              option_id: 5,
              so_options_desc: 'Republicans',
              total_count_vote: 0,
              vote_per: 0,
            },
            {
              option_id: 6,
              so_options_desc: "Don't know",
              total_count_vote: 0,
              vote_per: 0,
            },
            {
              option_id: 7,
              so_options_desc: "i don't support any party",
              total_count_vote: 0,
              vote_per: 0,
            },
          ],
          tot_sum_vote: 0,
        },
      ],
    },
  ];
  const [other_area_modal_visible, setother_area_modal_visible] =
    useState(false);

  const renderSurveyCard = useCallback(({item, index}) => {
    return <Surveycard data={item} />;
  }, []);
  const closeOtherAreaModal = () => {
    // setModalVisible(false);

    // setvalue_state_modal('');
    // setvalue_district_modal('');
    // setvalue_cons_modal('');

    // setvalue_state_id_modal('');
    // setvalue_district_id_modal('');
    // setvalue_cons_id_modal('');

    // setopen_state_modal(false);

    setother_area_modal_visible(false);
  };
  return (
    <SafeAreaView style={styles.safeareacontainer}>
      <View style={styles.container}>
        <FlatList
          style={{}}
          contentContainerStyle={{paddingVertical: 10}}
          keyExtractor={i => i.survey_id}
          // data={surveyData}
          data={data}
          renderItem={renderSurveyCard}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeareacontainer: {
    flex: 1,
    backgroundColor: '#fff',
    top: Platform.OS == 'ios' ? -5 : 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
