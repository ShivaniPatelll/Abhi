import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Modal,
  Dimensions,
  PanResponder,
  Animated,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoPlayer from './VideoPlayer';

const VideoModal = props => {
  const {visible, onclose, source} = props;
  console.log('VideoModal', source);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onclose}>
      <View style={[styles.modalContainer, {justifyContent: 'flex-start'}]}>
        <TouchableOpacity onPress={onclose} style={styles.close_btn}>
          <Ionicons name={'close-outline'} color={'#fff'} size={30} />
        </TouchableOpacity>

        <View style={[styles.modalContainer, {backgroundColor: 'transparent'}]}>
          <View style={styles.videoview}>
            <VideoPlayer videoSource={source} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export {VideoModal};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    width: '100%',
    // flex:1,
    backgroundColor: '#000',
    // alignItems: 'center',
    justifyContent: 'center',
  },
  videoview: {
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width,
    height: '35%',
    alignSelf: 'center',
  },
  close_btn: {
    top: 5,
    // position: 'absolute',
    alignSelf: 'flex-end',
    paddingHorizontal: '5%',
    paddingTop: '2%',
  },
});
