import React from 'react';
import { View, Text } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Svg , {Circle, G, Path} from  'react-native-svg';

import {Colors, Images, Metrics} from  '../../Constants';
import {McText, McImage} from '../../Components';

const BottomBar = ({
    children,
}) => (
    <View style={{
        width: 321,
        height: 82,
        backgroundColor: 'red',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems :   'flex-start'
    }}>
        <View style={{width: 42, height: 84}}></View>
        <View style={{
            height: 84, justifyContent: 'space-between'
        }}>
            <LinearGradient
                colors={Colors.linearGradient1}

                start={{x:0 ,y:0}}
                end={{x:1, y: 1}}
                style={{
                    width: 255,
                    height: 5,
                    flexDirection: 'row',
                    justifyContent: 'flex-start'
                }}
            />
            
            <LinearGradient
                colors={Colors.linearGradient1}

                start={{x:0 ,y:0}}
                end={{x:1, y: 1}}
                style={{
                    width: 255,
                    height: 3,
                    flexDirection: 'row',
                    justifyContent: 'flex-start'
                }}
            />
            <View style={{
                width: 6,
                height: 6,
                borderRadius: 6,
                position: 'relative',
                bottom: -1.5,
                backgroundColor: '#6a8ccc'
            }}></View>
            <View style={{
                width: '34%',
                height: 3,
                borderRadius: 3,
                alignSelf: 'flex-end',
                backgroundColor: '#22DDF2'
            }}></View>
        </View>
        
        <Svg height="84" width="42" >
            <Circle
                cx="1"
                cy="42"
                r="40"
                stroke="#22DDF2"
                strokeWidth="3"
                fill="transparent"
                
            >

            </Circle>
        </Svg>
        
          <View style={{
            width: '105%', height: 79, borderRadius: 70,
            backgroundColor: Colors.secondary,
            position: 'absolute',
            top: 2.5,
            left: 0,
        }}>
            {children}
        </View>
     
    </View>
);


export default BottomBar;