// ScreenB.js
import React from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ScreenB = () => {
  const navigation = useNavigation();

  const goBackWithParam = () => {
    // Pass parameter to the previous screen using navigation state
    navigation.goBack({
      params: {paramFromScreenB: 'Hello from Screen B'},
    });
  };

  return (
    <View>
      <Button title="Go back to Screen A" onPress={goBackWithParam} />
    </View>
  );
};

export default ScreenB;
