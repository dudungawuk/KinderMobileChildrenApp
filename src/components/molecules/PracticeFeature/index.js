import React from 'react';
import {View} from 'react-native';
import BoxPractice from '../../atoms/BoxPractice';
import BoxPracticeB from '../../atoms/BoxPracticeB'
function PracticeFeature(){
    return(
    <View style={{flexDirection:'row',height:100}}>
        <BoxPractice Title="A"/>
        <BoxPracticeB/>
        <BoxPractice Title="C"/>
        <BoxPractice Title="D"/>
    </View>
    );
}

export default PracticeFeature;