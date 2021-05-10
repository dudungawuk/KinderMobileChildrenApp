import React from 'react';
import {View,Image,Text,TouchableOpacity,LogBox} from 'react-native';
import {salahs,benars} from '../../../assets/Image';
import {useNavigation} from '@react-navigation/native';

function HasilScreen({route}){
  LogBox.ignoreAllLogs();
    const navigation = useNavigation(); 
    const {benar,salah}=route.params;
    const nilai = parseInt(JSON.stringify(benar))*20;
  return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:34,color:'black',fontWeight:'600'}}>Skor anda</Text>
            <Text style={{color:'orange',position:'relative',fontSize:100,fontWeight:'bold'}}>{nilai}</Text>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Image source={benars} style={{width:30,height:30,margin:5}}></Image>
            <Text style={{color:'black',fontSize:24}}>{JSON.stringify(benar)}</Text>
            </View>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <Image source={salahs} style={{width:30,height:30,margin:5}}></Image>
            <Text style={{color:'black',fontSize:24}}>{JSON.stringify(salah)}</Text>
            </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{justifyContent:'center',alignItems:'center',marginBottom:30,width:250,height:60,borderRadius:20,backgroundColor:'orange'}}>
            <Text style={{color:'white',fontSize:18,fontWeight:'600'}}>Back to Homepage</Text>
        </TouchableOpacity>
       </View>
  );
}

export default HasilScreen