import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Fragment } from 'react-native-elements';
import { Audio } from 'expo-av';

export default class PhonicsSounds extends React.Component {
  playSound = async (soundChunks) => {
    console.log(soundChunks);
    let soundLink = 'https://s3-whjr-curriculum-uploads.whjr.online/phones/' + soundChunks + '.mp3';
    await Audio.Sound.createAsync({
      uri: soundLink,
    },
    {
      shouldPlay: true
    });
  }
  
  render() {
    return (
      <Fragment>
        <TouchableOpacity onPress={() => {
          this.playSound(this.props.soundChunks);
        }}>
          <Text>{this.props.wordChunk}</Text>
        </TouchableOpacity>
      </Fragment>
    );
  }
}