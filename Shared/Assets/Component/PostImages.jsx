import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
// import Header from "../Assets/CSS/Header";
import AntDesign from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';

const PostImages = props => {
  const {source, onLoadEnd} = props;

  const parts = source.split('.');
  const extension = parts[parts.length - 1];
  console.log('extension', extension);

  console.log('PostImages', source);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <FastImage
        style={styles.image_style}
        resizeMode="cover"
        source={{
          uri: source,
        }}
        onLoadEnd={onLoadEnd}
      />

      {extension == 'mp4' ? (
        <AntDesign
          name={'playcircleo'}
          size={40}
          color={'#fff'}
          style={{position: 'absolute'}}
        />
      ) : null}
    </View>
  );
};

export {PostImages};

const styles = StyleSheet.create({
  image_style: {
    height: '100%',
    width: '100%',
  },
});
