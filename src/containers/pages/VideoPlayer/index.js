import React from 'react';
import Container from 'native-base';
import {View,ScrollView,Text,TouchableOpacity,StyleSheet} from 'react-native';
import Video from 'react-native-video'
import {useNavigation} from '@react-navigation/native';

export default function VideoPlayer({route}){
    const {external,videoURL} = route.params;
    const videoError=(isError)=>{
        console.log(isError)
    };
    const onBuffer = (isBuffer) =>{
            console.log(isBuffer)
            //here you could set the isBuffer value to the state and then do something with it
            //such as show a loading icon
            }
        return (
        <View style={{flex:1}}>
         <Video source={external?{uri: videoURL}:videoURL}   // Can be a URL or a local file.
       onBuffer={onBuffer}                // Callback when remote video is buffering
       onError={videoError}               // Callback when video cannot be loaded
       controls
       paused
       fullscreen={true}
        resizeMode="contain"
       style={{position:'absolute',top:0,bottom:0,right:0,left:0}} />
          </View>
          )
          }
