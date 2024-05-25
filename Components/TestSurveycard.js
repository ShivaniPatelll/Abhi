import React from 'react';
import ReadMore from '@fawazahmed/react-native-read-more';
import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {font_family} from '../fonts/fonts';
import moment from 'moment';
import Entypo from 'react-native-vector-icons/Entypo';

const TestSurveycard = props => {
  const {data} = props;
  console.log('====================================');
  console.log('propssurveycard', props);
  console.log('====================================');
  // const {data} = props;

  const renderOptions = ({item}) => {
    return (
      <View style={{zIndex: 2}}>
        <View style={[styles.surveyoptionscontainer, {paddingHorizontal: 10}]}>
          <Text style={[styles.optionstext, {alignSelf: 'center'}]}>
            {item.so_options_desc}
          </Text>
          <Text
            style={[
              styles.optionstext,
              {
                alignSelf: 'center',
              },
            ]}>
            {item.vote_per}%
          </Text>
        </View>

        <View
          style={{
            backgroundColor: 'transparent',
            width: '99%',
            position: 'absolute',
            top: Platform.OS == 'ios' ? 3 : 4.5,
            justifyContent: 'center',
            // alignItems: 'center',
          }}>
          <View
            style={{
              // position: 'absolute',
              width: item.option_vote,
              paddingVertical: 20,
              marginHorizontal: 2,
              marginStart: 4,
              backgroundColor: '#0068E526',
              borderRadius: 3,
            }}
          />
        </View>
      </View>
    );
  };
  // {Question}
  const renderQuestion = ({item}) => {
    console.log('items', item);
    return (
      <View style={styles.container}>
        {/* Question */}
        <View style={styles.readmoreview}>
          <ReadMore
            seeMoreStyle={styles.seetext}
            seeLessStyle={styles.seetext}
            numberOfLines={3}
            style={[styles.questiontext, {paddingVertical: 1}]}>
            {item.sq_question}
          </ReadMore>
        </View>

        {/* Created By */}

        <View style={styles.createdbyview}>
          <Text
            style={{
              fontSize: 11,
              fontFamily: font_family.Inter_400.fontFamily,
              color: '#000',
            }}>
            Created By-
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontFamily: font_family.Inter_600.fontFamily,
              color: '#434343',
              fontWeight: '800',
            }}>
            {' '}
            {data?.survey_created_by_full_name}
          </Text>

          <Image
            resizeMode="center"
            borderRadius={20}
            style={{height: 18, width: 18, marginLeft: '2%'}}
            // source={{uri: data?.full_path_solved_by_party_logo}}
            source={{uri: data?.full_path_party_logo}}
          />
        </View>

        {/* Survey Start and End */}

        <View style={styles.startsurveyview}>
          <Text style={styles.datetext}>
            On {moment(data?.survey_start).format('DD MMM')}
          </Text>
          <Entypo name={'dot-single'} size={15} color={'#666'} />
          <Text style={styles.datetext}>
            Ends {moment(data?.survey_end_date).format('DD MMM')}
          </Text>
        </View>

        {/* Survey Options  survey_votes*/}
        <View style={{marginHorizontal: '2%', marginTop: '2%'}}>
          <FlatList
            data={item.question_options}
            renderItem={renderOptions}
            ItemSeparatorComponent={() => <View style={{height: 10}} />}
          />
        </View>

        {/* Survey Votes*/}

        <View
          style={{
            alignSelf: 'flex-end',
            marginHorizontal: '2%',
            marginTop: '2%',
          }}>
          <Text style={styles.votestext}>{item.tot_sum_vote} votes</Text>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={data?.['survey_question']}
      renderItem={renderQuestion}
      ItemSeparatorComponent={() => <View style={{height: 10}} />}
    />
  );
};

export default TestSurveycard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 14,
    backgroundColor: '#fff',
    elevation: 4,
    borderColor: '#E0E0E0',
    padding: 5,
    shadowColor: '#777',
    borderWidth: 1,
    borderRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: {height: 0, width: 1},
    paddingVertical: 10,
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
    fontWeight: '600',
  },
  optionstext: {
    fontFamily: font_family.OpenSans_600.fontFamily,
    color: '#414141',
    fontSize: 12,
    fontWeight: '600',
  },
  createdbyview: {
    zIndex: -1,
    marginHorizontal: '2%',
    marginTop: '2%',
    backgroundColor: '#F5F5F5',
    alignSelf: 'flex-start',
    padding: '1%',
    borderRadius: 20,
    paddingHorizontal: '2%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  datetext: {
    fontFamily: font_family.Inter_400.fontFamily,
    color: '#666666',
    fontSize: 11,
  },
  startsurveyview: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '2%',
    marginTop: '2%',
  },
  votestext: {
    fontFamily: font_family.Inter_500.fontFamily,
    size: 12,
    color: '#414141',
  },
  surveyoptionscontainer: {
    backgroundColor: '#fff',
    padding: 4,
    borderColor: '#E0E0E0',
    borderWidth: 1,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
  },
});
