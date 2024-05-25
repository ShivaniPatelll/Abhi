// ScreenA.js
import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

const ScreenA = () => {
  const route = useRoute();
  const paramFromScreenB = route.params?.paramFromScreenB;

  return (
    <View>
      <Text>Parameter from Screen B: {paramFromScreenB}</Text>
    </View>
  );
};

export default ScreenA;
