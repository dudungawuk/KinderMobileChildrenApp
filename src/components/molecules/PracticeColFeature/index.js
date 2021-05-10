import React from 'react';
import {View} from 'react-native';
import BoxPracticeColBlc from '../../atoms/BoxPracticeColBlc';
import BoxPracticeColBlu from '../../atoms/BoxPracticeColBlu';
import BoxPracticeColRed from '../../atoms/BoxPracticeColRed';
import BoxPracticeColYlw from '../../atoms/BoxPracticeColYlw';
import BoxPracticeColWht from '../../atoms/BoxPracticeColWht';
import RedBox from '../../atoms/RedBox';

function PracticeFeature(){
    return(
    <View style={{flexDirection:'row',height:100}}>
        <BoxPracticeColBlc/>
        <BoxPracticeColBlu/>
        <BoxPracticeColRed/>
        <BoxPracticeColYlw/> 
        <BoxPracticeColWht/>   
    </View>
    );
}

export default PracticeFeature;