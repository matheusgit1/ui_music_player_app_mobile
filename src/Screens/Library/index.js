import React from 'react';

import { View,SafeAreaView, Text, StatusBar,
    TextInput,
    TouchableWithoutFeedback,
    FlatList,
    ScrollView,
} from 'react-native';

import Styled from 'styled-components/native';

import {Colors, Images, Metrics} from '../../Constants';
import {McText , McImage, PlayButton} from '../../Components';
import { LinearGradient } from 'expo-linear-gradient';
import {dummyData} from '../../Mock';

import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons';

import BottomBar from './BottonBar';

const Library = ({navigation }) => {
    
    const _renderItem = ({item, index}) =>{
        return(
            <View>
                <View style={{
                    marginTop: 16,
                    marginLeft:index === 0? 14:1,
                    marginRight: index === dummyData.Playlist.length - 1?0: 12
                }}>
                    <McImage style={{
                        borderRadius: 12,
                        width: 3*45,
                        height: 3*45,
                        marginBottom: 12,
                    }}
                        key={index} source={item.thumbnail}

                    />
                    <McText semi size={16} color={Colors.grey5}>{item.name}</McText>
                    <McText medium size={12} color={Colors.grey3} style={{
                        marginTop: 4
                    }}>{item.songs} songs</McText>
                </View>
            </View>
        )
    }
    
    return (
   <Container>
        

        <ScrollView>
       
        <McText bold size={22} color={Colors.primary} style={{
            marginTop: '7%',
            marginBottom: '3%',
        }}>Library</McText>

        <SearchSection>
            <AntDesign name="search1" size={24} color="white" />
            <TextInput placeholder="song or artist" placeholderTextColor={Colors.grey3}
                style={{
                    color: Colors.grey4 , fontSize: 17, marginLeft: 7,
                }}
            />
        </SearchSection>
        <TitleSection>
            <McText medium size={17} color={Colors.grey4}>Playlist</McText>
            <TouchableWithoutFeedback onPress={()=>console.log("Go to playlist")}>
                <AntDesign name="rightcircleo" size={22} color="white" />
            </TouchableWithoutFeedback>
            
        </TitleSection>
        <View>
            <FlatList keyExtractor={(item)=>'playlist'+item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{}}
            data={dummyData.Playlist}
            renderItem={_renderItem}
            />
        </View>

        <TitleSection>
            <McText medium size={17} color={Colors.grey4}>Favorites</McText>
            <TouchableWithoutFeedback onPress={()=>console.log("Go to Favorits")}>
                <AntDesign name="rightcircleo" size={22} color="white" />
            </TouchableWithoutFeedback>
            
        </TitleSection>

        <View>
            <ScrollView
                contentContainerStyle={{}}
                style={{
                    marginTop: 9,
                    marginBottom: 92,
                }}
            >
                {
                    dummyData.Favorites.map((item, index)=>{
                        return (
                            <TouchableWithoutFeedback onPress={()=>navigation.navigate('Player', {musicSelected: item})}>
                                <FavoriteItemView key={item.id}>
                                    
                                    <View style={{flexDirection:'row'}}>
                                        <MusicCircle>
                                            <Ionicons name="musical-notes-outline" size={24} color="white" />
                                        </MusicCircle>
                                        <View  style={{marginLeft: 14}}>
                                            <McText semi size={14} color={Colors.grey5}>{item.title}</McText>
                                            <McText medium size={12} color={Colors.grey3}>{item.artist}</McText>
                                        </View>
                                            
                                    </View>
                                    <Ionicons name="heart-outline" size={22} color="white" />
                                    
                                </FavoriteItemView>
                            </TouchableWithoutFeedback>
                        )
                    })
                }
            </ScrollView>
            
        </View>
        
        
        </ScrollView>
        <View style={{
            justifyContent: 'center', alignItems: 'center',
        }}>
            <BottomSection style={{
                marginTop: 5,
                position: 'absolute'
            }}>
                <BottomBar>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',          
                        alignItems: 'center',
                        paddingLeft: 12,
                        paddingRight: 1,
                    }}>
                       <View style={{
                                width: 48, height: 48, justifyContent: 'center', alignItems: 'center',
                                backgroundColor: '#fff', borderRadius: 24, marginTop: -32,
                            }}>
                            <McImage source={require('Assets/images/thb3.jpg')}
                            style={{
                                width: 42, height: 42, borderRadius: 19,
                                
                            }}
                            ></McImage>
                        </View>
                        <View style={{
                                justifyContent: 'flex-start', alignItems: 'flex-start', marginLeft: 8, marginTop: -32,
                            }}>
                            <McText medium size={18} color={Colors.grey5}>Thunder</McText>
                            <McText semi size={12} color={Colors.grey3}>Imagine Dragon</McText>
                        </View>
                        <View >
                            <PlayButton size={12} circle={25} icon="pause-circle"/>
                            
                        </View>
                        
                    </View>
                    
                </BottomBar>
            </BottomSection>
        </View>
        
   </Container>
);
}


const BottomSection = Styled.View`
    margin-top: 25px,
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    position: absolute;
    bottom: 7px;
    z-index: 1;
`;


const MusicCircle = Styled.View`
    width: 42px;
    height: 42px;
    border-radius: 42px;
    background-color: ${Colors.secondary};
    justify-content: center;
    align-items: center;
`;

const FavoriteItemView = Styled.View`
    margin: 15px 8px;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`;

const Container = Styled.SafeAreaView`
    flex: 1;
    padding-left: 3%;
    padding-right: 3%;
    background-color: ${Colors.background};
`;

const SearchSection = Styled.View`
    height: 52px;
    border-radius: 29px;
    background-color: ${Colors.secondary};
    margin: 1px 1px 0px;
    flex-direction: row;
    align-items: center;
    padding-left:  8px;
`;

const TitleSection = Styled.View`
    margin: 20px 14px 0px;
    flex-direction: row ;
    justify-content: space-between;
    align-items: center;
`;


export default Library;
