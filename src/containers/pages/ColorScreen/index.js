import React from 'react';
import {View,ScrollView,Image,Text,TouchableOpacity} from 'react-native';
import { pencil,book, abc,elephant, photo,color,back } from '../../../assets/Image';
import {useNavigation} from '@react-navigation/native';

function App(){
    const navigation = useNavigation(); 
  return(
    <ScrollView>
    <View style={{flex:1,backgroundColor: '#F7F7F7'}}>
      <View style={{flex:1,backgroundColor: 'orange',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
        <View style={{marginTop:20,marginHorizontal:20}}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image source={back} style={{width:40,height:40}}></Image>
            </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
        <Image source={color} style={{width:230,height:230,alignSelf:'center',marginBottom:20}}></Image>
        </View>
      </View>
      <View style={{flex:1,marginTop:30,marginBottom:40}}>  
        <TouchableOpacity onPress={() => navigation.navigate('ColorLat')} style={{height:170,backgroundColor:'#FFFFFF',marginHorizontal:70,borderRadius:30,marginTop:20,flexDirection:'row'}}>
          <Image source={book} style={{width:80,height:80,alignSelf:'center',marginHorizontal:14}}></Image>
          <Text style={{fontSize:40,fontWeight:'bold',alignSelf:'center',marginHorizontal:0,color:'#2F2E41'}}>Latihan</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SoalScreen',{name:3})} style={{height:170,backgroundColor:'#FFFFFF',marginHorizontal:70,borderRadius:30,marginTop:20,flexDirection:'row'}}>
          <Image source={pencil} style={{width:80,height:80,alignSelf:'center',marginHorizontal:14}}></Image>
          <Text style={{fontSize:40,fontWeight:'bold',alignSelf:'center',marginHorizontal:0,color:'#2F2E41'}}>Soal</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

export default App