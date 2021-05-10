import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,createSwitchNavigator } from '@react-navigation/stack';
import { Container, Content, List, ListItem } from "native-base";
import React, { useState, useCallback, useRef } from "react";
import { Button, View, Text,Alert,TouchableOpacity,Image } from "react-native";
import Video from "react-native-video";
import { photo,back } from '../../../assets/Image';
import { twinkle,bigbuck } from '../../../assets/videos';
import {useNavigation} from '@react-navigation/native';


class VideoScreen extends React.Component {
  video1(){
    this.props.navigation.navigate('VideoPlayer',{external:true,videoURL:'https://www.w3schools.com/html/mov_bbb.mp4'});
  }
  video2(){
    this.props.navigation.navigate('VideoPlayer',{external:true,videoURL:'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1'});
  }
  video3(){
    this.props.navigation.navigate('VideoPlayer',{external:true,videoURL:'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'});
  }
  video4(){
    this.props.navigation.navigate('VideoPlayer',{external:false,videoURL:twinkle});
  }
  video5(){
    this.props.navigation.navigate('VideoPlayer',{external:false,videoURL:bigbuck});
  }
  render() {
  return (
  <View style={{flex: 1,backgroundColor: '#F7F7F7' }}>
          <View style={{backgroundColor:'orange',height:70,marginBottom:20,justifyContent:'center',justifyContent:'space-between',flexDirection:'row'}}>
              <TouchableOpacity style={{alignSelf:'center'}}  onPress={() => this.props.navigation.navigate('Home')}>
                  <Image style={{width:30,height:30,marginLeft:10}} source={back}></Image>
              </TouchableOpacity>
              <Text style={{color:'white',fontSize: 30,fontWeight:'bold',alignSelf:'center'}}>Music</Text>
              <Text style={{color:'orange'}}>p</Text>
          </View>
          <View style={{alignItems:'center'}}>
        <TouchableOpacity onPress={this.video1.bind(this)} style={{height:120,backgroundColor:'#FFFFFF',borderRadius:30,marginTop:10,flexDirection:'row'}}>
          <Image source={photo} style={{width:80,height:80,alignSelf:'center',marginHorizontal:14}}></Image>
          <Text style={{fontSize:40,fontWeight:'bold',alignSelf:'center',marginHorizontal:0,color:'#000000'}}>Video 1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.video2.bind(this)} style={{height:120,backgroundColor:'#FFFFFF',borderRadius:30,marginTop:10,flexDirection:'row'}}>
          <Image source={photo} style={{width:80,height:80,alignSelf:'center',marginHorizontal:14}}></Image>
          <Text style={{fontSize:40,fontWeight:'bold',alignSelf:'center',marginHorizontal:0,color:'#000000'}}>Video 2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.video3.bind(this)} style={{height:120,backgroundColor:'#FFFFFF',borderRadius:30,marginTop:10,flexDirection:'row'}}>
          <Image source={photo} style={{width:80,height:80,alignSelf:'center',marginHorizontal:14}}></Image>
          <Text style={{fontSize:40,fontWeight:'bold',alignSelf:'center',marginHorizontal:0,color:'#000000'}}>Video 3</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.video4.bind(this)} style={{height:120,backgroundColor:'#FFFFFF',borderRadius:30,marginTop:10,flexDirection:'row'}}>
          <Image source={photo} style={{width:80,height:80,alignSelf:'center',marginHorizontal:14}}></Image>
          <Text style={{fontSize:40,fontWeight:'bold',alignSelf:'center',marginHorizontal:0,color:'#000000'}}>Video 4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.video5.bind(this)} style={{height:120,backgroundColor:'#FFFFFF',borderRadius:30,marginTop:10,flexDirection:'row'}}>
          <Image source={photo} style={{width:80,height:80,alignSelf:'center',marginHorizontal:14}}></Image>
          <Text style={{fontSize:40,fontWeight:'bold',alignSelf:'center',marginHorizontal:0,color:'#000000'}}>Video 5</Text>
        </TouchableOpacity>
    </View></View>
    )
    }
    }

  export default VideoScreen  
