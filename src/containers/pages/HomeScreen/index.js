import React, { useState } from "react";
import {View,ScrollView,Image,Text,TouchableOpacity,Modal,Pressable,Alert} from 'react-native';
import { abc, color, cubes, elephant, photo,music, about,homeicon, back, square } from '../../../assets/Image';
import {useNavigation} from '@react-navigation/native';

function App(){
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const navigation = useNavigation();
  return(
    <ScrollView>
    <View style={{flex:1,backgroundColor: '#F7F7F7'}}>
    <Modal
      transparent={true}
        visible={modalVisible1}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible1(!modalVisible1);
        }}
      >
        <View style={{flex:1,backgroundColor: 'rgba(0, 0, 0, 0.5)',justifyContent:'center',alignItems:'center'}}>
          <View style={{width:400,height:700,backgroundColor:'#FFFFFF',borderRadius:3}}>
            <View style={{flex:1,marginHorizontal:20,marginTop:30}}>
              <Text style={{fontSize:30,fontWeight:'bold',marginBottom:15}}>About</Text>
              <Text style={{fontSize:20}}>KINDER ENGLISH is an android-based application that can make it easier for parents and kindergarten teachers to deliver interesting and fun learning materials for children so that they can build children's interest in learning English.</Text>
              <Text style={{fontSize:28,marginTop:70,fontWeight:'bold',marginBottom:15}}>Development by</Text>
              <Text style={{fontSize:20,fontWeight:'600',marginBottom:5}}>Maulana Raka as Project Manager</Text>
              <Text style={{fontSize:20,fontWeight:'600',marginBottom:5}}>Muhamad Fikri as Front End Developer</Text>
              <Text style={{fontSize:20,fontWeight:'600',marginBottom:5}}>Filemon Steven as Back End Developer</Text>
            </View>
            <TouchableOpacity style={{alignSelf:'center',marginBottom:35}}>
              <View style={{borderRadius:10,width:110,height:60,backgroundColor:'orange',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:25,color:'white'}} onPress={() => setModalVisible1(!modalVisible1)}>Close</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    <Modal
      transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{flex:1,backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
          <View style={{backgroundColor:'white',marginRight:150,flex:1}}>
            <TouchableOpacity 
              onPress={() => setModalVisible(!modalVisible)}>
              <Image style={{width:30,height:30,marginTop:20,marginLeft:10}} source={back}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:30,marginLeft:20,flexDirection:'row'}} onPress={() => setModalVisible1(true)}>
              <Image source={about} style={{width:30,height:30,marginRight:10}}></Image>
              <Text style={{fontSize:20}}>About</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={{flex:1,backgroundColor: 'orange',borderBottomLeftRadius:50,borderBottomRightRadius:50}}>
        <View style={{marginTop:20,marginHorizontal:20}}>
          <TouchableOpacity 
        onPress={() => setModalVisible(true)}>
            <View style={{width:41,height:41,borderColor:'black',borderWidth:2,justifyContent:'center',marginBottom:30}}>
              <Image source={square} style={{width:40,height:40,alignSelf:'center'}}></Image>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{flex:1}}>
        <Image source={elephant} style={{width:280,height:280,alignSelf:'center'}}></Image>
        </View>
      </View>
      <View style={{flex:1,marginTop:30,marginBottom:40}}>  
        <TouchableOpacity onPress={() => navigation.navigate('NumberScreen')} style={{height:170,backgroundColor:'#FFFFFF',marginHorizontal:70,borderRadius:30,marginTop:20,flexDirection:'row'}}>
          <Image source={cubes} style={{width:80,height:80,alignSelf:'center',marginHorizontal:14}}></Image>
          <Text style={{fontSize:40,fontWeight:'bold',alignSelf:'center',marginHorizontal:0,color:'#000000'}}>Number</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AbcScreen')} style={{height:170,backgroundColor:'#FFFFFF',marginHorizontal:70,borderRadius:30,marginTop:20,flexDirection:'row'}}>
          <Image source={abc} style={{width:80,height:80,alignSelf:'center',marginHorizontal:14}}></Image>
          <Text style={{fontSize:35,fontWeight:'bold',alignSelf:'center',marginHorizontal:0,color:'#000000'}}>Alphabet</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('VideoScreen')} style={{height:170,backgroundColor:'#FFFFFF',marginHorizontal:70,borderRadius:30,marginTop:20,flexDirection:'row'}}>
          <Image source={photo} style={{width:80,height:80,alignSelf:'center',marginHorizontal:14}}></Image>
          <Text style={{fontSize:40,fontWeight:'bold',alignSelf:'center',marginHorizontal:0,color:'#000000'}}>Video</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ColorScreen')} style={{height:170,backgroundColor:'#FFFFFF',marginHorizontal:70,borderRadius:30,marginTop:20,flexDirection:'row'}}>
          <Image source={color} style={{width:80,height:80,alignSelf:'center',marginHorizontal:14}}></Image>
          <Text style={{fontSize:40,fontWeight:'bold',alignSelf:'center',marginHorizontal:0,color:'#000000'}}>Color</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('MusicScreen')} style={{height:170,backgroundColor:'#FFFFFF',marginHorizontal:70,borderRadius:30,marginTop:20,flexDirection:'row'}}>
          <Image source={music} style={{width:80,height:80,alignSelf:'center',marginHorizontal:14}}></Image>
          <Text style={{fontSize:40,fontWeight:'bold',alignSelf:'center',marginHorizontal:0,color:'#000000'}}>Music</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

export default App