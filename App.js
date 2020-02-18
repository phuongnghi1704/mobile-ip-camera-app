/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {LivePlayer} from "react-native-live-stream";
import {Video} from 'react-native-video';

const App: () => React$Node = () => {
  let rtspLink = 'rtsp://170.93.143.139/rtplive/470011e600ef003a004ee33696235daa';
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          <View>
          {/* <Video 
          source={{uri: rtspLink}}   // Can be a URL or a local file.
          
            // ref={(ref) => {
            //   this.player = ref
            // }}                                      // Store reference
            // onBuffer={this.onBuffer}                // Callback when remote video is buffering
            // onError={this.videoError}               // Callback when video cannot be loaded
            // style={styles.backgroundVideo}
            
          /> */}
          </View>
          <Text style={styles.sectionTitle}>Streaming using react-native-live-stream library</Text>
          <LivePlayer 
            source={{uri:rtspLink}}
            // ref={(ref) => {
            //     this.player = ref
            // }}
            style={styles.video}
            paused={false}
            muted={false}
            bufferTime={300}
            maxBufferTime={1000}
            resizeMode={"contain"}
            onLoading={()=>{console.log('LivePlayer_onLoading....')}}
            onLoad={()=>{console.log('LivePlayer_onLoad')}}
            onEnd={()=>{console.log('LivePlayer_onEnd')}}
            />
          
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    paddingHorizontal:12,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  video:{
    height: 200, 
    flex: 1, 
    marginVertical:12
  }
});

export default App;
