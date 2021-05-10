import React from 'react';
import {View,ScrollView,Image,Text,TouchableOpacity} from 'react-native';
import { abc, cubes, elephant, photo,back } from '../../../assets/Image';
import PracticeFeature from '../../../components/molecules/PracticeFeature';
import BoxPracticeOne from '../../../components/atoms/BoxPracticeOne'
import {useNavigation} from '@react-navigation/native';
import BoxPracticeTwo from '../../../components/atoms/BoxPracticeTwo'
import BoxPracticeThree from '../../../components/atoms/BoxPracticeThree'
import BoxPracticeFour from '../../../components/atoms/BoxPracticeFour'
import BoxPracticeFive from '../../../components/atoms/BoxPracticeFive'
import BoxPracticeSix from '../../../components/atoms/BoxPracticeSix'
import BoxPracticeSeven from '../../../components/atoms/BoxPracticeSeven'
import BoxPracticeEight from '../../../components/atoms/BoxPracticeEight'
import BoxPracticeNine from '../../../components/atoms/BoxPracticeNine'
import BoxPracticeTen from '../../../components/atoms/BoxPracticeTen'

function AbcLat(){
    const navigation = useNavigation(); 
  return(
        <View style={{flex:1,backgroundColor: '#F7F7F7'}}>
            <View style={{backgroundColor:'orange',height:70,marginBottom:20,justifyContent:'center',justifyContent:'space-between',flexDirection:'row'}}>
                <TouchableOpacity style={{alignSelf:'center'}}  onPress={() => navigation.navigate('NumberScreen')}>
                    <Image style={{width:30,height:30,marginLeft:10}} source={back}></Image>
                </TouchableOpacity>
                <Text style={{color:'white',fontSize: 30,fontWeight:'bold',alignSelf:'center'}}>Number</Text>
                <Text style={{color:'orange'}}>p</Text>
            </View>
            <View style={{flexDirection:'row',height:100}}>
                <BoxPracticeOne/>
                <BoxPracticeTwo/>
                <BoxPracticeThree/>
                <BoxPracticeFour/>
            </View>
            <View style={{flexDirection:'row',height:100}}>
                <BoxPracticeFive/>
                <BoxPracticeSix/>
                <BoxPracticeSeven/>
                <BoxPracticeEight/>
            </View>
            <View style={{flexDirection:'row',height:100}}>
                <BoxPracticeNine/>
                <BoxPracticeTen/>
            </View>
        </View>
  );
}

export default AbcLat