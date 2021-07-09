import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import Styled from 'styled-components/native';

import {Colors, Images, Metrics} from '../../Constants';
import {McText , McImage, PlayButton} from '../../Components';
import { LinearGradient } from 'expo-linear-gradient';


import { AntDesign } from '@expo/vector-icons'; 


const Onboarding = ({navigation }) => (
   <Container>
       <McImage source={Images.logo} style={{marginTop: '45%'}}/>
       <McText color={Colors.primary} size={24} black style={{
           marginTop: 15
       }}>
           The sound of life
       </McText>
       <McText color={Colors.grey4} size={14} medium align="center" style={{
           marginHorizontal: 51,
           marginBottom: '25%',
       }}>
           Music is not an entertainment, but also it it our life
        </McText>
        <View style={{marginBottom: '15%'}}>
            <PlayButton size={72} circle={72} icon="arrow-right" onPress={()=>{navigation.navigate('Library')}}/>
        </View>
   </Container>
);

const Container = Styled.View`
    flex: 1;
    background-color: ${Colors.background};
    justify-content: center;
    align-items: center;
`;


export default Onboarding;
