import React,{useState} from 'react';
import {View,ScrollView,Image,Text,TouchableOpacity,Modal,Pressable,StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const Sound = require('react-native-sound');

function SoalScreen({route}){
    const navigation = useNavigation(); 
    const [convert,setConvert]=useState('0');
    const {name}=route.params;
    const [hasil, setHasil] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [no,setCount] = useState(0);
    const [jawaban,setJawaban] = useState(0);
    const [benar,setBenar] = useState(0);
    const [salah,setSalah] = useState(0);
    const array = [
        {
          key: '1',
          title: 'e.mp3',
          bener: 1,
          a:"E",
          b:"A",
          c:"B",
          d:"D"

        },
        {
            key: '2',
            title: 'a.mp3',
            bener: 4,
            a:"E",
            b:"T",
            c:"Y",
            d:"A"
          },
          {
            key: '3',
            title: 'y.mp3',
            bener: 2,
            a:"U",
            b:"Y",
            c:"T",
            d:"Z"
          },
          {
            key: '4',
            title: 'x.mp3',
            bener: 4,
            a:"W",
            b:"O",
            c:"N",
            d:"X"
          },
          {
            key: '5',
            title: 'o.mp3',
            bener: 2,
            a:"B",
            b:"O",
            c:"Y",
            d:"A"
          },
          ];
          const array2 = [
            {
                key: '1',
                title: 'one.mp3',
                bener: 1,
                a:"1",
                b:"2",
                c:"3",
                d:"4"
      
              },
              {
                  key: '2',
                  title: 'ten.mp3',
                  bener: 4,
                  a:"7",
                  b:"8",
                  c:"9",
                  d:"10"
                },
                {
                  key: 'six',
                  title: 'six.mp3',
                  bener: 2,
                  a:"5",
                  b:"6",
                  c:"7",
                  d:"8"
                },
                {
                  key: '4',
                  title: 'seven.mp3',
                  bener: 4,
                  a:"4",
                  b:"5",
                  c:"6",
                  d:"7"
                },
                {
                  key: '5',
                  title: 'nine.mp3',
                  bener: 2,
                  a:"10",
                  b:"9",
                  c:"8",
                  d:"7"
                },
            ];const array3 = [
              {
                  key: '1',
                  title: 'blue.mp3',
                  bener: 1,
                  a:"blue",
                  b:"white",
                  c:"yellow",
                  d:"red"
        
                },
                {
                    key: '2',
                    title: 'red.mp3',
                    bener: 4,
                    a:"blue",
                  b:"white",
                  c:"yellow",
                  d:"red"
                  },
                  {
                    key: '3',
                    title: 'white.mp3',
                    bener: 2,
                    a:"blue",
                  b:"white",
                  c:"yellow",
                  d:"red"
                  },
                  {
                    key: '4',
                    title: 'yellow.mp3',
                    bener: 3,
                    a:"blue",
                  b:"white",
                  c:"yellow",
                  d:"red"
                  },
                  {
                    key: '5',
                    title: 'black.mp3',
                    bener: 2,
                    a:"blue",
                  b:"black",
                  c:"yellow",
                  d:"red"
                  },
              ];
      const test=parseInt(JSON.stringify(name));
                    const a=()=>setJawaban(jawaban=>1);
                    const b=()=>setJawaban(jawaban=>2);
                    const c=()=>setJawaban(jawaban=>3);
                    const d=()=>setJawaban(jawaban=>4);
                    
                      const list = () => {
                        if(no>4){
                          if(modalVisible!=true){
                              navigation.navigate('HasilScreen',{salah:salah,benar:benar});}
                          }else if(no<5){
              if(test==1){
                const hello = new Sound(array[no].title, Sound.MAIN_BUNDLE, (error) => {
                  if (error) {
                    console.log('failed to load the sound', error);
                    return;
                  }
                });
              const handlePress =()=> hello.play((success) => {
                  if (!success) {
                    console.log('Sound did not play')
                  }
                });
                if(jawaban>0){
                  setHasil(hasil=>false);
                  setConvert(convert=>null);
                  if(array[no].bener==jawaban){
                    setBenar(benar=>benar+1);setHasil(hasil=>true)}
                      else{
                        if(array[no].bener==1){
                          setConvert(convert=>"Jawabang Yang Benar Adalah A");
                        }else if(array[no].bener==2){
                          setConvert(convert=>"Jawabang Yang Benar Adalah B");
                        }else if(array[no].bener==3){
                          setConvert(convert=>"Jawabang Yang Benar Adalah C");
                        }else if(array[no].bener==4){
                          setConvert(convert=>"Jawabang Yang Benar Adalah D");
                        }
                        setHasil(hasil=>false);
                                       setSalah(salah=>salah+1)};
                                       setModalVisible(!modalVisible);
                                       setCount(no=>no+1);
                                  setJawaban(jawaban=>0);     
                          }
                return (
                    <View key={array[no].key} style={{flex:1}}>
                           <TouchableOpacity  onPress={handlePress} style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                                  <View style={{width:80,height:80,backgroundColor:'#A8A8A8',borderRadius:5}}>
                                    <View style={{backgroundColor:'#FFFFFF',flex:1,marginHorizontal:4,marginVertical:4,borderRadius:3,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:30}}>Play</Text>
                                    </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{marginLeft:39,marginTop:100}}>
                              <TouchableOpacity 
                                onPress={a} style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
                                <View style={{width:50,height:50,borderRadius:30,backgroundColor:'#A8A8A8',justifyContent:'center',alignItems:'center'}}>
                                  <View style={{width:45,height:45,backgroundColor:'white',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:25,fontWeight:'600',color:'#A8A8A8'}}>A</Text>
                                  </View>
                                </View>
                              <Text style={{marginLeft:10,fontSize:25}}>{array[no].a}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:10}} 
                                onPress={b}>
                                  <View style={{width:50,height:50,borderRadius:30,backgroundColor:'#A8A8A8',justifyContent:'center',alignItems:'center'}}>
                                  <View style={{width:45,height:45,backgroundColor:'white',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:25,fontWeight:'600',color:'#A8A8A8'}}>B</Text>
                                  </View>
                                </View>
                              <Text style={{marginLeft:10,fontSize:25}}>{array[no].b}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:10}}
                                onPress={c}>
                                  <View style={{width:50,height:50,borderRadius:30,backgroundColor:'#A8A8A8',justifyContent:'center',alignItems:'center'}}>
                                  <View style={{width:45,height:45,backgroundColor:'white',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:25,fontWeight:'600',color:'#A8A8A8'}}>C</Text>
                                  </View>
                                </View>
                              <Text style={{marginLeft:10,fontSize:25}}>{array[no].c}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:10}}
                                onPress={d}>
                                  <View style={{width:50,height:50,borderRadius:30,backgroundColor:'#A8A8A8',justifyContent:'center',alignItems:'center'}}>
                                  <View style={{width:45,height:45,backgroundColor:'white',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{fontSize:25,fontWeight:'600',color:'#A8A8A8'}}>D</Text>
                                  </View>
                                </View>
                              <Text style={{marginLeft:10,fontSize:25}}>{array[no].d}</Text>
                                </TouchableOpacity>
                            </View>
                            </View>
                          );
                        }else if(test==2){            
                          const hello = new Sound(array2[no].title, Sound.MAIN_BUNDLE, (error) => {
                            if (error) {
                              console.log('failed to load the sound', error);
                              return;
                            }
                          });
                        const handlePress =()=> hello.play((success) => {
                            if (!success) {
                              console.log('Sound did not play')
                            }
                          });
                          if(jawaban>0){
                            setHasil(hasil=>false);
                            setConvert(convert=>null);
                            if(array2[no].bener==jawaban){
                              setBenar(benar=>benar+1);setHasil(hasil=>true)}
                                else{
                                  if(array2[no].bener==1){
                                    setConvert(convert=>"Jawabang Yang Benar Adalah A");
                                  }else if(array2[no].bener==2){
                                    setConvert(convert=>"Jawabang Yang Benar Adalah B");
                                  }else if(array2[no].bener==3){
                                    setConvert(convert=>"Jawabang Yang Benar Adalah C");
                                  }else if(array2[no].bener==4){
                                    setConvert(convert=>"Jawabang Yang Benar Adalah D");
                                  }
                                  setHasil(hasil=>false);
                                                 setSalah(salah=>salah+1)};
                                                 setModalVisible(!modalVisible);
                                                 setCount(no=>no+1);
                                            setJawaban(jawaban=>0);     
                                              }
                          return (
                            <View key={array2[no].key} style={{flex:1}}>
                            <TouchableOpacity  onPress={handlePress} style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                                   <View style={{width:80,height:80,backgroundColor:'#A8A8A8',borderRadius:5}}>
                                     <View style={{backgroundColor:'#FFFFFF',flex:1,marginHorizontal:4,marginVertical:4,borderRadius:3,justifyContent:'center',alignItems:'center'}}>
                                     <Text style={{fontSize:30}}>Play</Text>
                                     </View>
                             </View>
                         </TouchableOpacity>
                         <View style={{marginLeft:39,marginTop:100}}>
                               <TouchableOpacity 
                                 onPress={a} style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
                                 <View style={{width:50,height:50,borderRadius:30,backgroundColor:'#A8A8A8',justifyContent:'center',alignItems:'center'}}>
                                   <View style={{width:45,height:45,backgroundColor:'white',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                                     <Text style={{fontSize:25,fontWeight:'600',color:'#A8A8A8'}}>A</Text>
                                   </View>
                                 </View>
                               <Text style={{marginLeft:10,fontSize:25}}>{array2[no].a}</Text>
                                 </TouchableOpacity>
                                 <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:10}} 
                                 onPress={b}>
                                   <View style={{width:50,height:50,borderRadius:30,backgroundColor:'#A8A8A8',justifyContent:'center',alignItems:'center'}}>
                                   <View style={{width:45,height:45,backgroundColor:'white',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                                     <Text style={{fontSize:25,fontWeight:'600',color:'#A8A8A8'}}>B</Text>
                                   </View>
                                 </View>
                               <Text style={{marginLeft:10,fontSize:25}}>{array2[no].b}</Text>
                                 </TouchableOpacity>
                                 <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:10}}
                                 onPress={c}>
                                   <View style={{width:50,height:50,borderRadius:30,backgroundColor:'#A8A8A8',justifyContent:'center',alignItems:'center'}}>
                                   <View style={{width:45,height:45,backgroundColor:'white',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                                     <Text style={{fontSize:25,fontWeight:'600',color:'#A8A8A8'}}>C</Text>
                                   </View>
                                 </View>
                               <Text style={{marginLeft:10,fontSize:25}}>{array2[no].c}</Text>
                                 </TouchableOpacity>
                                 <TouchableOpacity style={{flexDirection:'row',alignItems:'center',marginBottom:10}}
                                 onPress={d}>
                                   <View style={{width:50,height:50,borderRadius:30,backgroundColor:'#A8A8A8',justifyContent:'center',alignItems:'center'}}>
                                   <View style={{width:45,height:45,backgroundColor:'white',borderRadius:30,justifyContent:'center',alignItems:'center'}}>
                                     <Text style={{fontSize:25,fontWeight:'600',color:'#A8A8A8'}}>D</Text>
                                   </View>
                                 </View>
                               <Text style={{marginLeft:10,fontSize:25}}>{array2[no].d}</Text>
                                 </TouchableOpacity>
                             </View>
                             </View>
                                     );
                                    }else if(test==3){ 
                          const hello = new Sound(array3[no].title, Sound.MAIN_BUNDLE, (error) => {
                            if (error) {
                              console.log('failed to load the sound', error);
                              return;
                            }
                          });
                        const handlePress =()=> hello.play((success) => {
                            if (!success) {
                              console.log('Sound did not play')
                            }
                          });
                          if(jawaban>0){
                            setHasil(hasil=>false);
                            setConvert(convert=>null);
                            if(array3[no].bener==jawaban){
                              setBenar(benar=>benar+1);setHasil(hasil=>true)}
                                else{
                                  if(array3[no].bener==1){
                                    setConvert(convert=>"Jawabang Yang Benar Adalah A");
                                  }else if(array3[no].bener==2){
                                    setConvert(convert=>"Jawabang Yang Benar Adalah B");
                                  }else if(array3[no].bener==3){
                                    setConvert(convert=>"Jawabang Yang Benar Adalah C");
                                  }else if(array3[no].bener==4){
                                    setConvert(convert=>"Jawabang Yang Benar Adalah D");
                                  }
                                  setHasil(hasil=>false);
                                                 setSalah(salah=>salah+1)};
                                                 setModalVisible(!modalVisible);
                                                 setCount(no=>no+1);
                                            setJawaban(jawaban=>0);     
                                              }
                          return (
                                      <View key={array3[no].key} style={{flex:1}}>
                      <TouchableOpacity  onPress={handlePress} style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
                                      <View style={{width:80,height:80,backgroundColor:'#A8A8A8',borderRadius:5}}>
                                        <View style={{backgroundColor:'#FFFFFF',flex:1,marginHorizontal:4,marginVertical:4,borderRadius:3,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:30}}>Play</Text>
                                        </View>
                                      </View>
                                  </TouchableOpacity>
                                  <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:100}}>
                                  <TouchableOpacity style={{backgroundColor:'#A8A8A8',width:160,height:160,justifyContent:'center',alignItems:'center'}} 
                                      onPress={a}>
                                      <View style={{backgroundColor:array3[no].a,width:150,height:150,borderRadius:3,justifyContent:'center',alignItems:'center'}}>
                                        <View style={{backgroundColor:'white',width:50,height:50,borderRadius:25,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:30}}>A</Text>
                                        </View>
                                      </View>
                                      </TouchableOpacity>
                                      <TouchableOpacity style={{backgroundColor:'#A8A8A8',width:160,height:160,justifyContent:'center',alignItems:'center'}}
                                      onPress={b}>
                                      <View style={{backgroundColor:array3[no].b,width:150,height:150,borderRadius:3,justifyContent:'center',alignItems:'center'}}>
                                      <View style={{backgroundColor:'white',width:50,height:50,borderRadius:25,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:30}}>B</Text>
                                        </View>
                                      </View>
                                      </TouchableOpacity>
                                    </View>
                                    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:50}}>
                                      <TouchableOpacity style={{backgroundColor:'#A8A8A8',width:160,height:160,justifyContent:'center',alignItems:'center'}}
                                      onPress={c}>
                                       <View style={{backgroundColor:array3[no].c,width:150,height:150,borderRadius:3,justifyContent:'center',alignItems:'center'}}>
                                       <View style={{backgroundColor:'white',width:50,height:50,borderRadius:25,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:30}}>C</Text>
                                        </View>
                                     </View>
                                      </TouchableOpacity>
                                      <TouchableOpacity style={{backgroundColor:'#A8A8A8',width:160,height:160,justifyContent:'center',alignItems:'center'}}
                                      onPress={d}>
                                      <View style={{backgroundColor:array3[no].d,width:150,height:150,borderRadius:3,justifyContent:'center',alignItems:'center'}}>
                                      <View style={{backgroundColor:'white',width:50,height:50,borderRadius:25,justifyContent:'center',alignItems:'center'}}>
                                        <Text style={{fontSize:30}}>D</Text>
                                        </View>
                                      </View>
                                      </TouchableOpacity>
                                      </View>
                                      </View>
                                    );
                                            }}};
  return(
        <View style={{flex:1,backgroundColor: '#F7F7F7'}}>
            <View style={{backgroundColor:'orange',height:70,marginBottom:20,alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingHorizontal:20}}>
                <View style={{justifyContent:'center',backgroundColor:'white',width:35,height:35,borderRadius:20}}>
                <Text style={{color:'orange',fontWeight:'bold',alignSelf:'center',fontSize:25}}>{no+1}</Text>
                </View>
                <View style={{flexDirection:'row',}}>
                  <Text style={{color:'white',fontSize:20}}>Benar : </Text>
                  <Text style={{color:'white',fontSize:20}}>{benar}</Text>
                  <Text style={{marginLeft:10,color:'white',fontSize:20}}>salah : </Text>
                  <Text style={{color:'white',fontSize:20}}>{salah}</Text>
                </View>
            </View>            
            <View style={{backgroundColor:'white',height:'100%',marginBottom:20,justifyContent:'center',justifyContent:'space-between',flexDirection:'row'}}>
            <Modal
        transparent={true}
        visible={modalVisible}
      ><View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Jawaban Anda {hasil?'Benar':'Salah'}</Text>
        <Text style={styles.modalText}>{hasil?'Selamat':convert}</Text>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.textStyle}>Lanjut</Text>
        </Pressable>
      </View>
    </View></Modal>
            {list()}
            </View>
        </View>
  );
}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:'rgba(52, 52, 52, 0.8)'
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });
export default SoalScreen