import React from 'react';
import {View, ActivityIndicator, StyleSheet, Modal} from 'react-native';

export default function FeedbackLoader(props) {
  const {visible, closeModal} = props;
  console.log('FeedbackLoader', props);
  if (visible == true) {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={closeModal}>
        <View style={[styles.modalIssueCatContainer]}>
          <ActivityIndicator size={'small'} color={'#fff'} />
        </View>
      </Modal>
    );
  } else {
    null;
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalIssueCatContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    // top: '12%',
    // borderRadius: 10,
  },
});
