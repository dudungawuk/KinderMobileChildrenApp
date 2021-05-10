import React from 'react';
import {View,ScrollView,Image,Text,TouchableOpacity} from 'react-native';
import { abc, cubes, elephant, photo,back } from '../../../assets/Image';
import PracticeColFeature from '../../../components/molecules/PracticeColFeature';
import BoxPractice from '../../../components/atoms/BoxPractice'
import {useNavigation} from '@react-navigation/native';

function AbcLat(){
    const navigation = useNavigation(); 
  return(
        <View style={{flex:1,backgroundColor: '#F7F7F7'}}>
            <View style={{backgroundColor:'orange',height:70,marginBottom:20,justifyContent:'center',justifyContent:'space-between',flexDirection:'row'}}>
                <TouchableOpacity style={{alignSelf:'center'}}  onPress={() => navigation.navigate('ColorScreen')}>
                    <Image style={{width:30,height:30,marginLeft:10}} source={back}></Image>
                </TouchableOpacity>
                <Text style={{color:'white',fontSize: 30,fontWeight:'bold',alignSelf:'center'}}>COLORS</Text>
                <Text style={{color:'orange'}}>p</Text>
            </View>
            <PracticeColFeature/>
        </View>
  );
}

export default AbcLat