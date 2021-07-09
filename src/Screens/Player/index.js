import React, {useState , useEffect} from 'react';

import {
    View,
    SafeAreaView,
    Text,
    StatusBar,
    TextInput,
    TouchableWithoutFeedback,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import Styled from 'styled-components/native';
import Slider from '@react-native-community/slider';
import {Colors, Images, Metrics} from '../../Constants';
import {McText , McImage, PlayButton} from '../../Components';
import { LinearGradient } from 'expo-linear-gradient';
import {dummyData} from '../../Mock';

import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';



const Player = ({navigation, route }) => {

    const [selectedMusic, setSelectedMusic] = useState(null);

    useEffect(()=>{
        let {musicSelected }= route.params;
        
        setSelectedMusic(musicSelected);
        console.log(musicSelected);
    },[])

    return (
   <Container>
       <HeaderSection>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <MaterialIcons name="keyboard-arrow-left" size={24} color="white" />
            </TouchableOpacity>
        
            <Entypo name="dots-three-horizontal" size={24} color="white" />
        
       </HeaderSection>

       <MusicDetailSection>
            <McImage source={selectedMusic?.thumbnail} style={{
                marginHorizontal: 81,
                marginVertical: 45,
                justifyContent: 'center',
                alignItems: 'center'
            }}/>
            <View  style={{
                marginTop: 12,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <McText medium size={21} color={Colors.grey5} align="center" >{selectedMusic?.title}</McText>
                <McText semi size={15} color={Colors.grey4} style={{marginTop: 8}}>{selectedMusic?.artist}</McText>
            </View>
       </MusicDetailSection>

       <SliderSection>
            <Slider
                minimunValue={0}
                maximumValue={1}
                value={0.2}
                minimumTrackTintColor={Colors.accent}
                maximumTrackTintColor={Colors.grey3}
                thumbImage={Images.thumb}
            >

            </Slider>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 18}}>
                <McText size={12} color={Colors.grey5}>0.17</McText>
                <McText size={12} color={Colors.grey5}>2.37</McText>
            </View>
       </SliderSection>
       <ControlSection>
            <Feather name="refresh-ccw" size={18} color="white" />
            <View style={{
                width: 215,
                height: 65,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <View style={{
                    width: 275,
                    height: 65,
                    borderRadius: 54,
                    backgroundColor: Colors.secondary,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 16,
                }}>
                    <Foundation name="previous" size={22} color="white" />
                    <View style={{
                        width: 85, height: 85, borderRadius: 85,
                        backgroundColor: Colors.background,
                        justifyContent: 'center', alignItems: 'center', paddingTop: 32, paddingLeft: 3
                    }}>
                        <PlayButton  size={75} icon="play"/>
                    </View>
                    <Foundation name="next" size={22} color="white" />
                </View>
                
            </View>
            <AntDesign name="sound" size={18} color="white" />
       </ControlSection>
       <LirycsSection>
            <AntDesign name="up" size={24} color="white" />
            <McText medium size={15} color={Colors.accent}>Lyrics</McText>     
       </LirycsSection>
   </Container>
);
}

const LirycsSection = Styled.View`
    margin: 14px 1px;
    align-items: center;
    justify-content: center;
`;

const ControlSection = Styled.View`
    margin: 32px 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    
`;

const SliderSection = Styled.View`
    margin-top: 16px;
`;

const MusicDetailSection = Styled.View`
    margin-top: 17%;
    justify-content: center;
    align-items: center;
`;

const Container = Styled.SafeAreaView`
    flex: 1;
    background-color: ${Colors.background};

`;


const HeaderSection = Styled.View`
    top: 3%;
    padding: 12px 12px;
    
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export default Player;
