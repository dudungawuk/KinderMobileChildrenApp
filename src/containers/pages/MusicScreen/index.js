import { set } from 'lodash';
import React,{Component} from 'react';
import { abc, cubes, elephant, photo,back } from '../../../assets/Image';
import {View,TouchableOpacity,Text,Image, TouchableNativeFeedbackBase} from 'react-native';
import { music } from '../../../assets/Image';
import {useNavigation} from '@react-navigation/native';


const Sound = require('react-native-sound')
export default class MusicScreen extends Component {
  componentDidMount(){
          this.hello = new Sound('whoosh.mp3', Sound.MAIN_BUNDLE, (error) => {
          });
          this.hello2 = new Sound('london.mp3', Sound.MAIN_BUNDLE, (error) => {
          });
          this.hello3 = new Sound('babyshark.mp3', Sound.MAIN_BUNDLE, (error) => {
          });
          this.hello4 = new Sound('fruitsong.mp3', Sound.MAIN_BUNDLE, (error) => {
          });
          this.hello5 = new Sound('bath.mp3', Sound.MAIN_BUNDLE, (error) => {
          });
        }
        handlePressStop() {
          this.hello.stop();
          this.hello2.stop();
          this.hello3.stop();
          this.hello4.stop();
          this.hello5.stop();
        }
        handlePress(){
          this.handlePressStop();
          this.hello.play((success) => {
            if (!success) {
              console.log('Sound did not play')
            }
          })
        }
        handlePress2() {
          this.handlePressStop();
          this.hello2.play((success) => {
            if (!success) {
              console.log('Sound did not play')
            }
          })
        }
        handlePress3() {
          this.handlePressStop();
          this.hello3.play((success) => {
            if (!success) {
              console.log('Sound did not play')
            }
          })
        }
        handlePress4() {
          this.handlePressStop();
          this.hello4.play((success) => {
            if (!success) {
              console.log('Sound did not play')
            }
          })
        }
        handlePress5() {
          this.handlePressStop();
          this.hello5.play((success) => {
            if (!success) {
              console.log('Sound did not play')
            }
          })
        }
    render() {
        const { movie } = this.props
        return(
          <View style={{flex:1}}>
          <View style={{flex:1,backgroundColor: '#F7F7F7'}}>
          <View style={{backgroundColor:'orange',height:70,marginBottom:20,justifyContent:'center',justifyContent:'space-between',flexDirection:'row'}}>
              <TouchableOpacity style={{alignSelf:'center'}}  onPress={() => this.props.navigation.navigate('Home')}>
                  <Image style={{width:30,height:30,marginLeft:10}} source={back}></Image>
              </TouchableOpacity>
              <Text style={{color:'white',fontSize: 30,fontWeight:'bold',alignSelf:'center'}}>Music</Text>
              <Text style={{color:'orange'}}>p</Text>
          </View>
          <View style={{marginHorizontal:20}}>
                <TouchableOpacity  onPress={this.handlePress.bind(this)} style={{flexDirection:'row',alignItems:'center'}}>
                  <View style={{width:70,height:70,backgroundColor:'#FFFFFF',justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:60,height:60}} source={music}></Image>
                  </View>
                  <Text style={{marginLeft:10,alignSelf:'center',fontSize:25,fontWeight:'600'}}>Tinkle</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.handlePress2.bind(this)} style={{flexDirection:'row',alignItems:'center'}}>
                  <View style={{width:70,height:70,backgroundColor:'#FFFFFF',justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:60,height:60}} source={music}></Image>
                  </View>
                  <Text style={{marginLeft:10,alignSelf:'center',fontSize:25,fontWeight:'600'}}>London</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.handlePress3.bind(this)} style={{flexDirection:'row',alignItems:'center'}}>
                  <View style={{width:70,height:70,backgroundColor:'#FFFFFF',justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:60,height:60}} source={music}></Image>
                  </View>
                  <Text style={{marginLeft:10,alignSelf:'center',fontSize:25,fontWeight:'600'}}>Babyshark</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.handlePress4.bind(this)} style={{flexDirection:'row',alignItems:'center'}}>
                  <View style={{width:70,height:70,backgroundColor:'#FFFFFF',justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:60,height:60}} source={music}></Image>
                  </View>
                  <Text style={{marginLeft:10,alignSelf:'center',fontSize:25,fontWeight:'600'}}>Fruitsong</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={this.handlePress5.bind(this)} style={{flexDirection:'row',alignItems:'center'}}>
                  <View style={{width:70,height:70,backgroundColor:'#FFFFFF',justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:60,height:60}} source={music}></Image>
                  </View>
                  <Text style={{marginLeft:10,alignSelf:'center',fontSize:25,fontWeight:'600'}}>Bath</Text>
                </TouchableOpacity>
              </View>
          </View>
          
          <TouchableOpacity onPress={this.handlePressStop.bind(this)} >
            <View style={{flexDirection:'row',alignItems:'center',marginBottom:50,justifyContent:'center'}}>
            <View style={{width:60,height:60,backgroundColor:'#A8A8A8',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
              <View style={{width:55,height:55,backgroundColor:'#FFFFFF',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                <View style={{width:30,height:30,backgroundColor:'red',borderRadius:30}}>

                </View>
              </View>
            </View>
                  <Text style={{fontSize:30,fontWeight:'bold',marginLeft:10,}}>Stop</Text>
                </View>
                </TouchableOpacity>
          </View>
            );
}
}