import { set } from 'lodash';
import React,{Component} from 'react';
import {View,TouchableOpacity,Text} from 'react-native';


const Sound = require('react-native-sound')
export default class BoxPracticeColBlc extends Component {
        componentDidMount(){
          this.hello = new Sound('yellow.mp3', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
              console.log('failed to load the sound', error);
              return;
            }
          });
        }
        
        
        handlePress() {
          this.hello.play((success) => {
            if (!success) {
              console.log('Sound did not play')
            }
          })
        }
    render() {
        const { movie } = this.props
        return(
            <TouchableOpacity  onPress={this.handlePress.bind(this)} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={{width:80,height:80,backgroundColor:'#A8A8A8',borderRadius:5}}>
                  <View style={{backgroundColor:'#FFFF00',flex:1,marginHorizontal:4,marginVertical:4,borderRadius:3,justifyContent:'center',alignItems:'center'}}>
                  <Text style={{fontSize:40}}>{this.props.Title}</Text>
                  </View>
                </View>
            </TouchableOpacity>
            );
}
}