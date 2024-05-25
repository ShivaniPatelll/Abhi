import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NotificationCard} from './NotificationCard';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
const Notification = () => {
  // const navigation = useNavigation();
  const DATA = [
    {
      id: 25,
      user_token: 'rLlPuztwtGGQWbyQSC21706594751167',
      device_type: 0,
      message: 'New Survey Added',
      status: 1,
      created_at: '2023-01-10T09:55:44.000Z',
    },
    {
      id: 23,
      user_token: 'rLlPuztwtGGQWbyQSC21706594751167',
      device_type: 0,
      message: 'New Survey Added',
      status: 1,
      created_at: '2024-03-09T09:55:44.000Z',
    },
    {
      id: 21,
      user_token: 'rLlPuztwtGGQWbyQSC21706594751167',
      device_type: 0,
      message: 'New Survey Added',
      status: 1,
      created_at: '2024-03-11T06:54:14.853Z',
    },
    {
      id: 9,
      user_token: 'rLlPuztwtGGQWbyQSC21706594751167',
      device_type: 0,
      message: 'New Survey Added',
      status: 1,
      created_at: '2024-03-11T05:55:44.000Z',
    },
  ];
  const renderitem = ({item}) => {
    // const duration = moment.duration(moment().diff(moment(item.created_at)));
    // const days = duration.asDays();
    // const weeks = duration.asWeeks();
    // let displayTime;
    // if (days < 7) {
    //   displayTime = `${Math.floor(days)}d`;
    // } else {
    //   displayTime = `${Math.floor(weeks)}w`;
    // }
    const parsedDate = moment(item.created_at);
    const currentDate = moment();
    // Calculate the duration
    const duration = moment.duration(currentDate.diff(parsedDate));
    // Get the individual components of the duration
    const years = duration.years();
    const months = duration.months();
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    // Create a formatted string based on the duration
    let formattedString = '';
    if (years > 0) {
      formattedString += `${years}yr `;
    } else if (months > 0) {
      formattedString += `${months}mo `;
    } else if (days > 0) {
      formattedString += `${days}d `;
    } else if (hours > 0) {
      formattedString += `${hours}hr `;
    } else if (minutes > 0) {
      formattedString += `${minutes}m `;
    } else if (seconds > 0) {
      formattedString += `${seconds}s `;
    }

    return (
      <View style={styles.container}>
        <NotificationCard title={item?.message} time={formattedString.trim()} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={DATA} renderItem={renderitem} />
      {/* <Button
        title="ScreenA"
        onPress={() => {
          navigation.navigate('ScreenA');
        }}
      /> */}
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
