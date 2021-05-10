import React from 'react';
import {View,ScrollView,Image,Text,TouchableOpacity} from 'react-native';
import { abc, cubes, elephant, photo,back } from '../../../assets/Image';
import PracticeFeature from '../../../components/molecules/PracticeFeature';
import BoxPractice from '../../../components/atoms/BoxPractice';
import BoxPracticeB from '../../../components/atoms/BoxPracticeB';
import BoxPracticeC from '../../../components/atoms/BoxPracticeC';
import BoxPracticeD from '../../../components/atoms/BoxPracticeD';
import BoxPracticeE from '../../../components/atoms/BoxPracticeE';
import BoxPracticeF from '../../../components/atoms/BoxPracticeF';
import BoxPracticeG from '../../../components/atoms/BoxPracticeG';
import BoxPracticeH from '../../../components/atoms/BoxPracticeH';
import BoxPracticeI from '../../../components/atoms/BoxPracticeI';
import BoxPracticeJ from '../../../components/atoms/BoxPracticeJ';
import BoxPracticeK from '../../../components/atoms/BoxPracticeK';
import BoxPracticeL from '../../../components/atoms/BoxPracticeL';
import BoxPracticeM from '../../../components/atoms/BoxPracticeM';
import BoxPracticeN from '../../../components/atoms/BoxPracticeN';
import BoxPracticeO from '../../../components/atoms/BoxPracticeO';
import BoxPracticeP from '../../../components/atoms/BoxPracticeP';
import BoxPracticeQ from '../../../components/atoms/BoxPracticeQ';
import BoxPracticeR from '../../../components/atoms/BoxPracticeR';
import BoxPracticeS from '../../../components/atoms/BoxPracticeS';
import BoxPracticeT from '../../../components/atoms/BoxPracticeT';
import BoxPracticeU from '../../../components/atoms/BoxPracticeU';
import BoxPracticeV from '../../../components/atoms/BoxPracticeV';
import BoxPracticeW from '../../../components/atoms/BoxPracticeW';
import BoxPracticeX from '../../../components/atoms/BoxPracticeX';
import BoxPracticeY from '../../../components/atoms/BoxPracticeY';
import BoxPracticeZ from '../../../components/atoms/BoxPracticeZ';
import {useNavigation} from '@react-navigation/native';

function AbcLat(){
    const navigation = useNavigation(); 
  return(
        <View style={{flex:1,backgroundColor: '#F7F7F7'}}>
            <View style={{backgroundColor:'orange',height:70,marginBottom:20,justifyContent:'center',justifyContent:'space-between',flexDirection:'row'}}>
                <TouchableOpacity style={{alignSelf:'center'}}  onPress={() => navigation.navigate('AbcScreen')}>
                    <Image style={{width:30,height:30,marginLeft:10}} source={back}></Image>
                </TouchableOpacity>
                <Text style={{color:'white',fontSize: 30,fontWeight:'bold',alignSelf:'center'}}>ALPHABET</Text>
                <Text style={{color:'orange'}}>p</Text>
            </View>
            <View style={{flexDirection:'row',height:100}}>
                <BoxPractice Title="A"/>
                <BoxPracticeB/>
                <BoxPracticeC/>
                <BoxPracticeD/>
            </View>
            <View style={{flexDirection:'row',height:100}}>
                <BoxPracticeE />
                <BoxPracticeF />
                <BoxPracticeG />
                <BoxPracticeH />
            </View>
            <View style={{flexDirection:'row',height:100}}>
                <BoxPracticeI />
                <BoxPracticeJ />
                <BoxPracticeK />
                <BoxPracticeL />
            </View>
            <View style={{flexDirection:'row',height:100}}>
                <BoxPracticeM />
                <BoxPracticeN />
                <BoxPracticeO/>
                <BoxPracticeP />
            </View>
            <View style={{flexDirection:'row',height:100}}>
                <BoxPracticeQ />
                <BoxPracticeR />
                <BoxPracticeS />
                <BoxPracticeT />
            </View>
            <View style={{flexDirection:'row',height:100}}>
                <BoxPracticeU />
                <BoxPracticeV />
                <BoxPracticeW />
                <BoxPracticeX />
            </View>
            <View style={{flexDirection:'row',height:100}}>
                <BoxPracticeY />
                <BoxPracticeZ />
            </View>
            
        </View>
  );
}

export default AbcLat