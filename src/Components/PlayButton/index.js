import React from 'react'
import { View, Text, YellowBox } from 'react-native'
import Styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

import McImage from '../McImage';
import {Colors} from '../../Constants';


import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

console.disableYellowBox = true; 

const start = {x: 0, y: 0};
const end  = {x: 1, y: 0};


const PlayButton = ({
    size, circle, icon="", onPress, children
}) =>(

    <Container onPress={onPress}>
        {
            icon==="" ? <AntDesign name="arrow-right" size={35} color="white" style={{
                position: 'relative', zIndex: 1,
            }}/> : <Feather style={{zIndex: 1,}} name={icon} size={32} color="white" />
        }
        
        
        
       <Circle colors={Colors.linearGradient1}
       size={size}
       start={start}
       end={end}
       
       style={{
           opacity: 0.5,
           position:'absolute',
           left: 0,
           bottom: 0,
       }}
       />
       <Circle colors={Colors.linearGradient1}
       size={size}
       start={start}
       end={end}
       style={{
           opacity: 0.5,
           position:'absolute',
           rigth: 0,
           bottom: 0,
       }}
       />
       <Circle colors={Colors.linearGradient1}
       size={size}
       start={start}
       end={end}
       style={{
           opacity: 0.5,
           position:'absolute',
           top: 0,
       }}
       />
    </Container>

);

const Container = Styled.TouchableOpacity`
    width: ${props => props.size || 78}px;
    height: ${props => props.size || 78}px;
    justify-content: center;
    align-items: center;
    background-color: transparent ;
    margin-bottom: 43%;
`;


const Circle = Styled(LinearGradient)`
    width: ${props => props.circle || 70}px;
    height: ${props => props.circle || 70}px;
    border-radius:  ${props => props.circle /2 || 70/2}px; 
`;


export default PlayButton;