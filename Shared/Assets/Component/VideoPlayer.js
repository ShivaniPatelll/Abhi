import React, {useRef, useState, useCallback, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Video from 'react-native-video';
import Orientation from 'react-native-orientation-locker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import VideoPlayer from 'react-native-video-controls';

const VideoPlay = ({videoSource}) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);

  console.log('VideoPlayer', videoSource);

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.props.paused = true;
        console.log('====================================');
        console.log('videoRef.current', videoRef.current);
        console.log('====================================');
        setIsPlaying(true);
      } else {
        videoRef.current.seek(0);
        // videoRef.current.play();
        videoRef.current.props.paused = false;
        setIsPlaying(false);
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoad = () => {
    console.log('handleLoad');
    setIsLoading(false);
  };

  const handleBuffering = ({isBuffering}) => {
    setIsLoading(isBuffering);
  };

  const handleError = error => {
    console.error('Video player error:', error);
    setIsLoading(false);
  };

  useEffect(() => {
    // Lock the orientation to portrait when the component mounts
    Orientation.lockToPortrait();

    // Unlock the orientation when the component unmounts
    return () => {
      Orientation.unlockAllOrientations();
    };
  }, []);

  const handleFullScreen = () => {
    if (isPlaying) {
      Orientation.lockToPortrait();
    }
  };

  return (
    <View>
      <Video
        ref={videoRef}
        source={{uri: videoSource}}
        style={styles.playerstyle}
        resizeMode="cover"
        paused={isPlaying}
        onLoadStart={handleLoadStart}
        onLoad={handleLoad}
        onBuffer={handleBuffering}
        onError={handleError}
        controls={true}
        repeat={true}
      />
      {/* <VideoPlayer
        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
        // navigator={this.props.navigator}
      /> */}

      {isLoading && (
        <View style={styles.loaderview}>
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      )}
      <TouchableOpacity
        onPress={togglePlay}
        // onLongPress={handleFullScreen}
        style={styles.action_view}>
        {
          isPlaying === true ? (
            <AntDesign
              name={'playcircleo'}
              size={40}
              color={'#fff'}
              style={{position: 'absolute'}}
            />
          ) : (
            <AntDesign
              name={'playcircleo'}
              size={40}
              color={'transparent'}
              style={{position: 'absolute'}}
            />
          ) // You can replace this with your own play icon
        }
      </TouchableOpacity>
    </View>
  );
};

export default VideoPlay;

const styles = StyleSheet.create({
  action_view: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderview: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  playerstyle: {
    width: '100%',
    height: '100%',
  },
});
